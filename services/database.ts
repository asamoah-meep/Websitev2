import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = () => {
    //console.log(process.env);
    const uri = `mongodb+srv://Chrid:8Y3JnKT4GQstiIPW@personalwebsite.1rd1m.mongodb.net/TutorData?retryWrites=true&w=majority`;

    if(database){
        return;
    }

    Mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, function(){
        try{
            console.log("Connected to DB");
        }catch(err){
            console.log("Error connecting to DB");
        }
    });

    database = Mongoose.connection;

    database.on("error", () => {
        console.log("Error connecting to DB");
    });

}

export const disconnect = () => {
    if(!database){
        return;
    }

    Mongoose.disconnect();
}