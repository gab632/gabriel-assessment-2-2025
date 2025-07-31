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
        // e.preventDefault();
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
    function handleUpdateRecipe(e, rezeptId, rezeptName, beschreibung, zutaten, zubereitung, kategorie){
        e.preventDefault();
        // console.log("new name ", e.rezeptName);
        // console.log("from main app ", rezeptId);
        const newRezept ={
            id: rezeptId,
            name: rezeptName,
            beschreibung: beschreibung,
            zutaten: zutaten,
            zubereitung: zubereitung,
            kategorie: kategorie
        }
        setRezept(newRezept);
        console.log("id from main ", newRezept.id);

        let temp = [];
        for(const rezept of rezeptArray){
            if(rezept.id !== newRezept.id){
                temp.push(rezept);
            }
        }
        temp.push(newRezept);
        // console.log("temp ", temp);
        setRezeptArray(temp);
        alert(`Bearbeitung: ${newRezept.name} gespeichert!` )
    }

    function handleDeleteRecipe(id){
        console.log("id ", id)
        if(typeof id === "undefined" || id === ""){
            alert("Keine Rezept ausgewählt");
            return;
        }
        let name = "";
        // console.log("test delete function ", id);
        let temp = [];
        for(const rez of rezeptArray){
            if(rez.id !== id){
                temp.push(rez);
            } else {
                name = rez.name;
            }
        }
        setRezeptArray(temp);
        alert(`Rezept ${name} gelöscht.`)

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
                path={"/"}
                element={<RezepteAnzeigen
                    list={rezeptArray}
                />}
            >

            </Route>
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
                    onDeleteRecipe={handleDeleteRecipe}
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
