import {Film} from "@prisma/client";

interface NavProps {
  film: Film
}

export default async function Film( props : NavProps) {
  const film = props.film;

  return (
    <div className={"rounded bg-white m-2 p-2"}>
      <div className={"text-2xl"}>{film.name}</div>
      <div className={"text-xl"}>{film.description}</div>
    </div>
  )
}