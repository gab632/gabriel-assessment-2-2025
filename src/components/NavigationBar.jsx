import {Link} from "react-router";

function NavigationBar(){

    return (
        <nav>
            <Link to={"/rezept-anlegen"} style={{paddingRight: "10px", color: "gold"}}> Rezept anlegen </Link>
            <Link to={"/rezepte-anzeigen"} style={{paddingRight: "10px", color: "gold"}}> Rezepte anzeigen </Link>
            <Link to={"/details-ansehen"} style={{paddingRight: "10px", color: "gold"}}> Details ansehen </Link>
            <Link to={"/rezept-bearbeiten"} style={{paddingRight: "10px", color: "gold"}}> Rezept bearbeiten </Link>
            <Link to={"/kategorien"} style={{paddingRight: "10px", color: "gold"}}> Kategorien </Link>

        </nav>
    )

}

export default NavigationBar;