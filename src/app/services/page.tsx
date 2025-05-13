'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
    { title: 'サービス', href: '/services' },
    { title: '施工事例', href: '/project' },
    { title: 'お問い合わせ', href: '/contact' },
    { title: '企業理念', href: '/philosophy' },
    { title: '社員の声', href: '/voices' },
    { title: '採用情報', href: '/recruit' },
    { title: 'ニュース', href: '/news' },
  ];

  return (
    <main className="min-h-screen bg-green-50 text-green-900 py-10">
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-green-800 mb-10 text-center flex justify-center">
          <Image src="/logo_black.png" alt="ロゴ" width={250} height={250} />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <motion.div
              key={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 hover:bg-green-100 transition duration-300"
            >
              <Link href={item.href} className="block h-full">
                <h2 className="text-2xl font-semibold text-green-800 mb-2">{item.title}</h2>
                <p className="text-green-700">→ 詳しく見る</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
