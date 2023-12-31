import { Card } from "@mui/material";
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


function ItemCard({img, amt, indx, list, update}){
    const copy = [...list];

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
            <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <RemoveIcon onClick={() => {
                        copy[indx].count --;
                        update(copy);
                    }}></RemoveIcon>
                    <TextField sx={{width: 50}} value={amt} onChange={(event) => {
                        copy[indx].count = event.target.value;
                        update(copy);
                    }}/>
                    <AddIcon onClick={() => {
                        copy[indx].count ++;
                        update(copy);
                    }}></AddIcon>
                </div>
            </CardActions>
        </Card>
    )
}

ItemCard.propTypes = {
    img: PropTypes.string.isRequired,
    amt: PropTypes.number.isRequired,
    indx: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
};

export default ItemCard;