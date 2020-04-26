import styled from 'styled-components';

const Footer = styled.div`
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.primary};
  min-height: 50px;
`;

export default Footer;
