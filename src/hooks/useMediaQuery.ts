"use client";

import { useEffect, useCallback, useMemo, useRef } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

// 定数を分離して管理
const BREAKPOINTS = {
  MOBILE: "(max-width: 768px)",
  DESKTOP: "(min-width: 1200px)",
} as const;

type BreakpointKey = keyof typeof BREAKPOINTS;
type MediaQueryState = Record<Lowercase<BreakpointKey>, boolean>;

// Recoilのステート定義
const mediaQueryState = atom<MediaQueryState>({
  key: "mediaQueryState",
  default: {
    mobile: false,
    desktop: false,
  },
});

// メディアクエリの監視を行うカスタムフック（最適化版）
const useMediaQuery = (query: string, callback: (matches: boolean) => void) => {
  // 最新のコールバックを参照するためのref
  const callbackRef = useRef(callback);

  // コールバックの更新
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // メモ化されたイベントハンドラー
  const handler = useCallback((e: MediaQueryListEvent) => {
    callbackRef.current(e.matches);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(query);

    // 初期状態の設定
    if (mql.matches !== undefined) {
      callbackRef.current(mql.matches);
    }

    // イベントリスナーの登録
    mql.addEventListener("change", handler);

    return () => {
      mql.removeEventListener("change", handler);
    };
  }, [query, handler]);
};

// メディアクエリの更新を一括で処理するカスタムフック
const useMediaQueries = () => {
  const setMediaQueryState = useSetRecoilState(mediaQueryState);

  // ステート更新関数をメモ化
  const updateState = useCallback(
    (key: Lowercase<BreakpointKey>, matches: boolean) => {
      setMediaQueryState((prev) => {
        // 値が変更された場合のみ新しいオブジェクトを返す
        if (prev[key] === matches) return prev;
        return { ...prev, [key]: matches };
      });
    },
    [setMediaQueryState]
  );

  // メモ化されたコールバック関数
  const mobileCallback = useCallback(
    (matches: boolean) => {
      updateState("mobile", matches);
    },
    [updateState]
  );

  const desktopCallback = useCallback(
    (matches: boolean) => {
      updateState("desktop", matches);
    },
    [updateState]
  );

  return { mobileCallback, desktopCallback };
};

interface MediaQueryProviderProps {
  children: React.ReactNode;
}

export const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
  // コールバック関数を取得
  const { mobileCallback, desktopCallback } = useMediaQueries();

  // メモ化されたブレイクポイント
  const mobileQuery = useMemo(() => BREAKPOINTS.MOBILE, []);
  const desktopQuery = useMemo(() => BREAKPOINTS.DESKTOP, []);

  // メディアクエリの監視を設定
  useMediaQuery(mobileQuery, mobileCallback);
  useMediaQuery(desktopQuery, desktopCallback);

  return children;
};

// 最適化されたカスタムフック
export const useIsMobile = () => {
  const state = useRecoilValue(mediaQueryState);
  return state.mobile;
};

export const useIsDesktop = () => {
  const state = useRecoilValue(mediaQueryState);
  return state.desktop;
};
