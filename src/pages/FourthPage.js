import React from 'react'
import SideTextComponent from '../components/SideTextComponent'

function FourthPage() {
    return (
        <div style={{display:'flex',height:900,justifyContent:'space-between',alignItems:'center',paddingRight:100}}>
          <img src='https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg' style={{height:650}}/>
          <SideTextComponent shadowBg={"none"} thirdGap={30} thirdWidth={600}
              firstQuote={"Options, streamlined"}
              secondQuote={"The Gift Finder"}
              thirdQuote={
                "This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria."
              }
              buttonQuote={"Discover the Gift Finder"}/>
    
              
        </div>
      )
}

export default FourthPage
