import ItemCard from './ShopCard'
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'


function Products({spriteList, update}) {
  return (
    <div>
        <Grid container spacing={4}>
          {spriteList.map((item, index) => <Grid key={index} item xs={3}><ItemCard img={item.sprite} amt={item.count} indx={index} list={spriteList} update={update}></ItemCard></Grid>)}
        </Grid>
    </div>
  )
}

Products.propTypes = {
  spriteList: PropTypes.array,
  update: PropTypes.func,
};

export default Products
