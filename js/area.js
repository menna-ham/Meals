import { DetailedMeal } from "./detailedMeal.js";


export class Area {

    constructor(){

        this.currArea=0;
        this.currID=0;
       
    }

    async getAreaData(){
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        let data = await response.json();
        let areas = data.meals;
        this.displayAreas(areas);
        
       
    }

    displayAreas(areas)
    {
        $('.openRow').fadeOut(500);
        $('.filteredAreaMealRow').fadeOut(500);
        $('.AreaRow').fadeIn(500);
        let allArea='';

        let cartona = '';
        for (let i = 0; i < areas.length; i++) {

            cartona += `
            
            <div class='col-lg-3 col-md-6'>
                <div  class="myMeal myArea p-3 filterCat position-relative">

                <div class="mealImg  text-center ">
                    <div> <i class="fa-solid fa-flag fa-3x text-center text-danger"></i></div>
                    <h4 class='text-center text-white pt-3' value=${areas[i].strArea} >${areas[i].strArea}</h4>
                </div>
                

                </div>
            </div>

            `
            
        }

        //document.querySelector('.AreaRow').innerHTML = cartona;
        document.querySelector('.allContent').innerHTML= cartona;
        allArea= Array.from(document.querySelectorAll('.myArea'));
        this.getselectedArea(allArea);

        return allArea;
        
    }


    getselectedArea(allArea){

        for (let i = 0; i < allArea.length; i++) {

            allArea[i].addEventListener('click', ()=>{

                    this.currArea =i;
                    let ele=  allArea[this.currArea];
                    let areaName= ele.querySelector('h4').textContent;
                    this.getMealsOfArea(areaName);
                    
                } )
            
        }

    }



////display meals of specific Area
    async getMealsOfArea(areaName){


        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
        let data = await response.json();
        let areaMeal = data.meals;
        this.displayMealArea(areaMeal);
    }

    displayMealArea(areaMeal){
        $('.AreaRow').fadeOut(500);
        $('.filteredAreaMealRow').fadeIn(500);
        let cartona ='';
        let AllselMeal = '';

        for (let i = 0; i < areaMeal.length; i++) {

            cartona+= `
            <div class='col-lg-3 col-md-6'>
                <div  class="myMeal mealOfArea position-relative overflow-hidden">
                <p class='d-none mealId'>${areaMeal[i].idMeal}</p>

                <div class="mealImg ">
                    <img src="${areaMeal[i].strMealThumb}" class="img-fluid">
                </div>
                
                <div  id='FilterCat' class="overlayMeal  d-flex align-items-center">
                    <div class="mx-auto">
                    <h4 >${areaMeal[i].strMeal}</h4> 
                    </div>
                </div>

                </div>
            </div>
    
            `;
            
        }
      

        //document.querySelector('.filteredAreaMealRow').innerHTML= cartona;
        document.querySelector('.allContent').innerHTML= cartona;
        AllselMeal = Array.from(document.querySelectorAll('.mealOfArea'));
        this.sendingIds(AllselMeal)


    }

    sendingIds(AllselMeal){
        
        for (let i = 0; i < AllselMeal.length; i++) {
           
            
            AllselMeal[i].addEventListener('click',()=>{
                 this.currID =i;
                 let ele=  AllselMeal[this.currID];
                 let ID= ele.querySelector('.mealId').textContent;
                 //console.log(ID);
                 this.details(ID)
            })
            
            
        }

    }

    details(ID)
    {
        $('.filteredAreaMealRow').fadeOut(200); 

        console.log(ID);
        let detailedMeal = new DetailedMeal(ID);
        detailedMeal.getMealData(ID);
    }


    
}