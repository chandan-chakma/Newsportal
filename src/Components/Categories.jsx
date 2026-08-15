import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromiss = fetch('/categories.json').then(res => res.json());
// console.log((categoriesPromiss()));

const Categories = () => {
    const categories = use(categoriesPromiss);
    // console.log(categories)
  
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
            <h1>{categories.length}</h1>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} className='btn bg-base-100 border-0 hover:bg-base-300' key={category.id}>{ category.name}</NavLink>)

                }
            </div>

        </div>
    );
};

export default Categories;