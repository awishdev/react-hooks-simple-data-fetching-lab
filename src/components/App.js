// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [isLoaded, setIsLoaded] = useState(false)
    const [dog, setDog] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => { setDog(data.message) })
        .then(() => setIsLoaded(true));
    }, []);

    if(isLoaded === false){
        return (
            <p>Loading</p>
        );
    }
    return (
        <img alt="A Random Dog" src={dog}></img>
    )
}

export default App;
