
import{DetailedMeal} from './detailedMeal.js'

export class Ingredients {

    constructor(){
       this.currName=0;
       this.currID=0;

    }
    async  getIngredientsData() {

        let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        let data = await response.json();
        let allIng = data.meals; 
        let cuttedIng = allIng.slice(0,20)
        this.displayIngData(cuttedIng)      
        
    }
    displayIngData(cuttedIng){
        //<i class="fa-solid fa-plant-wilt"></i>
        $('.openRow').fadeOut(500);
        $('.Ingredients').fadeIn(500);

        let cartona='';
        let allIngNames=''
        for (let i = 0; i < cuttedIng.length; i++) {
            //cuttedIng[i].strDescription.split(' ')
            cartona+=`
            <div class='col-lg-3 col-md-6'>
            <div  class="myMeal myIng p-3 filterCat position-relative">

            <div class="mealImg  text-center ">
                <div> <i class="fa-solid fa-plant-wilt fa-3x text-center text-success"></i></div>
                <h4 class='text-center IngName text-white pt-3' >${cuttedIng[i].strIngredient}</h4>
                <p class='text-center text-white mt-2'> ${cuttedIng[i].strDescription.split(' ').slice(0,20).join(' ')}</p>
            </div>
            

            </div>
            </div>
            `
        }

        //document.querySelector('.Ingredients').innerHTML= cartona;
        document.querySelector('.allContent').innerHTML= cartona;
        allIngNames= Array.from(document.querySelectorAll('.myIng'));
        this.getNameofIngredients(allIngNames);

    }

    getNameofIngredients(allIngNames){
        
        for (let i = 0; i < allIngNames.length; i++) {

            allIngNames[i].addEventListener('click',  ()=> {
                this.currName =i;
                let ele = allIngNames[this.currName];
                let IngreName= ele.querySelector('.IngName').textContent;
                this.getselIngMeal(IngreName)
            })
            
        }

    }

    async getselIngMeal(IngreName){
       
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngreName}`);
        let data = await response.json();
        let allIngMeals= data.meals;
        this.displaySelIngMeal(allIngMeals)
        
    }

    displaySelIngMeal(allIngMeals){
        $('.Ingredients').fadeOut(500);
        $('.FilteredIngredMeal').fadeIn(500);

        let cartona='';
        let meals;
        allIngMeals
        for (let i = 0; i < allIngMeals.length; i++) {

            cartona+= `
            <div class='col-lg-3 col-md-6 '>
                <div  class="myMeal filterIng position-relative overflow-hidden">
                <p class='d-none mealId'>${allIngMeals[i].idMeal}</p>
                
                <div class="mealImg ">
                    <img src="${allIngMeals[i].strMealThumb}" class="img-fluid">
                </div>
                
                <div  id='FilterCat' class="overlayMeal  d-flex align-items-center">
                    <div class="mx-auto">
                    <h4 >${allIngMeals[i].strMeal}</h4> 
                    </div>
                </div>

                </div>
            </div>
    
            `;
            
        }

        //document.querySelector('.FilteredIngredMeal').innerHTML= cartona;
        document.querySelector('.allContent').innerHTML= cartona;

        meals= Array.from(document.querySelectorAll('.filterIng'));

        //console.log(meals);
        this.sendingIds(meals)


    }
    sendingIds(meals){
       // console.log(allMeals);
        
        for (let i = 0; i < meals.length; i++) {
           
            //console.log(i );
            meals[i].addEventListener('click',()=>{
                this.currID =i;
                let ele=  meals[this.currID];
                let ID= ele.querySelector('.mealId').textContent;
                console.log(ID);
                this.details(ID)
            })
              
        }

    }

    
    details(ID)
    {
        console.log(ID);
        let detailedMeal = new DetailedMeal(ID);
        detailedMeal.getMealData(ID);
    }

}