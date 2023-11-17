

"use client"

import Link from "next/link"
import { signIn, useSession, signOut } from "next-auth/react"

export default function Navbar() {

    //Datos del inicio de session 
    const { data: session } = useSession()
    console.log(session)
    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4 ">

            <Link href="/" className="text-orange-500 font-bold text-1xl ">
                Netwave
            </Link>


            <div className="flex items-center gap-4">

                <Link
                    href="/adminTorneo"
                    className="text-orange-500 border border-gray-300 text-sm py-2 px-4 rounded-full hover:bg-gray-100"
                >
                    Admin Torneo
                </Link>

                <Link href="/formulario" className="text-orange-500 border border-gray-300 text-sm py-2 px-4 rounded-full hover:bg-gray-100">
                    Formulario
                </Link>

                {/* <Link href="/suscripcion" className="text-orange-500 border border-gray-300 text-sm py-2 px-4 rounded-full hover:bg-gray-100">
                    Suscripción
                </Link> */}

                {session?.user ? (
                    <>
                        <Link href="/formulario" className="text-orange-500 border border-gray-300 text-sm py-2 px-4 rounded-full hover:bg-gray-100">
                            Formulario
                        </Link>

                        <Link href="/suscripcion" className="text-orange-500 border border-gray-300 text-sm py-2 px-4 rounded-full hover:bg-gray-100 ">
                            Suscripción
                        </Link>


                        <p className="text-white">
                            {session.user.name}
                        </p>

                        <button
                            className="text-gray-500 border border-gray-300 text-sm py-2 px-3 rounded-full hover:bg-gray-100"
                            onClick={() => signOut()}
                        >
                            Salir
                        </button>
                    </>
                ) : (
                    <button
                        className="bg-white py-2 px-4 rounded-full"
                        onClick={() => signIn()}
                    >
                        Iniciar Sesión
                    </button>
                )}

            </div>

        </nav>
    )
}