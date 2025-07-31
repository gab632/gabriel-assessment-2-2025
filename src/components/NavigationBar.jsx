import {Link} from "react-router";

function NavigationBar(){

    return (
        <nav>
            <Link to={"/rezept-anlegen"} style={{paddingRight: "10px"}}> rezept anlegen </Link>
            <Link to={"/rezept-anzeigen"} style={{paddingRight: "10px"}}> rezept anzeigen </Link>
            <Link to={"/details-ansehen"} style={{paddingRight: "10px"}}> Details ansehen </Link>
            <Link to={"/rezept-bearbeiten"} style={{paddingRight: "10px"}}> rezept bearbeiten </Link>
            <Link to={"/kategorien"} style={{paddingRight: "10px"}}> kategorien </Link>
        </nav>
    )

}

export default NavigationBar;