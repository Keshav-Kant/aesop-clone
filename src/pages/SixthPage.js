import React from 'react'
import SideTextComponent from '../components/SideTextComponent'

function SixthPage() {
  return (
    <div style={{display:'flex',height:900,justifyContent:'space-between',alignItems:'center',paddingLeft:100}}>
    <SideTextComponent shadowBg={"none"} thirdGap={30} thirdWidth={600}
        firstQuote={"High time for high coverage"}
        secondQuote={"Protective Facial Lotion SPF50"}
        thirdQuote={
          "Introducing a daily-use formulation offering broad-spectrum UV protection and sustained hydration—come rain or shine."
        }
        buttonQuote={"Discover Protective Facial Lotion SPF50"}/>

        <img src='https://www.aesop.com/u1nb1km7t5q7/6fNN0BAQNyzP9A9eOwmcaE/cb660d194f4078aa1e4e09b2da3983d5/Aesop_SPF50_2023_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg' style={{height:650}}/>
  </div>
  )
}

export default SixthPage
