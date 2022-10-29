
import { Category } from "./category.js";
import { Area } from "./area.js";
import { Ingredients } from "./Ingredients.js";
import { DetailedMeal } from "./detailedMeal.js";
import { Search } from "./search.js";
import { ContactUs } from "./contact.js";



export class OpenMeal{

    constructor(meals){
        this.meals = meals;
        this.currMeal

        document.getElementById('CatBtn').addEventListener('click', this.getCatData);
        document.getElementById('AreaBtn').addEventListener('click', this.getAreaData);
        document.getElementById('IngredBtn').addEventListener('click', this.getIngredientsData);
        document.getElementById('SearchBtn').addEventListener('click', this.getSearchFunc);
        document.getElementById('ContactBtn').addEventListener('click',this.getContactData)
        
    }

    OpenMeal = (meals)=>{
        let cartona = '';
        let allMeals;

        for (let i = 0; i < meals.length; i++) {
            cartona +=`
            <div class='col-md-3'>
            <div class="myMeal openMeals position-relative">
            <p class='d-none mealId'>${meals[i].idMeal}</p>

            <div class="mealImg ">
                <img src="${meals[i].strMealThumb}" class="img-fluid">
            </div>
            
            <div class="overlayMeal d-flex align-items-center">
                <div class="mx-auto">
                <h4>${meals[i].strMeal}</h4> 
                </div>
            </div>

            </div>
            </div>
            
            `
        }

        document.querySelector('.openRow').innerHTML= cartona;
        allMeals= Array.from(document.querySelectorAll('.openMeals '));
        this.getNameofMeal(allMeals);


    }
    getNameofMeal(allMeals){

        for (let i = 0; i < allMeals.length; i++) {

            allMeals[i].addEventListener('click',  ()=> {
                this.currMeal=i;
                let ele = allMeals[this.currMeal];
                let mealId= ele.querySelector('.mealId').textContent;
                console.log(mealId);
                this.details(mealId)
                
            })
            
        }

    }
    details(ID)
    {
        $('.openRow').fadeOut(200); 

        console.log(ID);
        let detailedMeal = new DetailedMeal(ID);
        detailedMeal.getMealData(ID);
    }
    

    getCatData(){
        $('#opening').fadeOut(500);
        $('.openRow').fadeOut(500);
        $('.FilteredMeal').fadeOut(500);
        $('.AreaRow').fadeOut(500);
        $('.filteredAreaMealRow').fadeOut(500);
        $('.DetailedMeal').fadeOut(500);
        $('.Ingredients').fadeOut(500);
        $('.FilteredIngredMeal').fadeOut(500);
        $('.searchSec').fadeOut();
        $('.categoryRow').fadeIn(500);
        $('.contactCont').fadeOut(500);



        let categories = new Category();
        categories.getCatData();
    }

    getAreaData(){
        $('#opening').fadeOut(500);
        $('.openRow').fadeOut(500);
        $('.FilteredMeal').fadeOut(500);
        $('.categoryRow').fadeOut(500);
        $('.filteredAreaMealRow').fadeOut(500);
        $('.DetailedMeal').fadeOut(500);
        $('.Ingredients').fadeOut(500);
        $('.FilteredIngredMeal').fadeOut(500);
        $('.searchSec').fadeOut();
        $('.contactCont').fadeOut(500);


        $('.AreaRow').fadeIn(500);

        let area = new Area();
        area.getAreaData();

    }
    getIngredientsData(){
        $('#opening').fadeOut(500);
        $('.openRow').fadeOut(500);
        $('.FilteredMeal').fadeOut(500);
        $('.categoryRow').fadeOut(500);
        $('.filteredAreaMealRow').fadeOut(500);
        $('.DetailedMeal').fadeOut(500);
        $('.AreaRow').fadeOut(500);
        $('.FilteredIngredMeal').fadeOut(500);
        $('.contactCont').fadeOut(500);
        $('.searchSec').fadeOut();


        $('.Ingredients').fadeIn(500);

        let ing = new Ingredients();
        ing.getIngredientsData();
    }

    getSearchFunc(){
    $('.openRow').fadeOut(500);
    $('.FilteredMeal').fadeOut(500);
    $('.categoryRow').fadeOut(500);
    $('.filteredAreaMealRow').fadeOut(500);
    $('.DetailedMeal').fadeOut(500);
    $('.AreaRow').fadeOut(500);
    $('.Ingredients').fadeOut(500);
    $('.FilteredIngredMeal').fadeOut(500);
    $('.contactCont').fadeOut(500);

   // $('.searchSec').fadeIn(500);
   $('#opening').fadeIn(500);

    let search = new Search();
    }

    getContactData(){
        $('#opening').fadeOut(500);
        $('.openRow').fadeOut(500);
        $('.FilteredMeal').fadeOut(500);
        $('.categoryRow').fadeOut(500);
        $('.filteredAreaMealRow').fadeOut(500);
        $('.DetailedMeal').fadeOut(500);
        $('.AreaRow').fadeOut(500);
        $('.Ingredients').fadeOut(500);
        $('.FilteredIngredMeal').fadeOut(500);
        $('.searchSec').fadeOut(500);

        $('.contactCont').fadeIn(500);
        let contact = new ContactUs();

    }

}




