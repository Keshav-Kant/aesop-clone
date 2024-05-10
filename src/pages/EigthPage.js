import React from 'react'
import SideTextComponent from '../components/SideTextComponent'

function EigthPage() {
  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:700}}>
        <img src='https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png' style={{width:600}}/>
      <SideTextComponent 
      thirdWidth={900}
      firstQuote={'Eminently suited to all'}
      secondQuote={'An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections. '}
      buttonQuote={'Purchase now'}
      />
    </div>
  )
}

export default EigthPage
