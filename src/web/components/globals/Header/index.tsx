import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.header.height}px;
  background-color: ${({ theme }) => theme.header.backgroundColor};
`;

const HeaderPadding = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.header.height}px;
  flex-shrink: 0;
`;

const Header: React.SFC = ({ children }) => (
  <>
    <HeaderWrapper>{children}</HeaderWrapper>
    <HeaderPadding />
  </>
);

export default Header;
