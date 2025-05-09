import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 text-green-900">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">狩野設備工業株式会社</h1>
        <p className="text-lg max-w-xl mx-auto">
          私たちは配管・設備工事のプロフェッショナル集団です。安心・安全・確実な施工を提供します。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-green-800">会社概要</h2>
          <p className="text-gray-700 mb-4">会社の歴史、理念、強みを紹介します。</p>
          <Link href="/about">
            <span className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">
              もっと見る
            </span>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-green-800">サービス</h2>
          <p className="text-gray-700 mb-4">私たちが提供する設備工事・保守サービスの詳細。</p>
          <Link href="/services">
            <span className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">
              もっと見る
            </span>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-green-800">お問い合わせ</h2>
          <p className="text-gray-700 mb-4">見積依頼・お問い合わせはこちらから。</p>
          <Link href="/contact">
            <span className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">
              問い合わせる
            </span>
          </Link>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-green-700">
        © 2025 狩野設備工業株式会社
      </footer>
    </main>
  );
}