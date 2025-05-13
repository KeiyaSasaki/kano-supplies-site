'use client';
import React from 'react';
import Link from 'next/link';
import Header from './../components/Header';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} // ← 公開用画像を配置
    >
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* 全体レイアウト */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Hero (中央) */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            株式会社狩野設備工業
          </h1>
          <p className="text-lg sm:text-xl mb-8 drop-shadow">
            私たちは配管・設備工事のプロフェッショナル集団です。<br />
            安心・安全・確実な施工を提供します。
          </p>
          <Link href="/services">
            <span className="inline-block px-8 py-4 bg-white bg-opacity-20 text-white border border-white rounded-full hover:bg-opacity-40 transition backdrop-blur-md">
              → Click Here
            </span>
          </Link>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-white drop-shadow">
          © 2025 株式会社狩野設備工業 | 山形県南陽市宮内4552-1 | TEL 0238-47-7134
        </footer>
      </div>
    </main>
  );
}
