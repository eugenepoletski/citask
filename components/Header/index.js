import styled from 'styled-components';
import Link from 'next/link'

import Logo from '../Logo';

const Wrapper = styled.div`
  height: 40px;
`;
Wrapper.displayName = 'Header.Wrapper';

const Header = () => (
  <Wrapper>
    <Logo />
    <Link href="/">
      <a>start over</a>
    </Link>
  </Wrapper>
)

export default Header