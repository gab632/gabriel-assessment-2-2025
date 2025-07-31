import './App.css'
import { Route, Routes} from "react-router";
import NavigationBar from "./components/NavigationBar.jsx";
import {useEffect, useState} from "react";
import RezeptAnlegen from "./components/RezeptAnlegen.jsx";
import RezepteAnzeigen from "./components/RezepteAnzeigen.jsx";
import DetailsAnsehen from "./components/DetailsAnsehen.jsx";
import RezeptBearbeiten from "./components/RezeptBearbeiten.jsx";
import Kategorien from "./components/Kategorien.jsx";

function App() {

    const testData = [];
    const testKategorien =["fruestueck", "dessert", "hauptgericht", "sonstiges", "imbiss"];

    for(let i = 0; i < 10; i++){
        const randomId = crypto.randomUUID();
        const name = "test-rezeptz-" + (i+1);
        const beschreibung = "test-beschreibung-" + (i+1);
        const zutaten = "zut-1, zut-2, zut-3";
        const zubereitung = "Schritt 1, Schritt 2, Schritt 3";
        const kategorie = testKategorien[i % 5];
        const testRezept ={
            id: randomId,
            name: name,
            beschreibung: beschreibung,
            zutaten: zutaten,
            zubereitung: zubereitung,
            kategorie: kategorie
        }
        testData.push(testRezept);
    }


    const [rezept, setRezept] = useState({})
    const [rezeptArray, setRezeptArray] = useState(testData);

    function handleSubmitRecipe(e){
        const randomId = crypto.randomUUID();
        // console.log(randomId, e.rezeptName);
        const newRezept ={
            id: randomId,
            name: e.rezeptName,
            beschreibung: e.beschreibung,
            zutaten: e.zutaten,
            zubereitung: e.zubereitung,
            kategorie: e.kategorie
        }
        setRezept(newRezept);

        // add the new rezept object to array
        // code as in https://react.dev/learn/updating-arrays-in-state
        setRezeptArray(rezeptArray => [
            ...rezeptArray,
            newRezept
        ])

    }

    function handleUpdateRecipe(e){




    }



    // useEffect used to check if rezept and other values update.
    useEffect(() =>{
        console.log("rez ", rezept);
    }, [rezept])

    useEffect(() =>{
        console.log("array ", rezeptArray);
    }, [rezeptArray])

    // return
  return (
    <>
        <NavigationBar />
        <Routes>
            <Route
                path={"/rezept-anlegen"}
                element={<RezeptAnlegen
                    onSubmitRecipe={handleSubmitRecipe}/>}
            />
            <Route
                path={"/rezepte-anzeigen"}
                element={<RezepteAnzeigen
                    list={rezeptArray}
                />}
            />
            <Route
                path={"/details-ansehen"}
                element={<DetailsAnsehen
                    list={rezeptArray}
                />}
            />
            <Route
                path={"/rezept-bearbeiten"}
                element={<RezeptBearbeiten
                    list={rezeptArray}
                    onSubmitEditedRecipe={handleUpdateRecipe}
                />}
            />
            <Route
                path={"/kategorien"}
                element={<Kategorien
                    list={rezeptArray}
                />}
            />
        </Routes>
    </>
  )
}
export default App
