import { Link } from 'react-router-dom';
import './CategoryCard.css'
import { Button } from '@mui/material';

const CategoryCard = (props) => { 
    return ( 
        <div className="category__card__card">
                <div className="category__image"> 
                   <img src= {props.data.image} alt="" className="product__img"/> 
                </div>
                <div className="category__card__detail">
                    <div className="category__name">
                        {/* <span>{props.data.name}</span> */}
                    </div>
                    <div className="category__card__action">
                        <Link to={props.data.url}>
                            <Button variant='outlined' sx={[{'&:hover': { backgroundColor: 'none', borderColor: 'var(--grey)', color: 'var(--grey)'}, borderRadius: '20px' , borderColor: 'var(--grey)', backgroundColor: "var(--grey)" , color: "var(--charcoal)", fontWeight: '700'}]}>SHOP NOW</Button>
                        </Link>
                    </div>
            </div>
        </div>
     );
}
 
export default CategoryCard;