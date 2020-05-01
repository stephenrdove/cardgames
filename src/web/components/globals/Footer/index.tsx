import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.footer.textColor};
  background: ${({ theme }) => theme.footer.backgroundColor};
  min-height: 50px;
`;

export default Footer;
