const panels=document.querySelectorAll(".panel");
function addOpen(){
    console.log(this);
    this.classList.toggle("open");
}
function toggleActive(e){
    console.log(e);
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }

}



panels.forEach(panel=>panel.addEventListener("click",addOpen));
panels.forEach(panel=>panel.addEventListener("transitionend",toggleActive));