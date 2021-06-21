import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown, faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { SessionModel } from '../../data_models/session/session.model';
import { ISession, ISessionDocument } from "../../data_models/session/session.types";
import styles from "../../styles/component_styles/timeline/Teacher.module.css";
import {select} from "d3-selection";

type TeacherProps = {
    name: String,
    sessions: ISessionDocument[]
}

type TeacherState = {

}

class Teacher extends React.Component<TeacherProps,TeacherState>{

    constructor(props: TeacherProps){
        super(props);

        this.addDataBox = this.addDataBox.bind(this);
    }

    // componentDidMount(){
    //     this.addDataBox();
    // }

    componentDidUpdate(){
        this.addDataBox();
    }

    addDataBox(){
        console.log(this.props.sessions);
        console.log(document.querySelector(`.${styles.dataBoxWrapper}`));
        select(`.${styles.dataBoxWrapper}`)
            .append("svg")
                .classed(styles.dataBox, true)
                .data(this.props.sessions)
                .enter()
                .append("g");
    }

    render(): React.ReactElement{
        console.log(this.props);
        return (
            <div>
                <div className="col-md-3">
                    <h3>{this.props.name}</h3>
                </div>
                <div className={styles.dataBoxWrapper + " col-md-9"}>

                </div>
            </div>
        );
    }
}

export default Teacher;