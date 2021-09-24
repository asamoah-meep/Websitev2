import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = async () => {
    //console.log(process.env);
    const uri = `mongodb+srv://Chrid:8Y3JnKT4GQstiIPW@personalwebsite.1rd1m.mongodb.net/TutorData?retryWrites=true&w=majority`;

    if(database){
        return;
    }

    const options: Mongoose.ConnectOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    };

    try{
        await Mongoose.connect(uri,options);
        console.log("connected to DB!");    
        database = Mongoose.connection;  
    }catch(err){
        console.log("Error connecting to DB");   
    }
}

export const disconnect = () => {
    if(!database){
        return;
    }

    Mongoose.disconnect();
}