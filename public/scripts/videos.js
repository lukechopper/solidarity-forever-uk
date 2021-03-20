let btnText = $("#dropdownMenuButton");
let firstTitle = $("#first-title");

let categories = {
    music: $("#music-container"),
    speeches: $("#speeches-container"),
    movies: $("#movies-container")
}

//Handle Loader
$(window).on('load', function(){
    $(".absolute-container").addClass("hide");
})


function changeMusic() {
    btnText.html("Music");
    firstTitle.html("Music");

    changeCategory(0);

    // categories.music.removeClass("hide");
    // categories.speeches.addClass("hide");
    // categories.movies.addClass("hide");
}

function changeSpeeches() {
    btnText.html("Talks");
    firstTitle.html("Talks");

    changeCategory(1);

    // categories.music.addClass("hide");
    // categories.speeches.removeClass("hide");
    // categories.movies.addClass("hide");
}

function changeMovies() {
    btnText.html("Movies");
    firstTitle.html("Movies");

    changeCategory(2);

    // categories.music.addClass("hide");
    // categories.speeches.addClass("hide");
    // categories.movies.removeClass("hide");
}

function changeCategory(skip) {
    let iter = 0;
    for (let category in categories) {
        if(skip === iter){
            categories[category].removeClass("hide");
        }else{
            categories[category].addClass("hide");
            categories[category].find("iframe").each(function() { 
                var src= $(this).attr('src');
                $(this).attr('src',src);  
        });
        }   
        iter++;
    }
}



