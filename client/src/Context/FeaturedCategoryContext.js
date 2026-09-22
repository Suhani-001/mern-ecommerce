import { createContext } from "react";

import ethnic from '../asset/category/ethnic.jpg'
import casual from '../asset/category/casual.jpg'
import footwear from '../asset/category/footwear.jpg'
import jewellery from '../asset/category/jewellery.jpg'

export const FeatureCategoryContext = createContext([
    {
        name: "Ethnic",
        image: ethnic,
        url: '/category/ethnic',
        id: 1
    },
    {
        name: "Casual",
        image: casual,
        url: '/category/casual',
        id: 2
    },
    {
        name: "Footwear",
        image: footwear,
        url: '/category/footwear',
        id: 3
    },
    {
        name: "Jewellery",
        image: jewellery,
        url: '/category/jewellery',
        id: 4
    }
])