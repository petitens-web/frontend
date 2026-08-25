"use client";

import Link from "next/link";
import { useState } from "react";

interface Game {
  id: string;
  title: string;
  provider: string;
  thumbnail: string;
  category: string;
}

export default function GameLobbyPreview() {
  const [activeTab, setActiveTab] = useState<"popular" | "new" | "jackpots">("popular");

  // Mock data - In production, this would come from the API
  const games: Record<string, Game[]> = {
    popular: [
      { id: "1", title: "Mega Fortune", provider: "NetEnt", thumbnail: "🎰", category: "slots" },
      { id: "2", title: "Book of Dead", provider: "Play'n GO", thumbnail: "📚", category: "slots" },
      { id: "3", title: "Starburst", provider: "NetEnt", thumbnail: "⭐", category: "slots" },
      { id: "4", title: "Gonzo's Quest", provider: "NetEnt", thumbnail: "🗿", category: "slots" },
      { id: "5", title: "Lightning Roulette", provider: "Evolution", thumbnail: "⚡", category: "live" },
      { id: "6", title: "Blackjack Classic", provider: "Evolution", thumbnail: "🃏", category: "table" },
    ],
    new: [
      { id: "7", title: "Gates of Olympus", provider: "Pragmatic", thumbnail: "⚡", category: "slots" },
      { id: "8", title: "Sweet Bonanza", provider: "Pragmatic", thumbnail: "🍭", category: "slots" },
      { id: "9", title: "Reactoonz", provider: "Play'n GO", thumbnail: "👾", category: "slots" },
      { id: "10", title: "Wolf Gold", provider: "Pragmatic", thumbnail: "🐺", category: "slots" },
      { id: "11", title: "Dead or Alive 2", provider: "NetEnt", thumbnail: "💀", category: "slots" },
      { id: "12", title: "Viking Runecraft", provider: "Play'n GO", thumbnail: "⚔️", category: "slots" },
    ],
    jackpots: [
      { id: "13", title: "Mega Moolah", provider: "Microgaming", thumbnail: "🦁", category: "jackpot" },
      { id: "14", title: "Divine Fortune", provider: "NetEnt", thumbnail: "🏛️", category: "jackpot" },
      { id: "15", title: "Hall of Gods", provider: "NetEnt", thumbnail: "⚡", category: "jackpot" },
      { id: "16", title: "Arabian Nights", provider: "NetEnt", thumbnail: "🧞", category: "jackpot" },
      { id: "17", title: "Major Millions", provider: "Microgaming", thumbnail: "💰", category: "jackpot" },
      { id: "18", title: "Treasure Nile", provider: "Microgaming", thumbnail: "🏺", category: "jackpot" },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Games</h2>
          <p className="text-lg text-gray-600">Play the hottest games and win big!</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("popular")}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              activeTab === "popular"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            🔥 Popular
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              activeTab === "new"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            ✨ New Games
          </button>
          <button
            onClick={() => setActiveTab("jackpots")}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              activeTab === "jackpots"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            💎 Jackpots
          </button>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {games[activeTab].map((game) => (
            <div
              key={game.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl">
                {game.thumbnail}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1 truncate">{game.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{game.provider}</p>
                <button className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/games"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            View All 1000+ Games →
          </Link>
        </div>
      </div>
    </section>
  );
}
