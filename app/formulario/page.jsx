import ContactForm from "@/components/ContactForm";

export default function Formulario() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-4 max-w-3xl mx-auto text-center">
                <h1 className="text-3xl font-bold">Formulario Torneo</h1>
                <p>Llena los campos para inscribirte al torneo</p>
                <ContactForm />
            </div>
        </div>
    );
}
