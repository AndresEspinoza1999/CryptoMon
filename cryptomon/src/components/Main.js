import React, { useState, useEffect } from 'react'
import './Main.css'
import instagramLogo from './assests/owner/instagram.png'
import twitterLogo from './assests/owner/twitter.png'
import moreIcon from './assests/owner/more.png'

const Main = ({selectedPoke, pokeListData}) => {
    const [activePoke, setActivePoke] = useState(pokeListData[0])
    
    useEffect(() => {
        setActivePoke(pokeListData[selectedPoke])
    }, [pokeListData, selectedPoke])

    return (
        <div className="main">
            <div className="mainContent">
                <div className="pokeHighlight">
                    <div className="pokeContainer">
                        <img className='selectedPoke' src={activePoke.image_original_url}  />
                    </div>
                </div>
                <div className="pokeDetails">
                    <div className="title">
                        {activePoke.name} <span className='itemNumber'>#{ activePoke.token_id} </span>
                    </div>
                    
                    <div className="owner"> 
                    <div className="ownerImageContainer">
                       <img src={activePoke.owner.profile_img_url} alt="" /> 
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>0x548380793b80e4f0daa0607a099673b67b510cfb</div>
                            <div className="ownerHandle">@AndresEspinoza</div>
                        </div>
                        <div className="ownerLink">
                           <img src={instagramLogo} alt="" /> 
                        </div>
                        <div className="ownerLink">
                           <img src={twitterLogo} alt="" /> 
                        </div>
                        <div className="ownerLink">
                           <img src={moreIcon} alt="" /> 
                        </div>
                    </div>
                </div>
                </div>
             
            </div>
        </div>
    )
}

export default Main
