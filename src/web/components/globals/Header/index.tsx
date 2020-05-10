import { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NewThemeContext } from '../../../contexts/ThemeContext';
import Toggle from '../../Toggle';
import darkTheme from '../../../themes/dark';

const HeaderPadding = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.header.height}px;
  flex-shrink: 0;
`;

const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.header.height}px;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  z-index: 100;

  .logo {
    margin-left: 16px;
    font-size: 32px;
    a {
      color: ${({ theme }) => theme.header.textColor};
      text-decoration: none;
    }
  }

  .theme-toggle {
    margin-right: 16px;
    margin-left: auto;
  }
`;

const Header: React.SFC = () => {
  // const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
  const { state, dispatch } = useContext(NewThemeContext);
  return (
    <>
      <HeaderWrapper>
        <div className="logo">
          <Link href="/">
            <a>ride the bus</a>
          </Link>
        </div>
        <div className="theme-toggle">
          <Toggle value={state.theme === darkTheme} onChange={() => dispatch({ type: 'TOGGLE_THEME' })} />
        </div>
      </HeaderWrapper>
      <HeaderPadding />
    </>
  );
};

export default Header;
