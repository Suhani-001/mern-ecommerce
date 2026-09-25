import { useContext } from "react";
import { Link } from "react-router-dom";
import { FeatureCategoryContext } from "../../../Context/FeaturedCategoryContext";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import './FeaturedCategories.css'

const Categories = (props) => {
    const featuredCategories = useContext(FeatureCategoryContext)
    
    return ( 
        <div className="featured__categories__container">
            <div className="featured__categories">
                <div className="featured__categories__header">
    <h3>{props.title || "Shop by Category"}</h3>

    {props.showViewAll !== false && (
    <Link to="/shop" className="all__collections">
        VIEW ALL COLLECTIONS <span>→</span>
    </Link>
)}
   
</div>
                
                <div className="featured__categories__card__container">
                    {(props.showAll ? featuredCategories : featuredCategories.slice(0, 4)).map((category) => (
    <CategoryCard key={category.id} data={category}/>
))}
                </div>
            </div>
        </div>  
     );
}
 
export default Categories;