import mongoose from "mongoose"



const connectDB = (uri:string | undefined) =>{
    if(!uri){
        console.log("data base inactive")
        return;
    }
    mongoose.connect(uri,{dbName:"chatapp"})
    .then((data)=>{console.log(`connected to db ${data.connection.host}`)})
    .catch((err) => {throw err})
}


export {connectDB}