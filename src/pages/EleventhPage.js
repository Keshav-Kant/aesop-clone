import React from 'react'
import SideTextComponent from '../components/SideTextComponent'

function EleventhPage() {
    return (
        <div style={{display:'flex',height:900,justifyContent:'space-between',alignItems:'center',paddingRight:100}}>
          <img src='https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg' style={{height:650}}/>
          <SideTextComponent shadowBg={"none"} thirdGap={30} thirdWidth={600}
              firstQuote={"Facial Appointments"}
              secondQuote={"Composure for the skin and senses"}
              thirdQuote={
                "For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin."
              }
              buttonQuote={"Discover the Gift Finder"}/>
    
              
        </div>
      )
}

export default EleventhPage
