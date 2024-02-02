import { NextResponse } from "next/server";
import {PrismaClient} from '@prisma/client'

export async function GET(request: Request) {

  const db = new PrismaClient()

  const film  = await db.film.findFirst({
      where: {
        name: {
          equals: "James Bond",
        }
      }
    }
  );

  if(!film){
    console.error("Filmen ble ikke funnet")
    return
  }

  const name = film.name;
  const description = film.description;

  return NextResponse.json({ data: {navn: name, beskrivelse: description} });
}