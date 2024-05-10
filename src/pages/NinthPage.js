import React from 'react'
import SideTextComponent from '../components/SideTextComponent'

function NinthPage() {
    return (
        <div style={{display:'flex',height:900,justifyContent:'space-between',alignItems:'center',paddingLeft:100}}>
          <SideTextComponent shadowBg={"none"} thirdGap={30} thirdWidth={600}
              firstQuote={"A seasonal offer"}
              secondQuote={"Experience Karst Eau de Parfum"}
              thirdQuote={
                "In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.)"
              }
              buttonQuote={"Explore summer formulations"}/>
    
              <img src='https://www.aesop.com/u1nb1km7t5q7/6fNN0BAQNyzP9A9eOwmcaE/cb660d194f4078aa1e4e09b2da3983d5/Aesop_SPF50_2023_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg' style={{height:650}}/>
        </div>
      )
}

export default NinthPage
