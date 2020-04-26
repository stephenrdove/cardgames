import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.primary};
  min-height: 50px;
`;

export default Footer;
