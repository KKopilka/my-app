import axios from "../axios";

export type MovieItems = {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: ServerItem[];
}

export type ServerItem = {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
} 

export type MovieList = {
  id: number;
  url: string;
  title: string;
  title_english: string;
  title_long: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  language: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  download_count: number;
  like_count: number;
  torrents: {
    url: string;
    quality: string;
    type: string;
    is_repack: string;
    video_codec: string;
    bit_depth: string;
    audio_channels: string;
    size: string;
    size_bytes: number;
    date_uploaded: string;
  }[];
};

export const listMoviesQuery = async (currentPage: string, pageSize: string, category: string) => {
  const response = await axios.get<{
    data: MovieItems;
  }>(`list_movies.json?limit=${pageSize}&page=${currentPage}&genre=${category}`)

  return response.data
}
export const filmRetrieveQuery = async (id: string) => {
  const response = await axios.get<{
    data: {
      movie: MovieList;
    };
  }>(`movie_details.json?movie_id=${id}`);
  return response.data;
};
