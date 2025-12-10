'use client';
import { Search } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-8 mb-8 shadow-2xl border-4 border-yellow-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mb-32"></div>
        
        <div className="relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-full border-4 border-gray-800 shadow-2xl flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full shadow-inner"></div>
            </div>
            <h1 className="text-white font-bold text-5xl tracking-wider drop-shadow-lg">
            POKÉDEX
            </h1>
        </div>

        <div className="relative max-w-md mx-auto">
            <input
            type="text"
            placeholder="Buscar Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-4 pr-12 rounded-2xl bg-white bg-opacity-20 backdrop-blur-sm border-2 border-yellow-400 text-white placeholder-yellow-200 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 w-6 h-6" />
        </div>
        </div>
    </div>
  )
}
