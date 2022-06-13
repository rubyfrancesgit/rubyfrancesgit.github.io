import React, { useState } from 'react'
import Nav from '../components/Nav'

// styles
import '../sass/style.scss';
import Eightball from '../components/Eightball';
import EmojiMadlibs from '../components/EmojiMadlibs';
import ApiDip from '../components/ApiDip';

function Arcade() {
    const [modalBackgroundClasses, setModalBackgroundClasses] = useState("modal-background hide");
    const [madLibsModalClasses, setMadLibsModalClasses] = useState("modal hide");
    const [eightBallModalClasses, setEightBallModalClasses] = useState("modal hide");
    const [apiDipModalClasses, setApiDipModalClasses] = useState("modal hide");

    function launch8BallModal() {
        setModalBackgroundClasses("modal-background");
        setEightBallModalClasses("modal");
    } 

    function launchMadLibsModal() {
        setModalBackgroundClasses("modal-background");
        setMadLibsModalClasses("modal");
    } 

    function launchApiDipModal() {
        setModalBackgroundClasses("modal-background");
        setApiDipModalClasses("modal");
    } 

    function clodeModal() {
        setModalBackgroundClasses("modal-background hide");
        setMadLibsModalClasses("modal hide");
        setEightBallModalClasses("modal hide");
        setApiDipModalClasses("modal hide");
    }

    const showHoverInfo = (id) => {
        document.getElementById(id).classList.remove("hide");
        console.log('hover');
    }

    const hideHoverInfo = (id) => {
        document.getElementById(id).classList.add("hide");
        console.log('hover');
    }

    return (
        <>
            <div className={eightBallModalClasses} id="8BallModal">
                <Eightball />
            </div>

            <div className={madLibsModalClasses} id="madLibsModal">
                <EmojiMadlibs />
            </div>

            <div className={apiDipModalClasses} id="apiModal">
                <ApiDip />
            </div>

            <div className={modalBackgroundClasses} id="modalBackground" onClick={clodeModal}>
            </div>

            <Nav />
            <div className="right-page">
                <div className="arcade-info-section">
                    <h1 className="arcade-info-section__heading">‍👾 Arcade</h1>

                    <p className="arcade-info-section__middle-p">Come get your geek on!</p>

                    <p className="arcade-info-section__p">When I first started learning Javascript I felt overwhelmed trying to understand its logic and structure. It was a big step up from HTML & CSS! 
                    <br />
                    <br />
                    In an effort to get my head around parameters and methods, I started making little Javascript games in my spare time.
                    <br />
                    <br />
                   Not only did this help develop my coding abilities, but I also discovered how creative coding could be, and my fear soon turned into excitement.</p>
                </div>

                <div className="arcade">
                    <div className="arcade__card arcade__card-b-g" onClick={launch8BallModal} onMouseOver={() => showHoverInfo("8BallInfo")}  onMouseOut={() => hideHoverInfo("8BallInfo")} >
                        <p className="arcade__big-emoji">🎱</p>

                        <div className="arcade__text-div hide" id="8BallInfo">
                            <p className="arcade__p">Magic 8 ball</p>
                            <button className="arcade__play-btn">Play</button>
                        </div>
                    </div>

                    <div className="arcade__card arcade__card-p-b" onClick={launchMadLibsModal}>
                        <p className="arcade__big-emoji">🐸</p>

                        <div className="arcade__text-div hide">
                            <p className="arcade__p">Emoji mad libs</p>
                            <button className="arcade__play-btn">Play</button>
                        </div>
                    </div>

                    <div className="arcade__card arcade__card-o-p" onClick={launchApiDipModal}>
                        <p className="arcade__big-emoji">🎁</p>

                        <div className="arcade__text-div hide">
                            <p className="arcade__p">Emoji mad libs</p>
                            <button className="arcade__play-btn">Play</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Arcade
