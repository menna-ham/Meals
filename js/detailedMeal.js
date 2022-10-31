

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
        this.getIngredientsMeasures(details);  
    }

    getIngredientsMeasures(details)
    {
        let ingredientsArr= [];
        let measuresArr=[];
        let cartona='';

        for (const key in details) {

            if(key.includes('strIngredient'))
            {
                ingredientsArr.push(details[key]);
            }else if(key.includes('strMeasure')){
                measuresArr.push(details[key])
            }
            
        }

        measuresArr.forEach(function(item, index){

            if(item !=''||ingredientsArr[index]!='')
            {
                cartona += `<span class="badge bg-secondary fs-5 m-2" > ${item} ${ingredientsArr[index]}</span> `;

            }else if(item=='' && ingredientsArr[index]==''){
                cartona+=''
            }else if(item==null || ingredientsArr[index]==null){
                cartona+=''
            }else{
                cartona+=''
            }

        });
        console.log(cartona);
        return cartona;
    }

    displayDetails(details)
    {
        // $('.filteredAreaMealRow').fadeOut(500); 
        // $('.categoryRow').fadeOut(500); 
        // $('.FilteredMeal').fadeOut(500); 
        // $('.AreaRow').fadeOut(500); 

        $('.DetailedMeal').fadeIn(500);

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
                    
                    </div>
                      
                    </div>
                    <div class="tags my-2">
                        
                        ${details.strTags!=null || details.strTags!='' ? `<span  class="text-white fw-bold fs-5 mx-2">Tag:</span> <p> <span class="badge bg-secondary fs-5">${details.strTags}</span></p>`:'<p></p>'}
                        
                    </div>
                    <div class="Links my-2">
                        <a type="button" target='_blank' href='${details.strSource!=null ? details.strSource:'https://www.bbcgoodfoodme.com/'}' class="btn btn-success mx-2">Source</a>
                        <a type="button" target='_blank'  href='${details.strYoutube}' class="btn btn-danger">Youtube</a>
                    </div>

                </div>
            </div>` ;
        
        //document.querySelector('.DetailedMeal').innerHTML= cartona;
        document.querySelector('.allContent').innerHTML= cartona;
        // let returnedDets = this.getIngredientsMeasures(details)
        // console.log(returnedDets);
        document.querySelector('.rec').innerHTML=this.getIngredientsMeasures(details) ;
    }



}