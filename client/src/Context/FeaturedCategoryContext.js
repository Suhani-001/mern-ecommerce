import { createContext } from "react";

import ethnic from '../asset/category/ethnic.jpg';
import casual from '../asset/category/casual.jpg';
import footwear from '../asset/category/footwear.jpg';
import jewellery from '../asset/category/jewellery.jpg';

import workwear from '../asset/category/workwear.jpg';
import kidswear from '../asset/category/kidswear.jpg';
import handbags from '../asset/category/Handbags.jpg';
import watch from '../asset/category/Watch.jpg';
import sportswear from '../asset/category/Sportswear.jpg';

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
    },

    {
        name: "Workwear",
        image: workwear,
        url: '/category/workwear',
        id: 5
    },

    {
        name: "Kidswear",
        image: kidswear,
        url: '/category/kidswear',
        id: 6
    },

    {
        name: "Handbags",
        image: handbags,
        url: '/category/handbags',
        id: 7
    },

    {
        name: "Watch",
        image: watch,
        url: '/category/watch',
        id: 8
    },

    {
    name: "Sportswear",
    image: sportswear,
    url: '/category/sportswear',
    id: 9
    }

]);