import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, HeaderWrap, Link } from "./Header.styled";

export const Header = () => {
    return (
    <Container>
      <HeaderWrap>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderWrap>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
    )
}