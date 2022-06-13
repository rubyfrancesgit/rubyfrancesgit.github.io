import React, { useState } from 'react';
import $ from 'jquery';

function ApiDip() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    
    const [prizeName, setPrizeName] = useState('');

    $.ajax({
        method: 'GET',
        url: url,
        success: function(data) {
            let pokemonNames = [];
            console.log(data);
            const random = Math.floor(Math.random() * data.results.length);
            console.log(random, data.results[random].name);
            // setPrizeName(random, data.results[random].name);

            // for(let i = 0; i < data.results.length; i++) {
                
            //     console.log(data.results[i].name);

            //     pokemonNames.push(data.results[i].name);
            //     console.log(pokemonNames);
                
            // }
            // const random = Math.floor(Math.random() * pokemonNames.length);
            // console.log(random, pokemonNames[random]);
            // setPrizeName(pokemonNames[random]);
            // console.log(prizeName);
        }
    });

    function runApiDip() {
        console.log('lucky dip');
    }

    return (
        <>
            <div className="modal__text-div" id="modalText">
                <h1 className="modal__heading">Magic 8 ball</h1>
                <p className="modal__light-p">Nov 2021</p>
                {/* <p className="modal__p">The second game I ever coded.</p> */}
            </div>

            <div className="api-dip" id="modalGame">
                <p>You won {prizeName}</p>
                <button onClick={() => runApiDip()}>Lucky dip!</button>

            </div>
        </>
    )
}

export default ApiDip
