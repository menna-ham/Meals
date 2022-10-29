// toggle

import{OpenMeal} from './mealsOpening.js';
import {Category} from './category.js'

$('.toggle').click(()=>{
    let currWidth = $('.navContent').outerWidth();

    if( currWidth ==0)
    {
        $('.navContent').animate({'width':'250'},()=>{
            $('.navContent ul ').slideDown(1000);
        });
        $('.toggle').html(`<i class="fa-solid fa-xmark fa-2x"></i>`)

    }else{
        $('.navContent').animate({'width':'0'},()=>{
            // $('.navContent ul ').slideUp(1000);

        });
        $('.toggle').html(`<i class="fa-solid fa-xmark fa-2x"></i>`)
    }

})

///////////////////////////////////////////////////////////////////////////////////////////////////////

// let SearchBtn =document.getElementById('SearchBtn')
// if(SearchBtn)
// {
//     SearchBtn.addEventListener('click', function(){
//         getSearch();
//     })
// }


async function getMeals (){
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    let data = await res.json();
    let meals = data.meals;
    let open = new OpenMeal(meals);
    open.OpenMeal(meals)
}
getMeals()


function getSearch(){
    $('.openRow').fadeOut(500);
    $('.FilteredMeal').fadeOut(500);
    $('.categoryRow').fadeOut(500);
    $('.filteredAreaMealRow').fadeOut(500);
    $('.DetailedMeal').fadeOut(500);
    $('.AreaRow').fadeOut(500);
    $('.FilteredIngredMeal').fadeOut(500);

    $('.searchSec').show();
}






