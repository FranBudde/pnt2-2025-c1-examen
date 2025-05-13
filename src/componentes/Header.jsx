'use client'
import Link from "next/link"

export default function Header() {

  return (
    <header>
        <div className="m-5 flex items-center justify-center mp">
            <img src="/logoMovie.jpg" alt="LogoMovie" className="h-10 w-10 mr-2"/>
            <div className=" p-1.5">
            <Link className="text-lg font-medium" href={`/peliculas`}>Peliculas</Link>
            </div>
        </div>
    </header>
  )
}
