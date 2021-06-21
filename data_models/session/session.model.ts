import { model, models } from "mongoose";
import { ISessionDocument } from "./session.types";
import SessionSchema from "./session.schema";

export const SessionModel = models["Session"] ?? model<ISessionDocument>("Session", SessionSchema);