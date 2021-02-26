let magazineImage = $("#magazine-image");
let issueNum = $("#issue-num").val();
let page = 0;

let magazineLoaderContainer = $("#magazine-loader-container");

let firstMagazineHolder = [
{
    page: 1,
    url: "https://i.imgur.com/RB7ajRm.png"
},
{
    page: 2,
    url: "https://i.imgur.com/z3r67mq.png"
},
{
    page: 3,
    url: "https://i.imgur.com/Riwn6Gr.png"
},
{
    page: 4,
    url: "https://i.imgur.com/yNsoCHm.png"
},
{
    page: 5,
    url: "https://i.imgur.com/GunOgpA.jpg"
},
{
    page: 6,
    url: "https://i.imgur.com/OENnYw3.jpg"
},
{
    page: 7,
    url: "https://i.imgur.com/9OG5U61.png"
},
{
    page: 8,
    url: "https://i.imgur.com/Q6n3y5v.png"
},
{
    page: 9,
    url: "https://i.imgur.com/4e4pQtV.jpg"
},
{
    page: 10,
    url: "https://i.imgur.com/bMSt55d.png"
},
{
    page: 11,
    url: "https://i.imgur.com/eqPa9ya.png"
},
{
    page: 12,
    url: "https://i.imgur.com/ObkkW1S.png"
},
{
    page: 13,
    url: "https://i.imgur.com/9qvpBQB.png"
},
{
    page: 14,
    url: "https://i.imgur.com/DI0whVB.png"
},
{
    page: 15,
    url: "https://i.imgur.com/Q46UqcG.jpg"
},
{
    page: 16,
    url: "https://i.imgur.com/YobypW8.jpg"
},
{
    page: 17,
    url: "https://i.imgur.com/8vBNl0g.png"
},
{
    page: 18,
    url: "https://i.imgur.com/mJWtvlY.jpg"
},
{
    page: 19,
    url: "https://i.imgur.com/oRVV4Pr.png"
},
{
    page: 20,
    url: "https://i.imgur.com/D4bowAy.png"
},
{
    page: 21,
    url: "https://i.imgur.com/G8ztF97.png"
},
{
    page: 22,
    url: "https://i.imgur.com/4tMmTYX.png"
},
{
    page: 23,
    url: "https://i.imgur.com/1sKrasl.png"
},
{
    page: 24,
    url: "https://i.imgur.com/Opq1ett.png"
},
{
    page: 25,
    url: "https://i.imgur.com/DBhv1Q0.png"
},
{
    page: 26,
    url: "https://i.imgur.com/rKoikaf.png"
},
{
    page: 27,
    url: "https://i.imgur.com/nSrS8GH.png"
},
{
    page: 28,
    url: "https://i.imgur.com/qvZeg7k.png"
},
{
    page: 29,
    url: "https://i.imgur.com/xw5BM4N.png"
},
{
    page: 30,
    url: "https://i.imgur.com/a67n5Do.png"
},
{
    page: 31,
    url: "https://i.imgur.com/FFiYXoW.png"
},
{
    page: 32,
    url: "https://i.imgur.com/LTn23Mo.png"
}
]


//If the issue is 1 (from the hidden input tag) then load up everything we need for the first issue
if(issueNum === "1"){
    magazineImage.attr("src", firstMagazineHolder[page].url);



 function goForward() {
    
    if(page < firstMagazineHolder.length - 1){
        magazineLoaderContainer.removeClass("hide");
        page++;
        magazineImage.attr("src", firstMagazineHolder[page].url).on("load", function(){
            magazineLoaderContainer.addClass("hide");
        });
    }

}

 function goBack(){
    if(page > 0){
        magazineLoaderContainer.removeClass("hide");
        page--;
        magazineImage.attr("src", firstMagazineHolder[page].url).on("load", function(){
            magazineLoaderContainer.addClass("hide");
        });
    }

}

 function changePageNum(selectPage){
    magazineLoaderContainer.removeClass("hide");
    page = selectPage;
    magazineImage.attr("src", firstMagazineHolder[page].url).on("load", function(){
        magazineLoaderContainer.addClass("hide");
    });
}

}

