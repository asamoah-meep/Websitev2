import React from "react";
import { ISessionDocument } from "../../data_models/session/session.types";

type SessionProps = {
    currentSession: ISessionDocument | null
}

type DefaultState = {

}

class CurrentSession extends React.Component<SessionProps,DefaultState>{

    constructor(props: SessionProps){
        super(props);
    }

    render(): React.ReactNode{
        if(this.props.currentSession == null)
            return null;
        console.log(this.props.currentSession);
        return <div>
            <p>Tutor: {this.props.currentSession.Tutor}</p>
            <p>Date: {this.props.currentSession.Date}</p>
            <p>Issue: {this.props.currentSession.Issue}</p>
            <p>Professor: {this.props.currentSession.Professor}</p>
            <p>Status: {this.props.currentSession.Resolve}</p>
            <p>Students: {this.props.currentSession.Student}</p>
        </div>
    }
}

export default CurrentSession;