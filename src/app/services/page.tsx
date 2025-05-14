'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from './../components/Header';

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const cards = [
    { title: '会社概要', href: '/about' },
    { title: '企業理念', href: '/philosophy' },
    { title: '施工事例', href: '/project' },
    { title: 'サービス', href: '/services' },
    { title: '社員の声', href: '/voices' },
    { title: 'ニュース', href: '/news' },
  ];

  return (
    <main className="flex flex-col bg-green-50 text-green-900 pt-[20px]"> {/* ヘッダー分の余白を追加 */}
      {/* ✅ Headerはここ（トップレベルに配置） */}
      <Header />

      {/* ✅ 中身 */}
      <div className="max-w-7xl mx-auto px-6 pb-10 flex-grow">
        {/* ロゴと会社名 */}
        <div className="flex items-center justify-center gap-6 mb-10 text-center">
          <Image src="/logo_black.png" alt="ロゴ" width={200} height={200} />
          <h1 className="font-handwritten text-black font-bold text-5xl sm:text-6xl mb-4 drop-shadow-lg">
            株式会社狩野設備工業
          </h1>
        </div>

        {/* カード部分 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
          {cards.map((item, i) => (
            <motion.div
              key={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white p-12 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 hover:bg-green-100 transition duration-300"
            >
              <Link href={item.href} className="block h-full">
                <h2 className="text-2xl font-semibold text-green-800 mb-5">{item.title}</h2>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 丸型ボタン */}
        <div className="flex justify-center gap-10 mt-[60px] mb-[11px]" >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="bg-blue-700 hover:bg-green-700 text-white text-lg font-semibold px-8 py-8 rounded-full shadow-lg cursor-pointer"
          >
            <Link href="/recruit">採用情報</Link>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
            className="bg-red-800 hover:bg-green-900 text-white text-lg font-semibold px-8 py-8 rounded-full shadow-lg cursor-pointer"
          >
            <Link href="/contact">お問い合わせ</Link>
          </motion.div>
        </div>
      </div>

      {/* フッター */}
      <footer className="py-6 text-center text-sm text-black drop-shadow mt-auto">
        © 2025 株式会社狩野設備工業 | 山形県南陽市宮内4552-1 | TEL 0238-47-7134
      </footer>
    </main>
  );
}
