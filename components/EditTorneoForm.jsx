"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"




export default function EditTorneoForm({ id, title, description }) {

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/torneos/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("No se pudo editar el torneo");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg max-w-lg mx-auto"
    >

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Editar Torneo
      </h2>

      <div className="mb-4">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-800"
          type="text"
          placeholder="Nombre del torneo"
        />
      </div>

      <div className="mb-4">
        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-800"
          rows={4}
          placeholder="Descripción"
        />
      </div>

      <button
        type="submit"
        className="inline-block bg-green-500 text-white rounded-lg px-4 py-2"
      >
        Actualizar Torneo
      </button>

    </form>



  )
}