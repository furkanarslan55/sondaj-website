// components/Header.tsx
"use client"; // Tıklama olayları için zorunlu

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10 text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO ALANI */}
        <Link href="/" className="text-2xl font-black tracking-wider group">
          <span className="text-white group-hover:text-gray-200 transition">TERRA</span>
          <span className="text-orange-500">SONDAJ</span>
        </Link>

        {/* MENÜ ALANI (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm font-medium tracking-wide">
            <li><Link href="/" className="hover:text-orange-400 transition duration-300">ANASAYFA</Link></li>
            <li><Link href="/hizmetler" className="hover:text-orange-400 transition duration-300">HİZMETLER</Link></li>
                    <li><Link href="/hakkimizda" className="hover:text-orange-400 transition duration-300">HAKKIMIZDA</Link></li>
            <li><Link href="/blog" className="hover:text-orange-400 transition duration-300">BLOG</Link></li>
            <li><Link href="/iletisim" className="hover:text-orange-400 transition duration-300">İLETİŞİM</Link></li>
          </ul>
          
          <a 
            href="tel:+905428312094" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-bold text-sm transition shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
          >
            <span>📞</span> 0542 831 20 94
          </a>
        </nav>
        
        {/* MOBİL MENÜ BUTONU */}
        <button 
          className="md:hidden text-2xl cursor-pointer p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBİL MENÜ LİSTESİ (Açılır/Kapanır Alan) */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-gray-800 absolute w-full left-0 shadow-2xl">
          <ul className="flex flex-col p-4 space-y-4 font-medium text-center">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-orange-400 hover:bg-slate-800 rounded transition">
                ANASAYFA
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-orange-400 hover:bg-slate-800 rounded transition">
                HİZMETLER
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-orange-400 hover:bg-slate-800 rounded transition">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/referanslar" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-orange-400 hover:bg-slate-800 rounded transition">
                REFERANSLAR
              </Link>
            </li>
            <li>
              <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-orange-400 hover:bg-slate-800 rounded transition">
                İLETİŞİM
              </Link>
            </li>
            <li className="pt-2">
               <a 
                href="tel:+905428312094" 
                className="bg-orange-600 block w-full py-3 rounded-full text-white font-bold"
              >
                📞 ARA: 0542 831 20 94
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
