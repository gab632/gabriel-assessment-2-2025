import {useState} from "react";

function RezeptAnlegen({onSubmitRecipe}){

    const [rezeptName, setRezeptName] = useState("");
    const [beschreibung, setBeschreibung] = useState("");
    const [zutaten, setZutaten] = useState("");
    const [zubereitung, setZubereitung] = useState("");
    const [kategorie, setKategorie] = useState("");

    const onAddRecipe = (e) => {
        e.preventDefault();
        // console.log("test -- ", rezeptName, beschreibung, zutaten, zubereitung, kategorie);
        onSubmitRecipe({rezeptName, beschreibung, zutaten, zubereitung, kategorie});

        setRezeptName("");
        setBeschreibung("");
        setZutaten("")
        setZubereitung("");
        setKategorie("");
    }


    return(
        <>
            <h2>Rezept Anlegen</h2>
            <div>
                <form onSubmit={onAddRecipe}>
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

                    <button type="submit">Rezept hinzufügen</button>
                </form>
            </div>
        </>





    )



}

export default RezeptAnlegen;