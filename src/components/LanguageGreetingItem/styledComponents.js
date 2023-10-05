import styled from 'styled-components'

export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 25px;
  background-color: ${props => props.color};
  color: ${props => props.fontColor};
  border-color: #db1c48;
  border-style: solid;
  border-width: 2px;
`
export const Li = styled.li`
  list-style-type: none;
`
