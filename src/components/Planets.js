import React from 'react'

const Planets = () => {
    const planetName=[
        {name:'Mars', isGasPlanet: false},
        {name:'venus', isGasPlanet: true},
        {name:'Eart', isGasPlanet: false},
        {name:'Jupiter', isGasPlanet: true}

    ]
   
  return (
    <div>
      {planetName.map((planet)=> !planet.isGasPlanet && <h1> {planet.name} </h1>
      )}
    </div>
  )
}

export default Planets
