window.addEventListener("scroll", function(){
    const distance = window.scrollY;
    if (distance <= 1000){ 
    this.document.querySelector(".section-header").style.transform = `translateY(${distance*0.8}px)`};
    /*if (distance >= 1100) {   
    this.document.querySelector(".service-description").style.transform = `translateY(${distance*0.08}px)`};
    */
})