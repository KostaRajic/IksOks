/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-dupe-else-if */

import { useEffect, useRef, useState } from "react"
import { Squares } from "./Squares";


const defaultArray = () => (new Array(9)).fill(null)

// let gameStat = ['', '', '', '', '', '', '', '', ''];

export const GameComponent = () => {
    let [ count, setCount ] = useState(0);
    let [ lock, setLock ] = useState(false);
    let titleRef = useRef(null);

    let random = parseInt(Math.random() * 9)
    
    const [ squares, setSquares ] = useState(defaultArray())
    // function whoPlays(e, num) {
    //     if (lock) {
    //         return 0;
    //     }


    //     if (count % 2 === 0) {
    //         e.target.textContent = `X`;
    //         e.target.style.color = 'Blue';
    //         gameStat[num] = 'X'
    //         setCount(++count)
    //     } else {
    //         num === random
    //         random.target.textContent = 'O'
    //         alert ('1')
    //         // e.target.textContent = `O`;
    //         // e.target.style.color = 'Red';
    //         // gameStat[num] = 'O';
    //         // eslint-disable-next-line react-hooks/rules-of-hooks

    //     }
    //     checkWin()
    // }



    // const checkWin = () => {

    //     if (gameStat[0] === gameStat[1] && gameStat[1] === gameStat[2] && gameStat[2] !== '') {
    //         won(gameStat[2])
    //     } else if (gameStat[3] === gameStat[4] && gameStat[4] === gameStat[5] && gameStat[5] !== '') {
    //         won(gameStat[5])
    //     } else if (gameStat[6] === gameStat[7] && gameStat[7] === gameStat[8] && gameStat[8] !== '') {
    //         won(gameStat[8])
    //     }  else if (gameStat[0] === gameStat[4] && gameStat[4] === gameStat[8] && gameStat[8] !== '') {
    //         won(gameStat[8])
    //     }  else if (gameStat[0] === gameStat[3] && gameStat[3] === gameStat[6] && gameStat[6] !== '') {
    //         won(gameStat[6])
    //     }  else if (gameStat[1] === gameStat[4] && gameStat[4] === gameStat[7] && gameStat[7] !== '') {
    //         won(gameStat[7])
    //     }  else if (gameStat[2] === gameStat[5] && gameStat[5] === gameStat[8] && gameStat[8] !== '') {
    //         won(gameStat[8])
    //     }  else if (gameStat[0] === gameStat[1] && gameStat[1] === gameStat[2] && gameStat[2] !== '') {
    //         won(gameStat[2])
    //     }   else if (gameStat[2] === gameStat[4] && gameStat[4] === gameStat[6] && gameStat[6] !== '') {
    //         won(gameStat[6])
    //     }  
    // }

    // const won = (winner) => {
    //     setLock(true)
    //     if (winner == 'O') {
    //         titleRef.current.textContent= 'O IS WINNER!'
    //     } else
    //         titleRef.current.textContent = 'X IS WINNER!'
    // }

    function handleClickSquare(index) {
        let isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
        if (isPlayerTurn) {
            let newSquares = squares;
            newSquares[index] = "X";
            setSquares([...newSquares])
        }
    }
// zzz
    useEffect(() => {
        let isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
        let putComputerAt = index => {
            let newSquares = squares;
            newSquares[index] = "O";
            setSquares([...newSquares])
        }

        if (isComputerTurn) {
            const emptyIndex = squares
            .map((square, index) => square === null ? index : null)
            .filter(val => val !== null)

            const randomIndex = emptyIndex[Math.ceil(Math.random() * emptyIndex.length)]
            console.log(putComputerAt(randomIndex))
        }
    }, [squares])


    return <div className="container">
        <p ref={titleRef}>Start!</p>
        <div className="gameSection">
            {squares.map((square, index) => 
            <Squares 
            x = { square === 'X' ? 1 : 0 }
            o = { square === 'O' ? 1 : 0 }
            onClick={() => handleClickSquare(index)}/>
)}

    
            {/* <div className='boxClass' onClick={(e) => {whoPlays(e, 0)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 1)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 2)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 3)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 4)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 5)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 6)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 7)}}></div>
            <div className='boxClass' onClick={(e) => {whoPlays(e, 8)}}></div> */}
        </div>
    </div>
}
