

export class DetailedMeal{

    constructor(id){
        this.id = id;
        
    }

    async getMealData(id)
    {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let data = await response.json();
        let details = data.meals[0];
        //console.log(details); 
        this.displayDetails(details)
    }


    displayDetails(details)
    {

        console.log(details);
        $('.DetailedMeal').fadeIn(500);

        let ing = ` `;
        for (let i = 0; i < 20; i++) {
            
            if(details[`strIngredient${i}`])
            {
                ing += ` <span class="badge bg-secondary fs-5 m-2" > ${details[`strMeasure${i}`]} ${details[`strIngredient${i}`]}</span>`
            }
            
        }
        let tags = details.strTags.split(",");
        if(!tags)tags=[];
        let strTag = ``;

        for( let i=0 ; i<tags.length ; i++){
            strTag+= ` <p> <span class="badge bg-secondary fs-5">${tags[i]}</span></p>`
        }

        let cartona = `        
            <div class="col-md-4">
                <div class="detMealImg">
                    <div class="w-100">
                        <img src="${details.strMealThumb}" class="img-fluid">
                    </div>
                    <h2 class="text-white "> ${details.strMeal}</h2>
                </div>
            </div>
            <div class="col-md-8">
                <div class="detMealDetails">
                    <div class="inst">
                        <h3 class="text-white fs-2" >Instructions </h3>
                        <p class="text-white fs-5"> ${details.strInstructions}</p>
                    </div>
                    <span class="text-white fw-bold fs-5 my-1">Area: </span><span  class="text-white fs-5"> ${details.strArea}</span><br>
                    <span class="text-white fw-bold fs-5 my-1">Category: </span><span  class="text-white fs-5"> ${details.strCategory}</span>
                    <div class="Recipes my-2 ">
                    <h4 class='text-white'> Recipes:</h4>
                    <div class='rec'>
                    ${ing}
                    </div>
                      
                    </div>
                    <div class="tags my-2">
                    <span  class="text-white fw-bold fs-5 mx-2">Tag:</span>
                    
                    ${strTag}
                        
                    </div>
                    <div class="Links my-2">
                        <a type="button" target='_blank' href='${details.strSource!=null ? details.strSource:'https://www.bbcgoodfoodme.com/'}' class="btn btn-success mx-2">Source</a>
                        <a type="button" target='_blank'  href='${details.strYoutube}' class="btn btn-danger">Youtube</a>
                    </div>

                </div>
            </div>` ;

        document.querySelector('.allContent').innerHTML= cartona;

    }



}