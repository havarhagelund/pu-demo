import {currentUser, UserButton} from "@clerk/nextjs"
import {PrismaClient} from "@prisma/client";
import Link from "next/link";
import Nav from "@/components/nav";

export default async function User() {

  const user = await currentUser()

  const db = new PrismaClient()

  const reviews = await db.review.findMany({
    where: {
      userId: {
        equals: user?.id
      }
    }
  });

  let reviewObjects= [];

  for (let review of reviews) {
    const movie = await db.film.findUnique({
      where: {
        id: review.filmId
        }
    })
    if(!movie){continue}

    const reviewObject = (
      <div>
        <div>Film: {movie.name}</div>
        <div>Review: {review.text}</div>
        <br />
      </div>
    )

    reviewObjects.push(reviewObject)
  }

  return (
    <>
      <Nav user={user} />
      <div>Dette er en innlogget side</div>
      <div>Du er logget inn som: {user?.firstName} {user?.lastName}, id: {user?.id}</div>

      <br />
      <div>Reviews:</div>
      {reviewObjects}

    </>
  )
}