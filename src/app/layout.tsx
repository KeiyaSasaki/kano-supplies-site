import './globals.css';

export const metadata = {
  title: '狩野設備工業株式会社',
  description: '設備工事のプロフェッショナル集団',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
