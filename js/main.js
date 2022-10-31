// toggle

import{OpenMeal} from './mealsOpening.js';
import {Category} from './category.js'

$('.toggle').click(()=>{
    let currWidth = $('.navContent').outerWidth();

    if( currWidth ==0)
    {
        $('.navContent').animate({'width':'150%'},()=>{
            $('.navContent ul li').slideDown(2000);
        });
        $('.toggle').html(`<i class="fa-solid fa-xmark fa-2x"></i>`)

    }else{
        $('.navContent').animate({'width':'0'},()=>{
            //$('.navContent ul li').slideUp(2000);

        });
        $('.toggle').html(`<i class="fa-solid fa-xmark fa-2x"></i>`)
    }

})

$(document).ready(function () {

    $('#loading').remove();
    $('body').css('overflow',"visible")
});

///////////////////////////////////////////////////////////////////////////////////////////////////////




async function getMeals (){
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    let data = await res.json();
    let meals = data.meals;
    let open = new OpenMeal(meals);
    open.OpenMeal(meals)
}
getMeals()









