import React from 'react';

function SpecialStrip(props) {
  return (
    <div style={{
      backgroundColor: props.bgColor,
      height: 45,
      display:'flex',
      alignItems: 'center',
      justifyContent: props.isLaptop ? 'left' : 'center',
      gap: 15,
      paddingLeft: props.isLaptop? "10px": 0,
      color: props.fontColor || '#000'
    }}>
      <div style={{
        fontSize: '.875rem',
        fontWeight: 500,
      }}>{props.MainText}</div>
      <span style={{ fontSize: 14, fontWeight: 500,textDecoration: (props.isLaptop && props.underline)?'underline':'none' }}>{props.text || props.addImg}</span>
    </div>
  );
}

export default SpecialStrip;
