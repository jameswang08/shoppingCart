import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


function ItemCard(){
    return(
        <Card sx={{maxWidth: 300}}>
            <CardMedia
                sx={{ height: 100 }}
                image="https://picsum.photos/id/237/200/300"
                title="place holder"
            />
            <CardContent sx={{maxHeight: 100, overflow: "scroll"}}>
                <Typography variant="h5" component='h1'>
                    Product Name
                </Typography>
                <Typography variant="body1" component='p'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>   
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <RemoveIcon></RemoveIcon>
                    <TextField sx={{width: 50}}/>
                    <AddIcon></AddIcon>
                </div>
                <Button variant="text">Add</Button>
            </CardActions>
        </Card>
    )
}

export default ItemCard;