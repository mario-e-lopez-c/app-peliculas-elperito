import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const API_KEY = "abecf935ef7a77a0d440319fa87de611";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const MOVIES_PER_PAGE = 8;

export function Home() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchMovies();
    }, [page, query]); // Re-fetch when `page` or `query` changes

    const fetchMovies = async () => {
        try {
            const searchQuery = query.trim();
    
            // Fetch TMDB Movies
            const tmdbEndpoint = searchQuery
                ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
                : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    
            const tmdbResponse = await fetch(tmdbEndpoint);
            const tmdbData = await tmdbResponse.json();
            const tmdbMovies = tmdbData.results.map((movie) => ({
                id: `tmdb-${movie.id}`,
                title: movie.title,
                poster_url: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "/no-image.jpg",
                rating: movie.vote_average,
                source: "TMDB"
            }));
    
            // Fetch Supabase Movies with Pagination
            let supabaseQuery = supabase
                .from("movies")
                .select("*", { count: "exact" })
                .range((page - 1) * MOVIES_PER_PAGE, page * MOVIES_PER_PAGE - 1);
    
            if (searchQuery) {
                supabaseQuery = supabaseQuery.ilike("title", `%${searchQuery}%`);
            }
    
            const { data: supabaseMovies, count: supabaseCount, error } = await supabaseQuery;
            if (error) console.error("Error fetching Supabase movies:", error);
    
            // Merge both sources without re-slicing
            const allMovies = [...(supabaseMovies || []), ...tmdbMovies];
    
            setMovies(allMovies);
    
            // Update Total Pages
            const totalMovies = (supabaseCount || 0) + (tmdbData.total_results || 0);
            setTotalPages(Math.ceil(totalMovies / MOVIES_PER_PAGE));
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setPage(1); // Reset to first page when searching
        await fetchMovies(); // Ensure search updates immediately
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">🎬 Popular Movies</h1>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2 mb-6">
                <Input 
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit">Search</Button>
            </form>
            
            {/* Movie Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="bg-white shadow-md rounded-lg p-4">
                            <img
                                src={movie.poster_url}
                                alt={movie.title}
                                className="rounded-lg"
                            />
                            <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
                            <p className="text-gray-600">⭐ {movie.rating || "N/A"}</p>
                            <p className="text-xs text-gray-400">
                                {movie.source === "TMDB" ? "📡 TMDB" : "🗂️ Internal DB"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 space-x-4">
                <Button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                   ⬅️ Previous 
                </Button>
                <span className="text-lg font-semibold">
                    Page {page} of {totalPages}
                </span>
                <Button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Next ➡️
                </Button>
            </div>
        </div>
    );
}
