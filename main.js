//get poppu relted elemnt by class atribute
var popup = document.getElementsByClassName("popup");
var bubles = document.getElementsByClassName("buble");
//add function to click event on all elements with a popup class
for(var i=0;i<popup.length;i++){
    popup[i].onclick = function(){
        //toggle the show class on the popup buble element
        var bubble = this.nextElementSibling;
        bubble.classList.toggle("show");
        this.classList.toggle("active");
    };
}