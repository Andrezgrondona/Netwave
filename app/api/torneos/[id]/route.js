
import connectMongoDB from "@/libs/mongodb";
import Torneo from "@/models/torneo";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
   const {id} = params;
   const {newTitle:title, newDescription:description} = await request.json();
   await connectMongoDB();
   await Torneo.findByIdAndUpdate(id, {title, description});
   return NextResponse.json ({message: "Torneo updated"}, {status:200})
}

export async function GET(request, {params}){
    const{id} = params;
    await connectMongoDB();
    const torneo = await Torneo.findOne({_id:id});
    return NextResponse.json({torneo}, {status:200})
}