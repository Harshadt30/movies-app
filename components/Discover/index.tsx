import useFetch from "../../hooks/useFetch";

type Props = {
  type?: string;
};

function Discover(props: Props) {
  const { type = "movie" } = props;
  const URL = process.env.MOVIE_DB_URL;
  const API_KEY = process.env.MOVIE_DB_API_KEY;
  const MOVIE_DB_IMAGE_URL = process.env.MOVIE_DB_IMAGE_URL;
  const { error, loading, reponse } = useFetch({
    url: `${URL}discover/${type}?api_key=${API_KEY}`,
  });
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error....</h1>;
  return reponse.results.map((item: object) => (
    <div key={item.id} className="movie-wrapper">
      <div className="img-wrapper square">
        <img
          className="movie--poster"
          src={`${MOVIE_DB_IMAGE_URL}${item.poster_path}`}
          alt=""
        />
      </div>
      <h3 className="movie--title">{item.title}</h3>
    </div>
  ));
}

export default Discover;
