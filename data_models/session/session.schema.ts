import { Schema } from "mongoose";

const SessionSchema: Schema = new Schema({
    Student: String,
    Tutor: String,
    Professor: String,
    Info: String,
    Issue: String,
    Resolve: String,
    Date: String,
    Time: String
});

export default SessionSchema;