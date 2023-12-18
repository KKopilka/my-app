"use client"

import { useState } from "react";
import Pagination from "@/components/common/Pagination/Pagination";
import { useMovieList } from "@/lib/hooks/useMovieList";
import MovieItem from "./Film/MovieItem";
import { useSearchParams } from "next/navigation";

const Movies = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const searchParams = useSearchParams();

    const { movieList, isLoading } = useMovieList(String(page), String(pageSize), String(searchParams.get('category')))

    if (isLoading) {
        return;
    }

    const totalCount = movieList?.data?.movie_count
    const moviesList = movieList?.data?.movies?.map((movie) => {
        return <MovieItem {...movie}></MovieItem>;
    });

    const divStyle = {
        backgroundColor: '#10103030' 
    }

    return moviesList ? (
        <div style={divStyle}>
            <div className="movies-list-table">
                {moviesList}
            </div>
            <Pagination
                totalUsersCount={totalCount}
                pageSize={pageSize}
                currentPage={page}
                onPageChange={(pageNumber, pageSize) => {
                    setPage(pageNumber);
                } }  />
        </div>
    ) : null;
};

export default Movies;