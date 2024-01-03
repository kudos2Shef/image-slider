
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
//depending on where the item is sitting we willmovw to either 0 or 100 or 200


slides.forEach(function (slide,index){
    //console.log(index);
    /*In the given code, index is an automatically provided argument within the forEach() method.
     When using forEach() on an array, it iterates through each element of the array and provides a callback function, 
     which, by default, accepts three arguments: currentValue, index, and array.
The index parameter represents the index of the current element being processed within the array.
 It is a built-in feature of the forEach() method in JavaScript, allowing you to access the index of the current element in the array being iterated over. */
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click',function (){
    counter++;
    carousel();

});

prevBtn.addEventListener('click',function (){
    counter--;
    carousel();
});

function carousel(){
    /*working with slides */
    /*//method 1 index[0]--> prev(prev btn) is slides.length-1=4-1 =3 and index[3]--> next is 0(index[0]) prev and next btn exist all the time
    if(counter == slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slides.length - 1;
    }*/

    //method 2 counter < index[3] next(next btn) exist
    if(counter < slides.length - 1){
        nextBtn.style.display = 'block';
    }
    else{//index[3]--> next(next btn) is none
        nextBtn.style.display = 'none';

    }
    if(counter > 0){//prev exist
        prevBtn.style.display = 'block';
    }
    else{// prev is none at index[0]
        prevBtn.style.display = 'none';
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

//method 2 index[0]--> prev btn is none when it is loaded in the front first web view 
prevBtn.style.display = 'none';
//check after removing above code prev will exist when it is loaded in the front first web view but not whe counter < 0  