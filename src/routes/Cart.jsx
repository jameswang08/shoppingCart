import { useOutletContext } from "react-router-dom";
import CartCard from "../components/CartCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Cart(){
    const data = useOutletContext();
    const list = data[0];
    console.log("poop", list);
    const newList = list.filter(item => item.count > 0);
    console.log("pee", newList);

    return(
        <Container maxWidth="md">
            <Grid container spacing={4}>
                {newList.map((item, index) =>  <Grid key={index} item xs={3}><CartCard img={item.sprite} count={item.count} key={index}></CartCard></Grid>)}
            </Grid>
        </Container>
    )
}

export default Cart