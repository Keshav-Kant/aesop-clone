import React from 'react'

function SpecialStrip(props) {
  return (
    <div style={{
        backgroundColor: props.bgColor,
        textAlign: 'center',
        height: 45,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap:15,
        color:props.fontColor || '#000'
    }}>
        <div style={{
        fontSize: '.875rem',
        fontWeight: 500,
    }}>{props.MainText}</div>
    <span style={{fontSize:14,
    fontWeight:500}}>{props.text || props.addImg}</span>
    </div>
  )
}

export default SpecialStrip