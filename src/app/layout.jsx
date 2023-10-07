import "./globals.css";

export const metadata = {
  title: "Fried Egg Random Topping",
  description:
    "目玉焼きにかける調味料をランダムに決められます、いつも同じ調味料を使うのに飽きた方へ、新しい食事のアイデアを提供します",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
