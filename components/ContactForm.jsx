"use client"


import React, { useState } from 'react';

export default function ContactForm() {


    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)


    const formSubmit = async (e) => {
        e.preventDefault()

        console.log("fullname", fullname)
        console.log("email", email)
        console.log("message", message)

        //"http://localhost:3000/api/formulario"

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                message
            })
        })

        const { msg, success } = await res.json()
        setError(msg)
        setSuccess(success)
        if (success) {
            setFullname("")
            setEmail("")
            setMessage("")
        }


        //console.log(error)
    }



    return (
        <>
            <form
                onSubmit={formSubmit}
                className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="fullname" className="text-sm text-gray-600">Nombre Completo</label>
                    <input
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                        type="text"
                        id="fullname"
                        placeholder="Ingrese su nombre completo"
                        className="w-full mt-2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="text-sm text-gray-600">
                        Correo Electrónico
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        id="email"
                        placeholder="Ingrese su correo electrónico"
                        className="w-full mt-2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="text-sm text-gray-600">
                        Mensaje
                    </label>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        id="message"
                        placeholder="Escribe el torneo al que quieres inscribirte"
                        className="w-full mt-2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
                >
                    Enviar
                </button>

                <div className="mt-4">
                    {error && error.map((e, index) => (
                        <div key={index} className={`${success ? "text-green-800" : "text-red-600"} text-sm`}>{e}</div>
                    ))}
                </div>

            </form>
        </>
    );
}
