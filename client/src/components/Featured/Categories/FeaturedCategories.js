import { useContext } from "react";
import { Link } from "react-router-dom";
import { FeatureCategoryContext } from "../../../Context/FeaturedCategoryContext";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import './FeaturedCategories.css'

const Categories = () => {
    const featuredCategories = useContext(FeatureCategoryContext)
    
    return ( 
        <div className="featured__categories__container">
            <div className="featured__categories">
                <div className="featured__categories__header">
    <h3 className="featured__header__big">
        Shop by Category
    </h3>

    <Link to="/shop" className="all__collections">
        VIEW ALL COLLECTIONS <span>→</span>
    </Link>
   
</div>
                
                <div className="featured__categories__card__container">
                    { featuredCategories.map((category) =>  <CategoryCard key={category.id} data={category}/>)}
                </div>
            </div>
        </div>  
     );
}
 
export default Categories;