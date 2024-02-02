import {currentUser, UserButton} from "@clerk/nextjs";
import {PrismaClient} from "@prisma/client";
import Nav from "@/components/nav"
import Film from "@/components/film";


export default async function Home() {

  const user = await currentUser();

  const db = new PrismaClient()

  const filmer = await db.film.findMany();
//
  return (
    <div className={"h-screen"}>
      <Nav user={user}/>
      <main className={"w-1/3 m-auto flex-row h-2/4"}>
        <div className={"text-2xl mb-1"}>Filmer</div>
        <div className={"p-2 bg-slate-200 rounded h-full"}>
          {filmer.map((film) => <Film film={film} />)}
        </div>
      </main>

    </div>
  );
}
