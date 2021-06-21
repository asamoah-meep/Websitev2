import React from "react";
import Teacher from "../components/timeline/teacher";
import { ISessionDocument } from "../data_models/session/session.types";
import * as Constants from "../Constants";
import {ScaleTime, scaleTime} from "d3-scale";
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
        this.createTimeScale = this.createTimeScale.bind(this);
        this.createDateScale = this.createDateScale.bind(this);
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

    createDateScale(): ScaleTime<number,number>
    {
        const minDate = this.state.sessions.length > 0 ? 
            new Date(this.state.sessions[0].Date) : new Date();
        const maxDate = this.state.sessions.length > 0 ?
            new Date(this.state.sessions[this.state.sessions.length-1].Date) : new Date();

        return scaleTime()
            .domain([minDate, maxDate])
            .nice()
    }

    createTimeScale(): ScaleTime<number,number>{
        const now: Date = new Date();
        const today: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const tomorrow: Date = new Date(today.getTime()+(1000*60*60*24));
        return scaleTime()
            .domain([today,tomorrow]);
    }

    render(): React.ReactNode{
        const teachers: string[] = Object.values(Constants.Professors);
        const teacherComponents: React.ReactNode = teachers.map
        ((t,index) => <Teacher name={t} sessions={this.filterSessionsByProfessorName(t)} key={t} index={index} 
       dateScale = {this.createDateScale()} timeScale = {this.createTimeScale()} />);
       console.log(teacherComponents);
        return (
            <div>
                {teacherComponents}    
            </div>
        )
    }
}

export default Timeline;