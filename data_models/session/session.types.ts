import { Document, Model } from "mongoose";

export interface ISession{
    Student: string,
    Tutor: string,
    Professor: string,
    Info: string,
    Issue: string,
    Resolve: string,
    Date: string,
    Time: string
}

export interface ISessionDocument extends ISession, Document {}

export interface ISessionModel extends Model<ISessionDocument> {}