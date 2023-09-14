import Products from "./ProductList";
import Container from '@mui/material/Container';
import Nav from "./NavBar";

function App(){
    return(
        <>
            <Nav></Nav>
            <Container maxWidth="md">
                <Products></Products>
            </Container>
        </>
    )
}

export default App