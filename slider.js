var slider = document.querySelector(".povodi-slider-inner");
var prev = document.querySelector(".slider-prev");
var next = document.querySelector(".slider-next");
var slideNum = 0;
var slideWidth = document.querySelector(".povodi11").offsetWidth + 20;
var slideAll = document.querySelectorAll(".povodi11").length;

next.addEventListener("click", function(){
    if (slideNum<slideAll-2){
        slideNum++;
    }
    else{
        slideNum=0;
    }
    slider.setAttribute("style", "transform: translateX(-" + slideNum * slideWidth + "px);");
})

prev.addEventListener("click", function(){
    if  (slideNum==0){
        slideNum=slideAll-2;
    }
    else{
        slideNum--;
    }
    slider.setAttribute("style", "transform: translateX(-" + slideNum * slideWidth + "px);");
})


var faqItems = document.querySelectorAll(".faq_item");

function CloseFAQ() {
    for(let faqItem of faqItems){
        faqItem.classList.remove("active");
    }
}

for (let faqItem of faqItems){
    faqItem.querySelector(".faq_item-title").addEventListener("click", function() {
        if (faqItem.classList.contains("active")){
             CloseFAQ();
        } else {
            CloseFAQ();
            faqItem.classList.add("active");
        }
    });


}


const galleryItems = document.querySelectorAll('.gallery_item');
for (let galleryItem of galleryItems) {
  const galleryTabs = galleryItem.querySelectorAll('.gallery_tab');
  const galleryContents = galleryItem.querySelectorAll('.gallery_content');
  for (let i = 0; i < galleryTabs.length; i++) {
    galleryTabs[i].addEventListener('click', function() {
      for (let j = 0; j < galleryTabs.length; j++) {
        galleryTabs[j].classList.remove('active');
        galleryContents[j].classList.remove('active');
      }
      this.classList.add('active');
      galleryContents[i].classList.add('active');
      const selectedImageSrc = galleryContents[i].querySelector('img').getAttribute('src');
      console.log(selectedImageSrc);
    });
  }
}