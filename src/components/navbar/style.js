import style from 'styled-components'
import {Link} from 'react-router-dom'
export const Navbar = style.nav`
    
`
export const StyledLink = style(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`