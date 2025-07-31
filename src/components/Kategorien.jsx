import {useState} from "react";

export default function Kategorien({list}){
    const categories = ["dessert", "imbiss", "hauptgericht", "fruestueck", "sonstiges"];
    const [selectedCategory, setSelectedCategory] = useState("");

    function onSelectCategory(e){
        e.preventDefault();
        setSelectedCategory(e.target.value);

    }


    return(
        <>
            <h2>Kategorien</h2>
            <div>
                <button
                    id={"button"}
                    value={categories[0]}
                    onClick={onSelectCategory}
                >
                    {categories[0]}
                </button>
                <button
                    id={"button"}
                    value={categories[1]}
                    onClick={onSelectCategory}

                >
                    {categories[1]}
                </button>
                <button
                    id={"button"}
                    value={categories[2]}
                    onClick={onSelectCategory}

                >
                    {categories[2]}
                </button>
                <button
                    id={"button"}
                    value={categories[3]}
                    onClick={onSelectCategory}

                >
                    {categories[3]}
                </button>
                <button
                    id={"button"}
                    value={categories[4]}
                    onClick={onSelectCategory}

                >
                    {categories[4]}
                </button>
            </div>

            <hr></hr>
            <div id={"category-layout"}>

                    <h2>Category: {selectedCategory}</h2>
                    <ul>
                        {
                            list
                                .filter(rezept => rezept.kategorie === selectedCategory)
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
        </>
    )
}