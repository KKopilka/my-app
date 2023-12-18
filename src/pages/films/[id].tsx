import Details from "@/components/templates/Details";
import { useRouter } from "next/router";

const MovieDetailsPage = () => {
  const router = useRouter();
  const movieId = router.query.id as string;

  return <Details movieId={movieId} />;
};

export default MovieDetailsPage;