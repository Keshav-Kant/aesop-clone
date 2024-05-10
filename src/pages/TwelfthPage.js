import React from 'react'
import SideTextComponent from '../components/SideTextComponent'

function TwelfthPage() {
  return (
    <div style={{display:'flex',height:900,justifyContent:'space-between',alignItems:'center',paddingLeft:100}}>
    
    <SideTextComponent shadowBg={"none"} thirdGap={30} thirdWidth={600}
        firstQuote={"Facial Appointments"}
        secondQuote={"Composure for the skin and senses"}
        thirdQuote={
          "For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin."
        }
        buttonQuote={"Discover the Gift Finder"}/>

<img src='https://www.aesop.com/u1nb1km7t5q7/3zcvjyxtts2FpeU5DHqO93/d075d2ac71f0a36fe38fce6fd2fb8155/Aesop_Hollywood_Road_II_Hero_Bleed_Desktop_2880x1620px.jpg' style={{height:650}}/>
  </div>
  )
}

export default TwelfthPage
