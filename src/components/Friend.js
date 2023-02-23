import React from 'react'
import styled, { keyframes } from 'styled-components'


/* .friend {
  width: 60%;
  display: flex;
  justify-content: space-between;
} */

// const kf = keyframes`
// 50%{
//   transform: scale(0.8);
// }

// 100% {
//   transform: scale(1);
//   opacity: 1;
// }
// `
const kf = keyframes`
50% {
  transform: scale(0.8);
}
100% {
  transform: scale(1);
  opacity: 1;
}
`

const StyledFriend = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid gray;

background-color: ${pr => pr.theme.primaryColor};
color: ${pr => pr.theme.white};

transition: all 0.2s ease-in-out;
&:hover{
  transition: all 0.2s ease-in-out;
  background-color: ${pr => pr.theme.secondaryColor};
}
  &::before {
    content: "${pr => pr.besty ? "<3" : ":)"}"
}  

button {
  background-color: ${pr => pr.theme.tertiaryColor};
  &:hover {
    transform: scale(1.2);
  }
}

transform: sclae(2); // start of the animation!!
opacity: 0; // start of the animation!!
animation: ${kf} 0.3s ease-in-out forwards;

`

export default function Friend({ info, action, besty }) {
  /**this is the same as the above code.
   * const info = props.info;
   * const action = props.action;
   */
  return (
    <StyledFriend besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
