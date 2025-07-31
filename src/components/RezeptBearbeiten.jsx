import {useEffect, useState} from "react";

export default function RezeptBearbeiten({list, onSubmitEditedRecipe, onDeleteRecipe}){

    const [toEdit, setToEdit] = useState({});

    const [rezeptId, setRezeptId] = useState("");
    const [rezeptName, setRezeptName] = useState("");
    const [beschreibung, setBeschreibung] = useState("");
    const [zutaten, setZutaten] = useState("");
    const [zubereitung, setZubereitung] = useState("");
    const [kategorie, setKategorie] = useState("");
    let tempId = "";

    function editRezept(e, rezept){
        // e.preventDefault();
        console.log("ausgew r ", rezept)
        setToEdit(rezept)
        // setRezeptId(toEdit.id);

    }

    function onEditRecipe(e){
        // e.preventDefault();
        // setRezeptId(toEdit.id);
        tempId = String();
        tempId += toEdit.id;
        setRezeptId(tempId);

        onSubmitEditedRecipe(e, rezeptId, rezeptName, beschreibung, zutaten, zubereitung, kategorie)

        setRezeptName("");
        setBeschreibung("");
        setZutaten("")
        setZubereitung("");
        setKategorie("");
        setRezeptId("");
        tempId = "";
        // console.log("new values ", rezeptId, rezeptName, beschreibung, zutaten, zubereitung, kategorie);
    }

    // *********************************************

    const [showModal, setShowModal] = useState(false);

    // *********************************************
    useEffect(() =>{
        console.log("to edit ", toEdit)
        setRezeptId(toEdit.id);
    }, [toEdit])

    useEffect(() =>{

        console.log("id curr value ", rezeptId);
    })
    return(
        <>
        <h2>Rezept bearbeiten</h2>
        <div>
            Rezepte
            <div>
                {
                    list.map(rezept =>
                        <button
                            key={rezept.id}
                            id={rezept.id}
                            className={"details-button"}
                            value={rezept}
                            onClick={(e) => editRezept(e, rezept)}
                        >
                            {rezept.name}
                        </button>

                    )
                }
            </div>
        </div>
            <hr></hr>
            <h2>{toEdit.name} Bearbeiten</h2>
            <h3></h3>
            <div>
                <form onSubmit={onEditRecipe}>
                    id: <input
                    type="text"
                    name={"rezept-id"}
                    value={rezeptId}
                    readOnly={true}
                    required/><br></br>
                    Name: <input
                    type="text"
                    name={"rezept-name"}
                    value={rezeptName}
                    onChange={(e) => setRezeptName(e.target.value)}
                    required/><br></br>
                    Beschreibung: <input
                    type="text"
                    name={"beschreibung"}
                    value={beschreibung}
                    onChange={(e) => setBeschreibung(e.target.value)}
                    required/><br></br>
                    Zutaten: <input
                    type="text"
                    name={"zutaten"}
                    value={zutaten}
                    onChange={(e) => setZutaten(e.target.value)}
                    required/><br></br>
                    Zubereitung: <input
                    type="text"
                    name={"zubereitung"}
                    value={zubereitung}
                    onChange={(e) => setZubereitung(e.target.value)}
                    required/><br></br>
                    <p>Kategorie</p>
                    <input
                        type="radio"
                        id="fruestueck"
                        name="kategorie"
                        value="fruestueck"
                        // checked={choice === 'Option 1'}
                        onChange={(e) => setKategorie(e.target.value)}
                        required
                    />
                    <label htmlFor="fruestueck">Frühstück</label><br></br>
                    <input type="radio" id="dessert" name="kategorie" value="dessert" onChange={(e) => setKategorie(e.target.value)}
                    />
                    <label htmlFor="dessert">Dessert</label>
                    <br/>
                    <input type="radio" id="hauptgericht" name="kategorie" value="hauptgericht" onChange={(e) => setKategorie(e.target.value)}/>
                    <label htmlFor="hauptgericht">Hauptgericht</label>
                    <br></br>
                    <input type="radio" id="imbiss" name="kategorie" value="imbiss" onChange={(e) => setKategorie(e.target.value)}/>
                    <label htmlFor="imbiss">Imbiss</label>
                    <br></br>
                    <input type="radio" id="sonstiges" name="kategorie" value="sonstiges" onChange={(e) => setKategorie(e.target.value)}/>
                    <label htmlFor="sonstiges">Sonstiges</label>
                    <br></br>

                    <button type="submit">Rezept hinzufügen</button>
                </form>

                {/*button to delete a rezept objet */}
                <button
                    type="button"
                    style={{margin: "5px", backgroundColor: "darkred", color: "lightgray" }}
                    value={tempId}
                    onClick={() => setShowModal(true)}
                >
                    Rezept löschen
                </button>

            </div>



            <div className={`modal-overlay ${showModal ? 'active' : ''}`}>
                <div className="modal">
                    <h3>Rezept Löschen?</h3>
                    <p>{toEdit.name}</p>
                    <button
                        onClick={() => {
                            if (typeof onDeleteRecipe === "function") {
                                onDeleteRecipe(toEdit.id);
                            }
                            setShowModal(false);
                            setToEdit({});
                            setRezeptName("");
                            setBeschreibung("");
                            setZutaten("");
                            setZubereitung("");
                            setKategorie("");
                            setRezeptId("");
                        }}
                        style={{ backgroundColor: "red", color: "white" }}
                    >
                        Ja
                    </button>
                    <button onClick={() => setShowModal(false)}>Nein</button>
                </div>
                {/*////////////////////////////////////////////////////////////////*/}

            </div>

        </>
    )


}