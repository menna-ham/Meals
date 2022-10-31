
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
            <div class='col-lg-3 col-md-6'>
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

        //document.querySelector('.openRow').innerHTML= cartona;
        document.querySelector('.allContent').innerHTML= cartona;
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
      
        let categories = new Category();
        categories.getCatData();
    }

    getAreaData(){
  
        let area = new Area();
        area.getAreaData();

    }
    getIngredientsData(){

        let ing = new Ingredients();
        ing.getIngredientsData();
    }

    getSearchFunc(){

    let search = new Search();
    }

    getContactData(){

        let contact = new ContactUs();

    }

}




