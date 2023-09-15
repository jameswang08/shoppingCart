import { Card } from "@mui/material";
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CartCard({img, count}){
    return(
        <Card sx={{maxWidth: 300}}>
            <CardMedia
                sx={{ height: 100 }}
                image={img}
            />
            <CardContent sx={{maxHeight: 100, overflow: "scroll"}}>
                <Typography variant="h5" component='h1'>
                    Product Name
                </Typography>
                <Typography variant="body1" component='p'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>   
            </CardContent>
            <div style={{textAlign: "center", padding: "10px 0px"}}>
                {count}
            </div>
        </Card>
    )
}

CartCard.propTypes = {
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

export default CartCard