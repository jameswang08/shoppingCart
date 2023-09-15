import Products from "../components/ProductList";
import Container from '@mui/material/Container';
import PropTypes from 'prop-types'
import { useOutletContext } from "react-router-dom";

function Shop(){
    const list = useOutletContext();
    return(
        <>
            <Container maxWidth="md">
                <Products spriteList={list[0]} update={list[1]}></Products>
            </Container>
        </>
    )
}

Shop.propTypes = {
    spriteList: PropTypes.array,
};

export default Shop