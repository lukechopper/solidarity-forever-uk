let magazineImage = $("#magazine-image");
let page = 1;

let firstURI;
let secondURI;


function changePageNum(num) {
    page = num;
    setURI();
    
    magazineImage.attr("src", firstURI + secondURI);
}

function goBack() {
    if(page > 1){
        page--;
    }
    
    setURI();

    magazineImage.attr("src", firstURI + secondURI);
}

function goForward() {
    page++;
    setURI();

    magazineImage.attr("src", firstURI + secondURI);
}



function setURI(){
    let imageURI = magazineImage.attr("src");
    let imageIndex = imageURI.indexOf("page");
    firstURI = imageURI.slice(0, imageIndex);


    //If the user has reached the last page then they cannot go any further
    if(firstURI === "images/magazine-1/"){
        if(page >= 3){
            page = 2;
            return;
        }
    }

    secondURI = `page-${page}.png`;


}