import React from 'react'

function ItemsSlide(props) {
  return (
    <div style={{display:'flex'}}>

{props.ItemArray.map((item,index)=>(
  <div key={index} style={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}} >
      <img src={item.img} style={{width:450}}/>
      
      <div style={{textAlign:'center',display:'flex',flexDirection:'column',gap:10}}>
      <div>{item.medName}</div>
      <div>{item.medQuote}</div>
      </div>
</div>
))}
    </div>
  )
}

export default ItemsSlide