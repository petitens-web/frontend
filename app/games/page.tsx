"use client";

import { api } from "@/lib/api";
import { Game } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const allGames = await api.games.getAll();
        setGames(allGames);
      } catch {
        setError("Failed to load games");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading games...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <p className="text-red-400 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-white mb-8">All Games</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link
              key={game._id}
              href={`/games/${game.slug}`}
              className="group bg-gray-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl overflow-hidden hover:ring-2 hover:ring-yellow-400 transition-all"
            >
              <div className="relative aspect-square bg-gray-700">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
                {game.isNew && (
                  <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold truncate">{game.title}</h3>
                <p className="text-gray-400 text-sm">{game.provider}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
