import './Category.css';
import ItemCard from '../Card/ItemCard/ItemCard';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TabTitle } from '../../utils/General';
import { Button } from '@mui/material';

const Category = (props) => {
    TabTitle(props.name);

    const [show, setShow] = useState('All');
    const [filter, setFilter] = useState('Latest');
    const [visibleCount, setVisibleCount] = useState(8);

    const handleShowChange = (event) => {
        setShow(event.target.value);
        setVisibleCount(8);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Filter and sort products
    let processedItems = [...props.items];

    if (filter === 'Latest') {
        processedItems.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }

    if (filter === 'PriceLow') {
        processedItems.sort((a, b) => a.price - b.price);
    }

    if (filter === 'PriceHigh') {
        processedItems.sort((a, b) => b.price - a.price);
    }

    // Apply Show dropdown
    let displayItems = processedItems;

    if (show !== 'All') {
        displayItems = processedItems.slice(0, Number(show));
    } else {
        displayItems = processedItems.slice(0, visibleCount);
    }

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    const canShowMore =
        show === 'All' && visibleCount < processedItems.length;

    return (
        <div className="category__container">
            <div className="category">

                <div className="category__header__container">

                    <div className="category__header__big">
                        <div className="category__header">
                            <h2>{props.name}</h2>
                        </div>

                        <div className="category__header__line"></div>
                    </div>

                    <div className="category__sort">

                        {/* SHOW */}
                        <div className="show__filter">
                            <Box sx={{ minWidth: 100 }}>
                                <FormControl fullWidth size="small">

                                    <InputLabel>Show</InputLabel>

                                    <Select
                                        value={show}
                                        label="Show"
                                        onChange={handleShowChange}
                                    >
                                        <MenuItem value="All">
                                            All
                                        </MenuItem>

                                        <MenuItem value="8">
                                            8
                                        </MenuItem>

                                        <MenuItem value="12">
                                            12
                                        </MenuItem>

                                        <MenuItem value="16">
                                            16
                                        </MenuItem>

                                    </Select>

                                </FormControl>
                            </Box>
                        </div>

                        {/* FILTER */}
                        <div className="filter__by">

                            <div className="show__filter">

                                <Box sx={{ width: 160 }}>
                                    <FormControl fullWidth size="small">

                                        <InputLabel>
                                            Filter by
                                        </InputLabel>

                                        <Select
                                            value={filter}
                                            label="Filter by"
                                            onChange={handleFilterChange}
                                        >

                                            <MenuItem value="Latest">
                                                Latest
                                            </MenuItem>

                                            <MenuItem value="PriceLow">
                                                Price: Low to High
                                            </MenuItem>

                                            <MenuItem value="PriceHigh">
                                                Price: High to Low
                                            </MenuItem>

                                        </Select>

                                    </FormControl>

                                </Box>

                            </div>

                        </div>

                    </div>

                </div>

                {/* PRODUCTS */}

                <div className="category__card__container">

                    <div className="category__product__card">

                        {displayItems.map((data) => (
                            <ItemCard
                                key={data._id}
                                item={data}
                                category={props.category}
                            />
                        ))}

                        {/* SHOW MORE */}

                        {canShowMore && (
                            <div className="show__more__action">

                                <Button
                                    variant="outlined"
                                    onClick={handleShowMore}
                                    sx={[
                                        {
                                            width: '200px',
                                            height: '50px',
                                            borderRadius: '20px',
                                            fontWeight: '700',
                                            backgroundColor: 'var(--grey)',
                                            borderColor: 'var(--grey)',
                                            color: 'black'
                                        },
                                        {
                                            '&:hover': {
                                                borderColor: 'var(--grey)',
                                                backgroundColor: 'none'
                                            }
                                        }
                                    ]}
                                >
                                    Show more
                                </Button>

                            </div>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Category;