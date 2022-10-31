
// first Letter www.themealdb.com/api/json/v1/1/search.php?f=a
// first name www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata


export class Search {
    constructor(){
        this.showSearch();
        this.serLetterVal = document.getElementById('searchLetter');
        this.valLetter = this.serLetterVal.value;
        document.getElementById('searchName').addEventListener('keyup', this.searchWithName.bind(this));
        document.getElementById('searchLetter').addEventListener('keyup', (e) =>{  this.searchWithLetter(e,this.valLetter)})
        


    }
    showSearch(){
        let cartona= ` 
        <div class='row g-3 '>
            <div class='col-lg-6 col-md-12 my-md-3 my-sm-3'>
                    <div class="input-group  w-100  m-auto mx-lg-3 mx-md-5 ms-sm-4">
                        <input type="text" id='searchName' class="shadInput w-75 p-3  m-auto  text-white " id="exampleFormControlInput1" placeholder="Search By Name...">
                    </div>
            </div>
            <div class=' col-lg-6 col-md-12 my-md-3 my-sm-3'>
                <div class="input-group w-100   m-auto mx-lg-3 mx-md-5 ms-sm-4">
                    <input type="text" id='searchLetter' maxlength="1" class="shadInput w-75 p-3  m-auto  text-white " id="exampleFormControlInput1" placeholder="Search By FirstLetter...">
                    
                </div>
            </div>
        </div>
        `;

    document.querySelector('#opening').innerHTML= cartona;
    }

    async searchWithName(serNameVal){
        serNameVal = document.getElementById('searchName');
        let value = serNameVal.value;

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
        let data = await response.json();
        let resMeal = data.meals;

        console.log(resMeal);
        this.displaySearchedMeals(resMeal)

    }

    async searchWithLetter(e,serLetterVal){

        let regexLetters= /^(?=.*?[A-Za-z])[A-Za-z+]+$/;
        serLetterVal = document.getElementById('searchLetter');
        let valLetter= document.getElementById('valLetter');
        let value = serLetterVal.value;

        if(value.length==1 && regexLetters.test(value))
        {
            
           // valLetter.classList.remove('d-block');
            // valLetter.classList.add('d-none');

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
            let data = await response.json();
            let resMeal = data.meals;
            
            this.displaySearchedMeals(resMeal)
            //value='';
        }else{
           console.log('error');

        }
        

    }

    displaySearchedMeals(resMeal)
    {
        let cartona ='';
        for (let i = 0; i < resMeal.length; i++) {
           cartona+= `
           <div class='col-lg-3 col-md-6 '>
                <div  class="myMeal filterCat position-relative">

                <div class="mealImg ">
                    <img src="${resMeal[i].strMealThumb}" class="img-fluid">
                </div>
                
                <div  id='FilterCat' class="overlayMeal  d-flex align-items-center">
                    <div class="mx-auto">
                    <h4 class='catName' >${resMeal[i].strMeal}</h4> 
                    </div>
                </div>

                </div>
            </div>
           `
            
        }
        
        document.querySelector('.searchedItems .row').innerHTML= cartona;
    }

}