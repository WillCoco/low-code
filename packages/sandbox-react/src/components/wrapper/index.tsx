import React from 'react';

export default (props: {
  children: React.ReactNode
}) => {
  return (
    <div style={{border: '1px solid red'}}>
      {props.children}
    </div>
  )
}
