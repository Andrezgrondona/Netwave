import mongoose, { Schema } from "mongoose";

const torneoSchema = new Schema(
    {
        title:String,
        description:String,
    },
    {
        timestamps:true
    }
);

const Torneo =  mongoose.models.Torneo  || mongoose.model("Torneo", torneoSchema);

export default Torneo;