let btnText = $("#dropdownMenuButton");
let firstTitle = $("#first-title");

let containerMusic = $("#music-container");
let containerSpeeches = $("#speeches-container");
let containerMovies = $("#movies-container");

//Handle Loader
$(window).on('load', function(){
    $(".loader-container").addClass("hide");
})


function changeMusic() {
    btnText.html("Music");
    firstTitle.html("Music");

    containerMusic.removeClass("hide");
    containerSpeeches.addClass("hide");
    containerMovies.addClass("hide");
}

function changeSpeeches() {
    btnText.html("Speeches");
    firstTitle.html("Speeches");

    containerMusic.addClass("hide");
    containerSpeeches.removeClass("hide");
    containerMovies.addClass("hide");
}

function changeMovies() {
    btnText.html("Movies");
    firstTitle.html("Movies");

    containerMusic.addClass("hide");
    containerSpeeches.addClass("hide");
    containerMovies.removeClass("hide");
}