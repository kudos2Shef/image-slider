
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
//depending on where the item is sitting we willmovw to either 0 or 100 or 200


slides.forEach(function (slide,index){
    //console.log(index);
    
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

prevBtn.style.display = 'none';
