import React from "react";
import Link from "next/link";
import { onFormPostContact } from "./postContact";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { contactSchema, type FormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FluidShape } from "./FluidShape";

const Submit = () => {
  const { formState } = useFormContext();

  return (
    <button
      type="submit"
      disabled={formState.isSubmitting}
      className="
      bg-gray-900
      hover:bg-gray-700
      text-white
      font-bold
      py-2
      px-4
      rounded
      focus:outline-none
      focus:shadow-outline
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
    >
      {formState.isSubmitting ? "Sending..." : "Send"}
    </button>
  );
};

export const ContactPage = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="h-full flex flex-col items-end bg-gray-200">
      <FormProvider {...form}>
        {/* デスクトップ用の黒い背景 - lg以上でのみ表示 */}
        <div className="hidden lg:block relative top-0 left-0 w-full h-1/3 bg-black" />

        {/* メインコンテンツエリア */}
        <div
          className="flex flex-col lg:flex-row lg:justify-start lg:pl-48 p-14 h-2/3 lg:h-2/3 w-full z-20 inset-0 relative"
          data-container // FluidShapeがこのコンテナを参照する
          style={{ position: "relative", overflow: "hidden" }} // 重要：相対位置とオーバーフロー制御
        >
          <FluidShape random={0.08} />
          <FluidShape random={0.05} />
          <FluidShape random={0.02} />

          {/* フォームセクション */}
          <div className="space-y-6 w-full lg:w-2/3 z-20">
            <form onSubmit={form.handleSubmit(onFormPostContact)}>
              <Name />
              <Email />
              <Message />

              <div className="flex items-center justify-start">
                <Submit />
              </div>
            </form>
          </div>

          {/* フッター/リンクセクション */}
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:mx-20 lg:items-end w-full text-black gap-4 lg:gap-0 mt-10 lg:mt-0">
            {/* ソーシャルリンク */}
            <div className="flex flex-col lg:flex-col items-center lg:items-start gap-4 lg:gap-8">
              <p className="text-sm font-light">
                <Link
                  href="https://github.com/kazuki-0418"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </p>
              <p className="text-sm font-light">
                <Link
                  href="https://www.linkedin.com/in/kazuki-jo-5461b02b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </p>
            </div>

            {/* コピーライト */}
            <p className="text-sm font-light text-center lg:text-right">
              © 2024 Kazuki Jo. All Rights Reserved
            </p>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

const Name = () => {
  const { register, formState } = useFormContext();
  return (
    <div className="mb-2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 w-fit"
        htmlFor="name"
      >
        ° Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("name")}
        type="text"
        placeholder="Name"
      />
      {formState.errors.name && (
        <p className="text-red-500 text-xs italic">
          {formState.errors.name.message as string}
        </p>
      )}
    </div>
  );
};

const Email = () => {
  const { register, formState } = useFormContext();
  return (
    <div className="mb-2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 w-fit"
        htmlFor="email"
      >
        ° Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("email")}
        type="email"
        placeholder="Email"
      />
      {formState.errors.email && (
        <p className="text-red-500 text-xs italic">
          {formState.errors.email.message as string}
        </p>
      )}
    </div>
  );
};

const Message = () => {
  const { register, formState } = useFormContext();
  return (
    <div className="mb-2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 w-fit"
        htmlFor="message"
      >
        ° Message
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("message")}
        placeholder="Message"
        rows={5}
      />
      {formState.errors.message && (
        <p className="text-red-500 text-xs italic">
          {formState.errors.message.message as string}
        </p>
      )}
    </div>
  );
};
