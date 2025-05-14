'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header({ variant = 'default' }: { variant?: 'default' | 'hero' }) {
  const [isOpen, setIsOpen] = useState(false);
  const isHero = variant === 'hero';

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      <header
        className={`px-6 py-4 top-0 left-0 right-0 z-50 fixed ${isHero
          ? 'bg-transparent text-white'
          : 'bg-opacity-0 text-green-900'
          }`}
        style={{ width: '100%' }}
      >
        <div className="flex items-center justify-between w-full">
          {/* ロゴ & 会社名 */}
          {isHero && (
            <div className="flex items-center space-x-4 min-h-[50px]">
              <Image
                src="/logo_white.png"
                alt="ロゴ"
                width={50}
                height={50}
                priority
              />
              <span className="font-handwritten text-xl font-bold text-white">
                株式会社狩野設備工業
              </span>
            </div>
          )}

          {/* サービスページの場合はロゴと会社名を非表示 */}
          {!isHero && (
            <div className="flex items-center space-x-4 min-h-[50px]" style={{ visibility: 'hidden' }}>
              <Image
                src="/logo_white.png"
                alt="ロゴ"
                width={50}
                height={50}
              />
              <span className="font-handwritten text-xl font-bold text-white">
                株式会社狩野設備工業
              </span>
            </div>
          )}

          {/* ハンバーガーメニュー */}
          <button
            className={`${isHero ? 'text-white' : 'text-black'} h-[50px] w-[50px] flex items-center justify-center`} // サイズを50pxに指定
            onClick={() => setIsOpen(true)}
            aria-label="メニューを開く"
          >
            <Menu size={50} />  {/* ハンバーガーアイコンを50pxに変更 */}
          </button>
        </div>
      </header>

      {/* オーバーレイメニュー */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 right-0 w-64 bg-white h-full p-6 shadow-lg z-10 animate-slide-in-right">
            <button
              className="absolute top-4 right-4 text-green-800"
              onClick={() => setIsOpen(false)}
              aria-label="メニューを閉じる"
            >
              <X size={28} />
            </button>
            <nav className="mt-12 flex flex-col space-y-4 text-green-800 text-lg">
              <Link href="/about" onClick={() => setIsOpen(false)}>会社概要</Link>
              <Link href="/philosophy" onClick={() => setIsOpen(false)}>企業理念</Link>
              <Link href="/project" onClick={() => setIsOpen(false)}>施工事例</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>サービス</Link>
              <Link href="/voices" onClick={() => setIsOpen(false)}>社員の声</Link>
              <Link href="/recruit" onClick={() => setIsOpen(false)}>採用情報</Link>
              <Link href="/news" onClick={() => setIsOpen(false)}>ニュース</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
