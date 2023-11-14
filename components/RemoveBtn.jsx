"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"




export default function RemoveBtn({ id }) {

    const router = useRouter()

    const removeTorneo = async () => {
        const confirmed = confirm("Esta seguro de eliminar este torneo?")

        if (confirmed) {
           const res = await fetch(`http://localhost:3000/api/torneos?id=${id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                router.refresh()
            
            }
        }
    }


    return (
        <button onClick={removeTorneo} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    )
}



