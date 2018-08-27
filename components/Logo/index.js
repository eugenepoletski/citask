import Link from 'next/link'
import styled from 'styled-components'

const Image = styled.img`
  height: 100%;
`;
Image.displayName = 'Logo.Image';

const Logo = () => (
  <Link href="/">
    <a>
      <Image src="static/img/logo.png" />
    </a>
  </Link>
)

export default Logo