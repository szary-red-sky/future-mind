interface Props {
  label: string;
  value: string;
}

function MovieProps({ label, value }: Props) {
  return (
    <span>
      <b>{label}</b>: {value}
    </span>
  );
}

export default MovieProps;
