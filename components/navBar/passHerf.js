import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: red;
`

function NavLink({ href, name }) {
    return (
        <Link href={href} passHref>
            <StyledLink>{name}</StyledLink>
        </Link>
    )
}

export default NavLink
