/*!
 *      Author: DigitalDots
	name: script.js	
	requires: jquery	
 */

// $(document).ready(function(){ 
// 	var swiper = new Swiper('.swiper-container', {
// 		slidesPerView: 3,
// 		spaceBetween: 30,
// 		navigation: {
// 			nextEl: '.swiper-button-next',
// 			prevEl: '.swiper-button-prev',
// 		},
// 		pagination: {
// 		  el: '.swiper-pagination',
// 		  clickable: true,
// 		},
// 		breakpoints: {
// 			320: {
// 			  slidesPerView: 1,
// 			  spaceBetween: 20,
// 			},
// 			768: {
// 			  slidesPerView: 2,
// 			  spaceBetween: 40,
// 			},
// 			1024: {
// 			  slidesPerView: 3,
// 			  spaceBetween: 50,
// 			},
			
// 		  }
// 	});
// });


// Portfilio Item Filter
const filterContainer=document.querySelector(".portfolio-filter"),
		filterBtns=filterContainer.children,
		totalFilterBtn=filterBtns.length;
		portfolioItems=document.querySelectorAll(".porfolio-item"),
		totalPortfolioItem=portfolioItems.length;
		

		for(let i=0;i<totalFilterBtn; i++){
			filterBtns[i].addEventListener("click", function(){
				filterContainer.querySelector(".active").classList.remove("active");
				this.classList.add("active");

				const filterValue=this.getAttribute("data-filter");

				for(let k=0; k=totalPortfolioItem; k++){
					if(filterValue === portfolioItems.getAttribute("data-category")){
						portfolioItems[k].classList.remove("hide");
					portfolioItems[k].classList.add("show");
					
				}
				else {
					portfolioItems[k].classList.add("hide");
					portfolioItems[k].classList.remove("show");
				}
				if(filterValue === "all"){
					portfolioItems[k].classList.remove("show");
					portfolioItems[k].classList.add("show");
					
				}
				}
			
			})
		}
