import React from 'react';
import Meal from './components/Meal';
import style from './meal.module.css'
// const fetchMeal = async (search) => {
//     const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
//     const data = await res.json()
//     return data.meals
// }

const page = async ({ searchParams }) => {
    
    const query = await searchParams
    console.log(query.search)
    const fetchMeal = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
        const data = await res.json()
        return data.meals
    }

    let  meals = await fetchMeal()
    // meals = []
    console.log(meals)
    return (
        <div>
            <p>Main meal page</p>
            <Meal></Meal>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    meals.map((meal, indx) =>
                        <div key={indx} className='p-2 border'>
                            <p className='title'>{meal?.strMeal}</p>
                            <p className={`${style["privateTitle"]}`}>{meal?.strInstructions}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default page;