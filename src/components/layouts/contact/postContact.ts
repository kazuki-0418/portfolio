"use client";

import { FormData } from "./schema";
import { toast } from "react-hot-toast";

export const onFormPostContact = async (data: FormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain", //レスポンスのコンテンツを定義
        "Content-Type": "application/json", // JSON形式のデーターをサーバーに送信
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("An error occurred during communication.");
    }

    toast.success(`${data.name}
      Thank you for your message! 
      I will contact you soon.`);
  } catch (error) {
    toast.error(`Failed to submit the data. Please try again., ${error}`);
    return {
      message: `Failed to submit the data. Please try again. ${error}`,
    };
  }
};
