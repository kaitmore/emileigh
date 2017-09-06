import styled from 'styled-components'

export const Nav = styled.div`
  height: 15vh;
  z-index: 1;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background: transparent;
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
  margin: 2vw;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'PT Sans Narrow', sans-serif;
  letter-spacing: 2px;
  color: ${props => props.secondary ? '#8aa3a8' : '#2b2b2b'};
  text-transform: uppercase;
  margin: ${props => props.secondary ? '0' : '5px 30px 0 30px'};
  font-size: ${props => props.secondary ? '24px' : '30px'};
`

export const BioPhoto = styled.img`
  width: ${props => props.right ? '45vw' : '30vw'};
  height: 75vh;
  margin:  ${props => props.landscape ? '0 5vw' : '5vh 3vw 0 3vw'};
  object-fit: cover;
`

export const Text = styled.div`
  padding: 0 40px 0 0;
  width: ${props => props.right ? '50vw' : 'auto'};
  margin: 5vh 5vh 0 5vh;
  height: 75vh; 
  overflow:scroll;
`
export const EventLink = styled.a`
  font-size: 18px;
  color: #b2c1c4;
  text-decoration: none;
  transition: color 1s linear;
  &:hover{
    color: #8aa3a8;
  }
`

export const Date = styled.div`
font-size: 20px;
`
export const Description = styled.div`
font-size: 18px;
`

export const Tile = styled.div`
width: 10vw;
height: 10vw;
margin: 30px;
object-fit: cover;
`
export const VideoContainer = styled.div`
  height: 13vw;
  width: 13vw;
  overflow: hidden;
  margin: 1vw;
`