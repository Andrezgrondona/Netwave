


import mongoose from "mongoose";

const connectDBForm = async () => {
    try {
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI_FORM)
            console.log("Connected to Form DB")
        }
        
    } catch (error) {
        
    }
}

export default connectDBForm