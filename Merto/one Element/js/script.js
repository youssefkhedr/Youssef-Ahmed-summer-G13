 $(document).ready(function(){
  $(".owl-carousel-1").owlCarousel({
    items: 8,
    loop: true,
    autoplay: true,
        
  }),
  $(".owl-carousel-2").owlCarousel({
    items: 3,
    loop: true,
    margin:20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 500,
    nav: true,    
    dots: false,  
    navText: [
      '<div style="padding:10px; position:absolute; border-radius:5px; top:50%;  background-color:white;"><i class="fa-solid fa-angle-left" style="font-size:20px;  color:black;  left:-30px; font-style:italic;"></i></div>',    
      '<div style="padding:10px; position:absolute; border-radius:5px; top:50%;  background-color:white;"><i class="fa-solid fa-angle-right" style="font-size:20px;  color:black; right:0; font-style:italic;"></i></div>'   
    ],
    center: true
  });
  $(".owl-carousel-3").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout:2500,
    autoplaySpeed: 500,
    navText: [
      '<div style="padding:10px; position:absolute; border-radius:5px; top:50%;  background-color:white;"><i class="fa-solid fa-angle-left" style="font-size:20px;  color:black;  left:-30px; font-style:italic;"></i></div>',    
      '<div style="padding:10px; position:absolute; border-radius:5px; top:50%;  background-color:white;"><i class="fa-solid fa-angle-right" style="font-size:20px;  color:black; right:0; font-style:italic;"></i></div>'   
    ],
    center: true,
    nav: true,    
    dots: false
  });
}); 
const thumbnails = document.querySelectorAll('.img-side');
 
const mainImage = document.getElementById('main-img');

 
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src; 
    });
});
