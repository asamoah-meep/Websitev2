import type { NextApiRequest, NextApiResponse } from 'next';
import { connect, disconnect } from '../../../services/database';
import { SessionModel } from '../../../data_models/session/session.model';


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    connect();
    let i : number = 0;
    while(i < 5){
        try{        
            const test =  (await SessionModel.find({})).slice(0,25);
            res.status(200).json(test);
            break;
        }catch(err){
            res.status(500).json(err);
            i++;
        }finally{
            disconnect();
        }
    }
}