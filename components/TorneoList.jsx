// import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import { HiPencilAlt } from "react-icons/hi";
// import { get } from "mongoose";
// import Image from 'next/image'



// //traer la informacion del torneo, de mongodb



// const getTorneo = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/torneos", {
//             cache: "no-store"
//         });

//         if (!res.ok) {
//             throw new Error("Error al traer los torneos");
//         }

//         return res.json();

//     } catch (error) {
//         console.log("Error al cargar los datos", error);

//     }
// }


// export default async function TorneoList() {
//     const { torneos } = await getTorneo();

//     return (
//         <>
//             <Image
//                 src="/Netwave-logo.png"
//                 alt="Descripción de la imagen"
//                 width={200}
//                 height={200}
//                 className="mx-auto"
//             />
//            {torneos.map((t) => (
//   <div key={t._id} className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md flex flex-col items-center justify-center">
//     <div>
//       <h2 className="font-bold text-3xl text-orange-500">{t.title}</h2>
//       <div className="text-gray-700">{t.description}</div>
//     </div>

//     <div className="mt-4 flex items-center gap-4">
//       <RemoveBtn id={t._id} />
//       <Link href={`/editTorneo/${t._id}`}>
//         <HiPencilAlt size={24} className="text-green-500 cursor-pointer" />
//       </Link>
//     </div>
//   </div>
// ))}
//         </>
//     );
// }

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Image from 'next/image';

const getTorneo = async (apiUrl) => {
    try {
        const res = await fetch(`${apiUrl}/api/torneos`, {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Error al traer los torneos");
        }

        return res.json();

    } catch (error) {
        console.log("Error al cargar los datos", error);
        return { error: "Error al cargar los datos" };
    }
}

export default async function TorneoList() {
   
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    
   
    const { torneos, error } = await getTorneo(apiUrl);

    
    if (error) {
        console.error("Error al obtener los torneos:", error);
        return <div>Error al cargar los datos</div>;
    }

    return (
        <>
            <Image
                src="/Netwave-logo.png"
                alt="Descripción de la imagen"
                width={200}
                height={200}
                className="mx-auto"
            />
            {torneos.map((t) => (
                <div key={t._id} className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md flex flex-col items-center justify-center">
                    <div>
                        <h2 className="font-bold text-3xl text-orange-500">{t.title}</h2>
                        <div className="text-gray-700">{t.description}</div>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTorneo/${t._id}`}>
                            <HiPencilAlt size={24} className="text-green-500 cursor-pointer" />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}


