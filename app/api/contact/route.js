import connectDBForm from "@/libs/mongodbForm";
import Contact from "@/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(req) {
    const { fullname, email, message } = await req.json();

    // console.log("fullname", fullname) 
    // console.log("email", email)
    // console.log("message", message)


    try {
        await connectDBForm()
        await Contact.create({ fullname, email, message })

        return NextResponse.json({
            msg: ["Enviado exitosamente"], success: true
        })
    } catch (error) {
        console.log(error)
        if (error instanceof mongoose.Error.ValidationError){
            let errorList = []
            for (let e in error.errors){
                errorList.push(error.errors[e].message)
            }

            //console.log(errorList)

            return NextResponse.json({ msg: errorList })
        }
        else {
            return NextResponse.json(error)
        }
    }   
}