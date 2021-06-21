import { Document, Model } from "mongoose";

export interface ISession{
    Name: string,
    Tutor: string,
    Professor: string,
    Info?: string,
    Resolve?: string,
    Date: Date
}

export interface ISessionDocument extends ISession, Document {}

export interface ISessionModel extends Model<ISessionDocument> {}