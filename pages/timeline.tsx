import React from "react";
import Teacher from "../components/timeline/teacher";
import { ISessionDocument } from "../data_models/session/session.types";
import * as Constants from "../Constants";
type DefaultProps = {

}

type TimelineState = {
    sessions: ISessionDocument[]
}

class Timeline extends React.Component<DefaultProps,TimelineState>{

    constructor(props: DefaultProps){
        super(props);
        this.state = {
            sessions: []
        };

        this.filterSessionsByProfessorName = this.filterSessionsByProfessorName.bind(this);
    }

    async componentDidMount(){
        const response : Response = await fetch("api/timeline/getSessionData");
        const data : ISessionDocument[] = await response.json();
        this.setState({
            sessions: data
        });
    }

    filterSessionsByProfessorName(name: string): ISessionDocument[]{
        return this.state.sessions.filter(s => s.Professor.includes(name));
    }

    render(): React.ReactNode{
        const teachers: string[] = Object.values(Constants.Professors);
        const teacherComponents: React.ReactNode = teachers.map(t => <Teacher name={t} sessions={this.filterSessionsByProfessorName(t)} />)[0];
        return (
            <div>
                {teacherComponents}    
            </div>
        )
    }
}

export default Timeline;