import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown, faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styles from "../styles/component_styles/Dropdown.module.css";
type DropdownProps = {
    title: string,
    children?: React.ReactNode
}

type DropdownState = {
    show: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState>{

    constructor(props: DropdownProps){
        super(props);
        this.state = {
            show: false
        };        

        this.expand = this.expand.bind(this);
    }

    expand(){
        this.setState({
            show: !this.state.show
        });
    }

    render(): React.ReactElement{
        const arrow : IconDefinition = this.state.show ? faCaretSquareUp : faCaretSquareDown; 
        return (
                <div className={styles.barDropdown}>
                <h3 className={styles.dropdownTitle}>{this.props.title}</h3>
                <FontAwesomeIcon className={styles.myFAIcon} icon={arrow} onClick={this.expand}/>
                {this.state.show && this.props.children}
            </div>
        );
    }
}

export default Dropdown;