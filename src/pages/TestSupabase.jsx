import { supabase } from "@/lib/supabase"; // Asegúrate de importar correctamente

export function TestSupabase(){

    const fetchMoviesFromSupabase = async () => {
        const { data, error } = await supabase.from("movies").select("*");
        if (error) {
          console.error("Error fetching movies:", error);
        } else {
          console.log("Movies from Supabase:", data);
        }
      };
      
    fetchMoviesFromSupabase();

    return (
        <h1>
            Este es el test de supabase....
        </h1>
    )
}
