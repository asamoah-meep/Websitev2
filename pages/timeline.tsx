import React from "react";
import Teacher from "../components/timeline/teacher";
import { ISessionDocument } from "../data_models/session/session.types";
import * as Constants from "../Constants";
import {ScaleTime, scaleTime} from "d3-scale";
import CurrentSession from "../components/timeline/currentSession";
import TimeFrame from "../components/timeline/timeframe";
type DefaultProps = {

}

type TimelineState = {
    sessions: ISessionDocument[],
    currentSession: ISessionDocument | null,
    startDate : Date,
    endDate : Date
}

class Timeline extends React.Component<DefaultProps,TimelineState>{

    constructor(props: DefaultProps){
        super(props);

        this.filterSessionsByProfessorName = this.filterSessionsByProfessorName.bind(this);
        this.createTimeScale = this.createTimeScale.bind(this);
        this.createDateScale = this.createDateScale.bind(this);
        this.setCurrentSession = this.setCurrentSession.bind(this);

        this.state = {
            sessions: [],
            currentSession: null,
            startDate: Constants.TUTOR_START_DATE,
            endDate: Constants.TUTOR_END_DATE
        };
    }

    async componentDidMount(){
        const response : Response = await fetch("api/timeline/getSessionData");
        const data : ISessionDocument[] = await response.json();
        console.log(data);
        this.setState({
            sessions: data
        });
    }

    filterSessionsByProfessorName(name: string): ISessionDocument[]{
        return this.state.sessions.filter(s => s.Professor.includes(name));
    }

    setCurrentSession(s: ISessionDocument){
        this.setState({
            currentSession: s
        });
    }

    createDateScale(minDate: Date = Constants.TUTOR_START_DATE, 
        maxDate: Date = Constants.TUTOR_END_DATE): ScaleTime<number,number>
    {
        return scaleTime()
            .domain([minDate, maxDate])
            .nice()
    }

    clearSessionInfo(){
        
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
        const teacherComponents: React.ReactNode = teachers.map((t,index) =>
            <Teacher name={t} sessions={this.filterSessionsByProfessorName(t)} key={t} index={index} setCurrentSession = {this.setCurrentSession}
            dateScale = {this.createDateScale()} timeScale = {this.createTimeScale()} />);
        
            return (
            <div>
                {teacherComponents}
                <TimeFrame startDate = {this.state.startDate} endDate = {this.state.endDate}/>
                <CurrentSession currentSession={this.state.currentSession}/>   
            </div>
        )
    }
}

export default Timeline;