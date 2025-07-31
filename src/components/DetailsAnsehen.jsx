import {useEffect, useState} from "react";

export default function DetailsAnsehen({list}){

    const [details, setDetails] = useState({});

    function showDetails(e, rezept) {
        e.preventDefault();
        setDetails(rezept);
    }
    // useEffect used for testing purposes:
    // useEffect(() =>{
    //     console.log("det ", details);
    // },[details])

    return(
        <>
            <div>
                {
                    list.map(rezept =>
                        <button
                            key={rezept.id}
                            id={rezept.id}
                            className={"details-button"}
                            value={rezept}
                            onClick={(e) => showDetails(e, rezept)}
                        >
                            {rezept.name}
                        </button>

                    )
                }
            </div>
            <hr></hr>
            <div>

                <h3>Details</h3>

                <ul>


                    <li key={details.id}>
                        <h4>Name: {details.name}</h4>
                        <h3>Kategorie:</h3>
                        <p>{details.kategorie}</p>
                        <h3>Beschreibung:</h3>
                        <p>{details.beschreibung}</p>
                        <h3>Zutaten:</h3>
                        <p>{details.zutaten}</p>
                        <h3>Zubereitung:</h3>
                        <p>{details.zubereitung}</p>
                    </li>

                </ul>
            </div>



        </>




    )
}