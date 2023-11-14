import connectMongoDB from "@/libs/mongodb"
import Torneo from "@/models/torneo";
import { NextResponse } from "next/server";

export async function POST (request){
    const {title, description} = await request.json()
    await connectMongoDB();
    await Torneo.create({title, description})
    return NextResponse.json({message: "Torneo creado correctamente"}, {status:201})
}

export async function GET(){
    await connectMongoDB();
    const torneos = await Torneo.find()
    return NextResponse.json({torneos})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Torneo.findByIdAndDelete(id);
    return NextResponse.json({message: "Torneo eliminado correctamente"}, {status:200})
}

//44.50