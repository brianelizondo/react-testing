import React from "react";


function Coin(props) {
    const { src, face, isShow } = props;
    return (
        <div className="Coin">
            {isShow && <img className="Coin-image" src={src} alt={face} /> }
        </div>
    );
}

export default Coin;