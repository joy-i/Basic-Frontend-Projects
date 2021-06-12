/*

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

// when you are doing fetch you are using AJAX

function addDoggo(){
    
    fetch(BREEDS_URL)
    .then(function(response){
        return response.json();
    })

    // create a new image everytime
    .then(function(data){
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = "Cute doggo";

        document.querySelector('.doggos').appendChild(img);

    })
}

*/

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);        

        for(let i = 0; i < breedsArray.length; i++){
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        } 
    })

select.addEventListener('change',function(event){
    const show = event.target.value;  // select.value

    //make new url
    const newURL = `https://dog.ceo/api/breed/${show}/images/random`;
    getDoggo(newURL);

})


//fetch from the API
//use the url to change the current image

const img = document.querySelector('.dog-image');
const spinner = document.querySelector('.spinner');

function getDoggo(newURL){
    
    //show loading spinner
    spinner.classList.add('show');
    img.classList.remove('show');

    fetch(newURL)
    .then(function (response){
        return response.json();
    })
    .then(function(data){        
        img.src = data.message;         
    })
}
//stop showing loading spinner

img.addEventListener('load', function(){
    spinner.classList.remove('show');
    img.classList.add('show');
})