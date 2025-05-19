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
    <main className="flex flex-col min-h-screen pt-[10px] text-green-900 bg-gradient-to-br from-green-200 via-teal-100 to-blue-200">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1 flex-grow">
        {/* ✅ モバイル用：ロゴのみ表示 */}
        <div className="flex sm:hidden justify-center mb-4">
          <Image
            src="/logo_black.png"
            alt="ロゴ"
            width={120}
            height={120}
            className="w-24"
          />
        </div>

        {/* ✅ タブレット以上：ロゴ＋会社名表示 */}
        <div className="hidden sm:flex flex-row items-center justify-center gap-6 text-center">
          <Image
            src="/logo_black.png"
            alt="ロゴ"
            width={150}
            height={150}
            className="w-32 sm:w-48"
          />
          <h1 className="font-handwritten text-black font-bold text-3xl sm:text-5xl drop-shadow-lg">
            株式会社狩野設備工業
          </h1>
        </div>

        {/* カード部分 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-15">
          {cards.map((item, i) => (
            <motion.div
              key={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white p-7 sm:p-7 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 hover:bg-green-100 transition duration-300"
            >
              <Link href={item.href} className="block h-full">
                <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-3 sm:mb-8">
                  {item.title}
                </h2>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 丸型ボタン */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-12">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="bg-blue-700 hover:bg-green-900 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-6 sm:py-8 rounded-full shadow-lg cursor-pointer w-30 sm:w-52 text-center"
          >
            <Link href="/recruit">採用情報</Link>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="bg-red-700 hover:bg-green-900 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-6 sm:py-8 rounded-full shadow-lg cursor-pointer w-30 sm:w-52 text-center"
          >
            <Link href="/contact">お問い合わせ</Link>
          </motion.div>
        </div>

      </div>

      {/* フッター */}
      <footer className="py-6 text-center text-sm text-black drop-shadow mt-auto px-4">
        © 2025 株式会社狩野設備工業 | 山形県南陽市宮内4552-1 | TEL 0238-47-7134
      </footer>
    </main>
  );
}
