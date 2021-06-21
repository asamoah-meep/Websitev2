import { Schema } from "mongoose";

const SessionSchema: Schema = new Schema({
    name: String,
    tutor: String,
    professor: String,
    info: {
        type: String,
        default: ""
    },
    resolve: {
        type: String,
        default: ""
    },
    date: Date
});

export default SessionSchema;