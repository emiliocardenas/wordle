import { useEffect } from 'react'
import useGameLogic from '../hooks/useGameLogic'
import Board from './Board'


export default function Wordle({ solution }) {

     const { currentGuess, handleKeyUp, guesses, isCorrect, turn } = useGameLogic(solution)

     useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
     
       return () =>  window.removeEventListener('keyup', handleKeyUp)
       
     },[handleKeyUp])


     useEffect(() => {
      console.log(guesses, turn, isCorrect, currentGuess)
     }, [guesses, turn, isCorrect, currentGuess])
     





  return (
    <div>
      <Board currentGuess = {currentGuess} guesses={guesses} turn={turn} />
    </div>
  )
}
