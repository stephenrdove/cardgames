import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

export const EmptyList: React.FC<{ message: string; tagline?: string }> = ({
  message,
  tagline,
}) => (
  <Wrapper>
    <p><strong>{message}</strong></p>
    {tagline && <p>{tagline}</p>}
  </Wrapper>
);

export default EmptyList;
