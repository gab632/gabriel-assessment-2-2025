import './App.css'
import { Route, Routes} from "react-router";
import NavigationBar from "./components/NavigationBar.jsx";
import {useEffect, useState} from "react";
import RezeptAnlegen from "./components/RezeptAnlegen.jsx";
import RezepteAnzeigen from "./components/RezepteAnzeigen.jsx";

function App() {

    const [rezept, setRezept] = useState({})
    const [rezeptArray, setRezeptArray] = useState([]);

    function handleSubmitRecipe(e){
        const randomId = crypto.randomUUID();
        // console.log(randomId, e.rezeptName);
        const newRezept ={
            id: randomId,
            name: e.rezeptName,
            beschreibung: e.beschreibung,
            zutaten: e.zutaten,
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



        </Routes>
    </>
  )
}

export default App
