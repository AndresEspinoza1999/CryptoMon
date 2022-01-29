import React from 'react'
import CollectionCard from '../CollectionCard'
import  '../PokeList.css'

const PokeList = ({pokeListData , setSelectedPoke}) => {
    return (
       <div className="pokelist">
            {pokeListData.map( poke => (
                <div onClick={() => setSelectedPoke(poke.token_id)}>
                    <CollectionCard
                     key={poke.token_id}
                     id={poke.token_id}
                     name={poke.name}
                     traits={poke.traits}
                     image={poke.image_original_url}
                    
                     
                    />
                </div>
            ))}
       </div>
    )
}

export default PokeList
