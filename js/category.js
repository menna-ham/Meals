import{DetailedMeal} from'./detailedMeal.js'
export class Category {

    constructor(){

        this.filteredItem = document.getElementById('FilterCat');
        this.currCat=0;
        this.currID;
    }

     async getCatData(){
        let res= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        let data = await res.json();
        let categories = data.categories;
        this.displayCategory(categories);
        
        return categories

    }

    displayCategory (categories){

        $('.openRow').fadeOut(500);
        $('.categoryRow').fadeIn(500);

        let cartona = '';
        let allIngCats;
        
        for (let i = 0; i < categories.length; i++) {

            cartona+= `
            <div class='col-md-3'>
                <div  class="myMeal filterCat position-relative">

                <div class="mealImg ">
                    <img src="${categories[i].strCategoryThumb}" class="img-fluid">
                </div>
                
                <div  id='FilterCat' class="overlayMeal  d-flex align-items-center">
                    <div class="mx-auto">
                    <h4 class='catName' >${categories[i].strCategory}</h4> 
                    </div>
                </div>

                </div>
            </div>
    
            `;


            
        }

        document.querySelector('.categoryRow').innerHTML= cartona;

        allIngCats= Array.from(document.querySelectorAll('.filterCat '));
        this.getNameofIngredients(allIngCats);

       
    }
    getNameofIngredients(allIngCats){

        //console.log(allIngCats);
        for (let i = 0; i < allIngCats.length; i++) {

            allIngCats[i].addEventListener('click',  ()=> {
                this.currCat =i;
                let ele = allIngCats[this.currCat];
                let catName= ele.querySelector('.catName').textContent;
                console.log(catName);
                this.getselCatMeal(catName)
            })
            
        }
    }

    async getselCatMeal(catName){
        $('.searchSec').hide();

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
        let data = await response.json();
        let allCatMeals= data.meals;
        console.log(allCatMeals);
        this.displaySelCatMeal(allCatMeals)

    }

    displaySelCatMeal(allCatMeals){
        $('.categoryRow').fadeOut(500);
        $('.FilteredMeal').fadeIn(500);

        let cartona='';
        let meals;

        for (let i = 0; i < allCatMeals.length; i++) {

            cartona+= `
            <div class='col-md-3 my-3 '>
                <div  class="myMeal filterCategory position-relative">
                <p class='d-none mealId'>${allCatMeals[i].idMeal}</p>
                
                <div class="mealImg ">
                    <img src="${allCatMeals[i].strMealThumb}" class="img-fluid">
                </div>
                
                <div  id='FilterCat' class="overlayMeal  d-flex align-items-center">
                    <div class="mx-auto">
                    <h4 >${allCatMeals[i].strMeal}</h4> 
                    </div>
                </div>

                </div>
            </div>
    
            `;
            
        }

        document.querySelector('.FilteredMeal').innerHTML= cartona;
        meals= Array.from(document.querySelectorAll('.filterCategory'));

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
         $('.FilteredMeal').fadeOut(200); 
 
         console.log(ID);
         let detailedMeal = new DetailedMeal(ID);
         detailedMeal.getMealData(ID);
     }
    

}

