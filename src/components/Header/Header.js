import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import SocialMedia from "../SocialMedia/SocialMedia.component";
import {HeaderContainer, Div1, Div2, NavLink} from './HeaderStyles';

const Header = () => {
  const { route } = useRouter();

  return (
    <HeaderContainer sticky>
      {route === '/' ? (
        <Div1>
          <span style={{display: 'flex', alignItems: 'center'}}>
            @Ayizowebdesign <br/>
          </span>
          <br/>
        </Div1>
      ) : (
        <Div1>
         
        </Div1>
      )
      }
      <Div2>
        <li>
          <Link href={route === '/all-projects' ? "/#about" : '#about'}>
            <NavLink>Over</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projecten</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === '/all-projects' ? "/#tech" : '#tech'}>
            <NavLink>Technologieen</NavLink>
          </Link>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;
