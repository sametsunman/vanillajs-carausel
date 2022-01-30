var currentIndex= 1;
showSlide(currentIndex);

document.getElementById("previous").addEventListener("click",previousSlide);
document.getElementById("next").addEventListener("click",nextSlide);

var slideInterval;
var slideCheckBox = document.getElementById("slide");
slideCheckBox.addEventListener("change", function(){

  if(slideCheckBox.checked)
  {
    slideInterval = setInterval(function(){
      nextSlide();
    },3000);
  }
  else
  {
    clearInterval(slideInterval);
  }
})

var indicators = document.getElementsByTagName("li");
for(var i=0;i<indicators.length;i++)
{
  let indicator = indicators[i];
  indicator.addEventListener("click",function(){
    showSlide(indicator.value);
  });
}




function showSlide(n){
  document.getElementById("carousel-img").src = `/assets/images/img-${n}.jpg`;
}

function previousSlide(){
  currentIndex = currentIndex==1?5:currentIndex-1;
  showSlide(currentIndex);
}

function nextSlide(){
  currentIndex = currentIndex==5?1:currentIndex+1;
  showSlide(currentIndex);
}

