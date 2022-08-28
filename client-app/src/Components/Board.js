import Line from './Line'



export default function Board({ currentGuess, guesses, turn}) {
  return (
    <div>
        {
            guesses.map((g, i) => {
              if (turn === i) {
                return <Line key={i} currentGuess={currentGuess} />
              }
                return (<Line key = {i} guess = {g}/>)
            })
         }
    </div>
  )
}
