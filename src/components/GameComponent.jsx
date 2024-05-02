
import { useRef, useState } from "react"

let gameStat = ['', '', '', '', '', '', '', '', '']

export const GameComponent = () => {
    let [ count, setCount ] = useState(0);
    let [ lock, setLock ] = useState(false);
    let titleRef = useRef(null)

    function whoPlays(e, num) {
        if (lock) {
            return 0;
        }
        

        if (count % 2 === 0) {
            e.target.textContent = `X`;
            e.target.style.color = 'Blue';
            gameStat[num] = 'X';
            setCount(++count)
        } else {
            e.target.textContent = `O`;
            e.target.style.color = 'Red';
            gameStat[num] = 'O';
            setCount(++count)
        }
        checkWin()
        
    }

    const checkWin = () => {

        if (gameStat[0] === gameStat[1] && gameStat[1] === gameStat[2] && gameStat[2] !== '') {
            won(gameStat[2])
        } else if (gameStat[3] === gameStat[4] && gameStat[4] === gameStat[5] && gameStat[5] !== '') {
            won(gameStat[5])
        } else if (gameStat[6] === gameStat[7] && gameStat[7] === gameStat[8] && gameStat[8] !== '') {
            won(gameStat[8])
        }  else if (gameStat[0] === gameStat[4] && gameStat[4] === gameStat[8] && gameStat[8] !== '') {
            won(gameStat[8])
        }  else if (gameStat[0] === gameStat[3] && gameStat[3] === gameStat[6] && gameStat[6] !== '') {
            won(gameStat[6])
        }  else if (gameStat[1] === gameStat[4] && gameStat[4] === gameStat[7] && gameStat[7] !== '') {
            won(gameStat[7])
        }  else if (gameStat[2] === gameStat[5] && gameStat[5] === gameStat[8] && gameStat[8] !== '') {
            won(gameStat[8])
        }  else if (gameStat[0] === gameStat[1] && gameStat[1] === gameStat[2] && gameStat[2] !== '') {
            won(gameStat[2])
        }   else if (gameStat[2] === gameStat[4] && gameStat[4] === gameStat[6] && gameStat[6] !== '') {
            won(gameStat[6])
        }  
    }

    const won = (winner) => {
        setLock(true)
        if (winner == 'O') {
            titleRef.current.textContent= 'O IS WINNER!'
        } else
            titleRef.current.textContent = 'X IS WINNER!'
            console.log(winner)
    }



    return <div className="container">
        <p ref={titleRef}>Start!</p>
        <div className="gameSection">
            <div className='boxClass' onClick={(e) => {whoPlays(e, 0)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 1)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 2)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 3)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 4)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 5)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 6)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 7)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 8)}}></div>
        </div>
    </div>
}