import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AFFAF - مهندس برق و هوش مصنوعی',
  description: 'پروژه‌ها و مقالات مهندسی برق، هوش مصنوعی و تکنولوژی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}