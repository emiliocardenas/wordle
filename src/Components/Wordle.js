import { useEffect } from 'react'
import useGameLogic from '../hooks/useGameLogic'
import Grid from './Grid'


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
      <div>CURRENT GUESS: {currentGuess}</div>
      <div>CURRENT Solution: {solution}</div>
      <Grid currentGuess = {currentGuess} guesses={guesses} turn={turn} />
    </div>
  )
}
