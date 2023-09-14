import Products from "./ProductList";
import Container from '@mui/material/Container';
import Nav from "./NavBar";

function Shop(){
    return(
        <>
            <Nav></Nav>
            <Container maxWidth="md">
                <Products></Products>
            </Container>
        </>
    )
}

export default Shop