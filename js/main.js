// toggle

import{OpenMeal} from './mealsOpening.js';
import {Category} from './category.js'


// $('.toggle').click(()=>{
//     let currWidth = $('.navContent').outerWidth();
//     // console.log(curr);

//     if( currWidth ==0)
//     {
//         $('.navContent').animate({'width':'150%'},500);
//         $('.toggle').html(`<i class="fa-solid fa-xmark fa-2x"></i>`)
        
//         // for (let i = 0; i < 5; i++) {
//         //     $('.links li').eq(i).animate({'top':0},(i+5)*100 )          
//         // }
//         // $('.links li').animate({'top':300})
//     }else{

//         $('.navContent').animate({'width':'0'})
//         $('.toggle').html(`<i class="fa-solid fa-bars fa-2x"></i>`)

//         // $('.links li').animate({'top':300},500)
//     }

// })

$('.toggle').click(()=>{
    let currWidth = $('.navContent').outerWidth();
    if($('.sideNav').css('left')=='0px'){
        $('.sideNav').animate({"left":-currWidth})
        $('.toggle').html(`<i class="fa-solid fa-bars fa-2x"></i>`)
        $('.links li').animate({'top':300},500)
        // console.log('iside if');
    }else{
        // console.log('iside else');
        $('.sideNav').animate({"left":0})
        $('.toggle').html(`<i class="fa-solid fa-xmark fa-2x"></i>`)
         for (let i = 0; i < 5; i++) {
            $('.links li').eq(i).animate({'top':0},(i+5)*100 )          
        }

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









