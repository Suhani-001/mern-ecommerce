import ItemCarousel from './Carousel/ItemCarousel';
import Description from './Description/Description';
import Detail from './Detail/Detail';
import './Item.css';
import Related from './Related/Related';

const Item = (props) => {
    return ( 
        <div className="item__container">
            <div className="detail__and__carousel__container">
                <ItemCarousel item={props.item}/>
                <Detail item={props.item}/>
            </div>
            <div className="item__description__container">
                <Description item={props.item}/>
            </div>
            <div className="related__items__container">
                <Related category={props.item.category} itemId={props.item._id}/>        </div>
        </div>
     );
}
 
export default Item;