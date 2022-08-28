import './style.css';


function Line({ guess }) {
    const tiles = []
    const WORD_LENGTH = 5
    for (let i = 0; i < WORD_LENGTH; i++) {
        const char = guess[i]
        // console.log(char)
        tiles.push(
            <div key={i} className="tile">
                {char}
            </div>
        )
    }
    console.log(tiles)


   



return(
    <div className="line">{tiles}</div>
        

)
}
export default Line;