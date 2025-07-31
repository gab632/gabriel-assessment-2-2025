export default function Kategorien({list}){

    return(
        <>
            <h2>Kategorien</h2>
            <div id={"category-layout"}>
                <div className={"category-div"}>
                    <h2>Category: Dessert</h2>
                    <ul>
                        {
                            list
                                .filter(rezept => rezept.kategorie === "dessert")
                                .map(rezept =>
                                <li key={rezept.id}>
                                    <h3>Name: {rezept.name}</h3>
                                    <h4>Beschreibung:</h4>
                                    <p>{rezept.beschreibung}</p>
                                    <h4>Zutaten: {rezept.zutaten}</h4>
                                    <h4>Zubereitung:</h4>
                                    <p>{rezept.zubereitung}</p>
                                    <hr/>
                                </li>


                            )
                        }


                    </ul>
                </div>

                <div className={"category-div"}>
                    <h2>Category: Frühstück</h2>
                    <ul>
                        {
                            list
                                .filter(rezept => rezept.kategorie === "fruestueck")
                                .map(rezept =>
                                    <li key={rezept.id}>
                                        <h3>Name: {rezept.name}</h3>
                                        <h4>Beschreibung:</h4>
                                        <p>{rezept.beschreibung}</p>
                                        <h4>Zutaten: {rezept.zutaten}</h4>
                                        <h4>Zubereitung:</h4>
                                        <p>{rezept.zubereitung}</p>
                                        <hr/>
                                    </li>

                                )
                        }


                    </ul>
                </div>
                <div className={"category-div"}>
                    <h2>Category: Hauptgericht</h2>
                    <ul>
                        {
                            list
                                .filter(rezept => rezept.kategorie === "hauptgericht")
                                .map(rezept =>
                                    <li key={rezept.id}>
                                        <h3>Name: {rezept.name}</h3>
                                        <h4>Beschreibung:</h4>
                                        <p>{rezept.beschreibung}</p>
                                        <h4>Zutaten: {rezept.zutaten}</h4>
                                        <h4>Zubereitung:</h4>
                                        <p>{rezept.zubereitung}</p>
                                        <hr/>
                                    </li>

                                )
                        }


                    </ul>
                </div>
                <div className={"category-div"}>
                    <h2>Category: Imbiss</h2>
                    <ul>
                        {
                            list
                                .filter(rezept => rezept.kategorie === "imbiss")
                                .map(rezept =>
                                    <li key={rezept.id}>
                                        <h3>Name: {rezept.name}</h3>
                                        <h4>Beschreibung:</h4>
                                        <p>{rezept.beschreibung}</p>
                                        <h4>Zutaten: {rezept.zutaten}</h4>
                                        <h4>Zubereitung:</h4>
                                        <p>{rezept.zubereitung}</p>
                                        <hr/>
                                    </li>

                                )
                        }
                    </ul>
                </div>
                <div className={"category-div"}>
                    <h2>Category: Sonstiges</h2>
                    <ul>
                        {
                            list
                                .filter(rezept => rezept.kategorie === "sonstiges")
                                .map(rezept =>
                                    <li key={rezept.id}>
                                        <h3>Name: {rezept.name}</h3>
                                        <h4>Beschreibung:</h4>
                                        <p>{rezept.beschreibung}</p>
                                        <h4>Zutaten: {rezept.zutaten}</h4>
                                        <h4>Zubereitung:</h4>
                                        <p>{rezept.zubereitung}</p>
                                        <hr/>
                                    </li>

                                )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}