interface Props {
  url: string;
  title: string;
  large?: boolean;
}
const MoviePoster = ({ url, title, large = false }: Props) => {
  return (
    <img
      src={url}
      alt={title}
      className={`${
        large ? "w-full sm:w-24 mb-3" : "w-24 h-36 mr-4 "
      } sm:mb-0 sm:mr-4 object-cover `}
    />
  );
};

export default MoviePoster;
