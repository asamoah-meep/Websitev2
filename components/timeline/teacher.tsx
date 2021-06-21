import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown, faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { SessionModel } from '../../data_models/session/session.model';
import { ISession, ISessionDocument } from "../../data_models/session/session.types";
import styles from "../../styles/component_styles/timeline/Teacher.module.css";
import {select} from "d3-selection";
import {ScaleTime, scaleTime} from "d3-scale";
import {Resolution} from "../../Constants";

type TeacherProps = {
    name: String,
    sessions: ISessionDocument[],
    index: number,
    dateScale: ScaleTime<number,number>,
    timeScale: ScaleTime<number,number>
}

type TeacherState = {
}

class Teacher extends React.Component<TeacherProps,TeacherState>{

    constructor(props: TeacherProps){
        super(props);

        this.addDataBox = this.addDataBox.bind(this);
    }

    componentDidMount(){
        this.addDataBox();
    }

    componentDidUpdate(){
        this.addDataBox();
    }

    addDataBox(){
        const self = this;
        select(`#teacher${this.props.index}`)
            .select(`.${styles.dataBox}`)
            .selectAll("span")
            .data(this.props.sessions)
            .enter()
            .append("span")
            .classed(styles.dataPoint,true)
            .style("left", function(d: ISessionDocument): string{
                const boundingBox : DOMRect = this.parentElement!.getBoundingClientRect();
                const scale: number = self.props.dateScale(new Date(d.Date));
                return boundingBox.width*scale*.9+ "px";
            })
            .style("top", function(d: ISessionDocument): string{
                const boundingBox : DOMRect = this.parentElement!.getBoundingClientRect();
                const scale: number = self.props.timeScale(new Date(d.Time));
                return boundingBox.height*scale*.9 + "px";
            })
            .text("*");

        
    }

    render(): React.ReactElement{
        return (
            <div className={styles.container + " row"} id={"teacher"+this.props.index}>
                <div className={styles.dataName + " col-md-2"}>
                    <h3>{this.props.name + ":"}</h3>
                </div>
                <div className={styles.dataBox + " col-md-9"}>
                </div>
            </div>
        );
    }
}

export default Teacher;