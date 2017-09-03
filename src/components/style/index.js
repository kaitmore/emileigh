import styled from 'styled-components'

export const Nav = styled.div`
  height: 15vh;
  z-index: 1;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background: white;
`
export const NavLinks = styled.ul`
  list-style-type: none;
  text-transform: uppercase;
  display: flex;
  height: 15vh;
  margin: 0;
  align-items: center;
`
export const NavLink = styled.li`
  display: flex;
  font-size: 16px;
  font-family: 'PT Sans Narrow', sans-serif;
    color: #444;
    letter-spacing: 2px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 1s linear;
  height: 4vh;
  padding: 1vh;
  margin: 2vw;
  align-items: center;
  justify-content: center;
  &:hover{
    border-bottom: 1px solid #000;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'PT Sans Narrow', sans-serif;
  letter-spacing: 2px;
  color: #2b2b2b;
  text-transform: uppercase;
  margin: 5px 30px 0 30px;
  font-size: 24px;
`
export const BioPhoto = styled.img`
  height:85vh;
  width: 40vw;
  object-fit: cover;
`

export const BioText = styled.div`
  height:85vh;
  padding: 40px;
  overflow:scroll;
`
