
// "use client"

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// export default function AdminTorneo() {

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         if (!title || !description) {
//             alert("Todos los campos son obligatorios")
//             return
//         }

//         try {
//             const res = await fetch("http://localhost:3000/api/torneos", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ title, description })
//             })

//             if (res.ok) {
//                 router.push("/")
//             } else {
//                 throw new Error("No se pudo crear el torneo")
//             }


//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return (
//         <div className="max-w-lg mx-auto p-8">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white px-8 pt-6 pb-8 mb-4 rounded shadow-md"
//             >
//                 <div className="mb-4">
//                     <label
//                         className="block text-gray-700 text-lg font-bold mb-2 text-center"
//                         htmlFor="title"
//                     >
//                         Nombre del Torneo
//                     </label>

//                     <input
//                         onChange={(e) => setTitle(e.target.value)}
//                         value={title}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="title"
//                         type="text"
//                         placeholder="Título del torneo"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label
//                         className="block text-gray-700 text-sm font-bold mb-2 text-center"
//                         htmlFor="description"
//                     >
//                         Descripción
//                     </label>

//                     <textarea
//                         onChange={(e) => setDescription(e.target.value)}
//                         value={description}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="description"
//                         rows="4"
//                         placeholder="Descripción del torneo"
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                     Agregar Torneo
//                 </button>
//             </form>

//         </div>

//     )
// }



//-----------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminTorneo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://netwave-sigma.vercel.app"
      : "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/torneos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      

      if (res.ok) {
       
        router.push("/");
       
        setTitle("");
        setDescription("");
      } else {
        throw new Error("No se pudo crear el torneo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-8 pt-6 pb-8 mb-4 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2 text-center"
            htmlFor="title"
          >
            Nombre del Torneo
          </label>

          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Título del torneo"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="description"
          >
            Descripción
          </label>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="4"
            placeholder="Descripción del torneo"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Agregar Torneo
        </button>
      </form>
    </div>
  );
}











