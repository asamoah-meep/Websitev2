import type { NextApiRequest, NextApiResponse } from 'next';
import { connect, disconnect } from '../../../services/database';
import { SessionModel } from '../../../data_models/session/session.model';


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    connect();
    try{
        const test =  (await SessionModel.find({})).slice(0,20);
        res.status(200).json(test);
    }catch(err){
        res.status(500).json(err);
    }finally{
        disconnect();
    }
}