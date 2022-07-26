import React, { useState } from "react";
import "./CoinFlip.css";
import coin_head from "./coin_head.jpg";
import coin_tail from "./coin_tail.jpg";
import Coin from "./Coin";

function CoinFlip(props) {
    const [coinData, setCoinData] = useState({ src: "", face: "", isShow: false });
    const [flips, setFlips] = useState(0);
    const [flipsHead, setFlipsHead] = useState(0);
    const [flipsTail, setFlipsTail] = useState(0);

    const newFlip = () => {
        const randomIDX = Math.floor(Math.random() * props.coins.length);
        const newCoin = props.coins[randomIDX];
        setCoinData(newCoin);

        setFlips(flips + 1);
        if(newCoin.face === "head"){
            setFlipsHead(flipsHead + 1);
        }else{
            setFlipsTail(flipsTail + 1);
        }
    }

    return (
        <div className="CoinFlip">
            <h1>Let's flip a coin</h1>
            <Coin src={ coinData.src } face={ coinData.face } isShow={ coinData.isShow } />
            <div className="CoinFlip-button"><button onClick={ newFlip } data-testid="flip-me">flip meeee</button></div>
            <div className="CoinFlip-track">
                Out of <b>{ flips }</b> flips, 
                there haven been <b>{ flipsHead } heads </b> 
                and <b>{ flipsTail } tails</b>
            </div>
        </div>
    );
}

CoinFlip.defaultProps = {
    coins: [
        {
            src: coin_head,
            face: "head",
            isShow: true
        },
        {
            src: coin_tail,
            face: "tail",
            isShow: true
        }
    ]
};

export default CoinFlip;