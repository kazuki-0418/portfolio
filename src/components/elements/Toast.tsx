import React from "react";
import { Toaster } from "react-hot-toast";

export const Toast = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerStyle={{
        top: 50,
        right: 20,
      }}
      toastOptions={{
        success: {
          duration: 5000,
          style: {
            background: "#4caf50",
            color: "#fff",
            fontSize: "16px",
            padding: "10px 20px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#4caf50",
          },
        },
        error: {
          duration: 5000,
          style: {
            background: "#f44336",
            color: "#fff",
            fontSize: "16px",
            padding: "10px 20px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#f44336",
          },
        },
      }}
    />
  );
};
