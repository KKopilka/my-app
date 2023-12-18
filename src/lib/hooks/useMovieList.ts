import { useQuery, useQueryClient } from "@tanstack/react-query";
import { listMoviesQuery } from "@/lib/api";

export const useMovieList = (currentPage: string, pageSize: string, category: string) => {
    const queryClient = useQueryClient();

    const {
        data: movieList,
        isSuccess,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["getMovieList", currentPage, pageSize, category],
        queryFn: () => listMoviesQuery(currentPage, pageSize, category),
        staleTime: 1000 * 60 * 60,
    });

    const updateMovieList = () => {
        return queryClient.invalidateQueries({ queryKey: ["getMovieList"] });
    };

    console.log('movieList', movieList)

    return {
        movieList,
        updateMovieList,
        isSuccess,
        isLoading,
        isError,
      };
};