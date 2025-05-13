'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // メニュー開いたらスクロール禁止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <header className="px-6 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center space-x-4">
            <Image src="/logo_white.png" alt="ロゴ" width={50} height={50} />
            <span className="text-xl font-bold text-white">株式会社狩野設備工業</span>
          </div>

          {/* ハンバーガーボタン */}
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="メニューを開く"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* オーバーレイメニュー */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* 背景（半透明黒） */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* メニュー本体 */}
          <div className="ml-auto w-64 bg-white h-full p-6 shadow-lg relative z-10 animate-slide-in-right">
            <button
              className="absolute top-4 right-4 text-green-800"
              onClick={() => setIsOpen(false)}
              aria-label="メニューを閉じる"
            >
              <X size={28} />
            </button>
            <nav className="mt-12 flex flex-col space-y-4 text-green-800 text-lg">
              <Link href="/about" onClick={() => setIsOpen(false)}>会社概要</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>サービス</Link>
              <Link href="/project" onClick={() => setIsOpen(false)}>施工事例</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
