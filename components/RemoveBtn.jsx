

"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://netwave-sigma.vercel.app"
      : "http://localhost:3000";

  const removeTorneo = async () => {
    const confirmed = confirm("¿Está seguro de eliminar este torneo?");

    if (confirmed) {
      try {
        const res = await fetch(`${apiUrl}/api/torneos?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        } else {
          throw new Error("No se pudo eliminar el torneo");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <button onClick={removeTorneo} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;



