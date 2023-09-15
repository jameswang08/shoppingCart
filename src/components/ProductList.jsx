import ItemCard from './Card'
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'


function Products({spriteList}) {
  return (
    <div>
        <Grid container spacing={4}>
          {spriteList.map((item, index) => <Grid key={index} item xs={3}><ItemCard img={item}></ItemCard></Grid>)}
        </Grid>
    </div>
  )
}

Products.propTypes = {
  spriteList: PropTypes.array,
};

export default Products
