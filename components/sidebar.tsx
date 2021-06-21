import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faCaretSquareRight, faHome, faAddressCard, faInbox } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import Link from "next/link";
import styles from "../styles/component_styles/Sidebar.module.css";

type SampleProps = {

}

type SideNavState = {
    showSideNav: boolean
}

class Sidebar extends React.Component<SampleProps,SideNavState>{

    constructor(props: SampleProps){
        super(props);
        this.state = { showSideNav: true};        

        this.openSideNav = this.openSideNav.bind(this);
        this.closeSideNav = this.closeSideNav.bind(this);
    }

    openSideNav(event: React.MouseEvent){
        this.setState({
            showSideNav: true
        });
    }

    closeSideNav(event: React.MouseEvent){
        this.setState({
            showSideNav: false
        });
    }

    render(): React.ReactNode{

        return (
            <div>
                <div className={this.state.showSideNav? styles.sideNav + " col-md-3" : styles.sideNavHidden}>
                    <FontAwesomeIcon icon={faWindowClose} className={styles.closeSideNav} onClick={this.closeSideNav}/>
                    <h1 className={styles.firstName}>Jeffrey </h1> 
                    <h1 className={styles.lastName}>Asamoah</h1>

                    <div className={styles.sideNavRow + " row"}> <Link href="/">
                        <a><FontAwesomeIcon icon={faHome} className={styles.sideNavIcon}/>Home</a>
                    </Link> </div>
                    <div className={styles.sideNavRow + " row"}> <Link href="/about">
                        <a><FontAwesomeIcon icon={faAddressCard} className={styles.sideNavIcon}/>About</a>
                    </Link> </div>
                    <div className={styles.sideNavRow + " row"}>
                        <FontAwesomeIcon icon={faInbox} className={styles.sideNavIcon}/>
                        <p>Contact / Media</p>
                        
                    </div> 
                </div>
                <div className={this.state.showSideNav? styles.sideNavHidden : styles.collapsedSideNav + " row col-sm-1"}>
                    <FontAwesomeIcon icon={faCaretSquareRight} className={styles.openSideNav} onClick={this.openSideNav}/>
                </div>
            </div>
        )
    }
}

export default Sidebar;