import {useState} from "react";

function RezepteAnzeigen({list, onSubmitEditedReipe}){
    const [textData, setTextData] = useState("");

    return (
        <>
          <h2>Rezepte</h2>
            <form>
                <i>Such nach Rezept Name/Titel:</i><input
                    type="text"
                    name={"rezept-titel-input"}
                    value={textData}
                    onChange={(e) => setTextData(e.target.value)}
                    required/>

            </form>
            <ul>
                {
                    list
                        .filter(w => w.name.toLowerCase().includes(textData.toLowerCase()))
                        .map(rezept =>

                        <li key={rezept.id}>
                            <h3>Titel: {rezept.name}</h3>
                            <h5>Kategorie: {rezept.kategorie}</h5>
                        </li>
                    )
                }
            </ul>
        </>

    )
}

export default RezepteAnzeigen;