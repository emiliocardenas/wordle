import { useState, useRef } from "react";
import Wordle from './Wordle'
import { englishWordsImport } from '../wordLibrary/englishWords.js'
import { spanishWordsImport } from "../wordLibrary/spanishWords.js";

// const API_URL = 'http://localhost:4000/jokes/random'
// const API_URL1 = 'http://localhost:4000/spanish'


function RootComponent(props) {

    const [solution, setSolution] = useState('');
    const ref = useRef();
    


    const englishWords = event => { 
        const fetchEnglishWord = async () => {
            // const response = await fetch(API_URL);
            // const words = await response.json()
            console.log("Only print once")
            const randomWord = englishWordsImport[Math.floor(Math.random() * englishWordsImport.length)]
            setSolution(randomWord)
        }
        fetchEnglishWord()
        event.currentTarget.disabled =true
        ref.current.textContent = "Playing with English words"
        // this.setState({ message: "Updated Content!"});
    }
    // console.log(solution)


    const spanishWords = event => { 
        const fetchSpanishWord = async () => {
            // const response = await fetch(API_URL1);
            // const words = await response.json()
            console.log("Only print once")
            const randomWord = spanishWordsImport[Math.floor(Math.random() * spanishWordsImport.length)]
            setSolution(randomWord)
        }
        fetchSpanishWord()
        event.currentTarget.disabled = true
        ref.current.textContent = "Playing with Spanish Words"


    }


    return(
        <div className="page">
            <h1>Wordle</h1>
            <div ref={ref}></div>
            <button onClick={englishWords}>
                English
            </button>
            <button onClick={spanishWords}>
                Spanish
            </button>
            <div className="game">
                { solution && <Wordle solution = {solution}/>}
            </div>

        </div>
    )
}
export default RootComponent;
