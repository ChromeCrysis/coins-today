import style from 'styled-components'
import {Link} from 'react-router-dom'
export const Navbar = style.nav`
  
`
export const StyledLink = style(Link)`
  text-decoration: none;
  color: #fff;
  &:active {
    text-decoration: none;
  }
`

export const ScrollText = style.nav`
  animation: animate 40s linear infinite;
  color: #fff;
  width: 100%;
  height: 50px;
  border-top: 4px solid #00FF7F;

  .scroll {
    animation: animate 20s linear infinite;
  }
  @keyframes animate {
    0%{
      transform: translateX(100%)
    }

    100%{
      transform: translateX(-100%)
    }
  }
`