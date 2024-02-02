import {User} from "@clerk/backend";
import {SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

interface NavProps {
  user: User | null
}

export default async function Nav( props : NavProps) {
  const user = props.user;

  return (
    <div className={"flex flex-row items-center"}>
      <div className={"m-2"}><UserButton afterSignOutUrl="/"/></div>
      <Link href="/" className={"p-2 m-2 border rounded"}>Gå til filmkatalogen</Link>
      {
        user ?
          <Link href="/user" className={"p-2 m-2 border rounded"}>Gå til min side</Link> :
          (<SignInButton>
              <button className={"p-2 m-2 border rounded"}>Logg inn for å se din din side</button>
            </SignInButton>
          )
      }
    </div>
  )
}