// import EditTorneoForm from "@/components/EditTorneoForm";

// const getTorneoById = async (id) => {
//     try {
//         const res = await fetch(`http://localhost:3000/api/torneos/${id}`, {
//             cache: "no-store"
//         });

//         if (!res.ok) {
//             throw new Error("Error al obtener el torneo");
//         }

//         return res.json();
//     } catch (error) {
//         console.log("Error al obtener el torneo", error);
//     }
// }


// export default async function editTorneo({ params }) {
//     const { id } = params;
//     const { torneo } = await getTorneoById(id);
//     const { title, description } = torneo;

//     return (
//         <EditTorneoForm id={id} title={title} description={description} />
//     );
// }

//---------------------------------------------
import EditTorneoForm from "@/components/EditTorneoForm";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://netwave-sigma.vercel.app"
    : "http://localhost:3000";

const getTorneoById = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/torneos/${id}`, {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Error al obtener el torneo");
        }

        return res.json();
    } catch (error) {
        console.log("Error al obtener el torneo", error);
    }
};

export default async function editTorneo({ params }) {
    const { id } = params;
    const { torneo } = await getTorneoById(id);
    const { title, description } = torneo;

    return (
        <EditTorneoForm id={id} title={title} description={description} />
    );
}
