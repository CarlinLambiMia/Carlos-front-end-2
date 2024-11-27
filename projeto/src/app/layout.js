import "./globals.css";
import Header from "@/components/Header";
import React from "react";

export const metadata = {
  title: "Atividade Header",
  description: "Algo",
  charset: 'UTF-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>

    </html>
  );
}
