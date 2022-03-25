import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';

export default function QuoteCard(props) {
    const [isFlipped, setIsFlipped] = useState(false)
    const { quoteObj } = props
    // console.log(props.quoteObj)
    // console.log(isFlipped)
    const handleClick = () => {
        setIsFlipped(prevState => (!prevState));
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={'horizontal'}>
            <div key={'front'} onClick={handleClick}>
                <li className="quoteLi">
                    <p  key={'front'}>{quoteObj.quote}</p>
                </li>
            </div>

           
                <div key={'back'} onClick={handleClick}>
                <li className='quoteLi'>
                    <img src={quoteObj.image} />
                    <p >-{quoteObj.character}</p>
                    </li>
                </div>
           
        </ReactCardFlip>


    )
}
