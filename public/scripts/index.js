//Quote Handler
let quoteBank = [
    {
        quote: "As long as the general population is passive, apathetic, diverted to consumerism or hatred of the vulnerable, then the powerful can do as they please, and those who survive will be left to contemplate the outcome.",
        person: "Noam Chomsky"
    },
    {
        quote: "And those who danced, were thought to be insane, by those who could not hear the music.",
        person: "Unknown"
    },
    {
        quote: "Never have so many been manipulated so much by so few.",
        person: "Aldous Huxley"
    },
    {
        quote: "You cannot control your own population by force, but it can be distracted by consumption.",
        person: "Noam Chomsky"
    },
    {
        quote: "The more you can increase fear of drugs, crime, welfare mothers, immigrants and aliens, the more you control all of the people.",
        person: "Noam Chomsky"
    },
    {
        quote: "They don’t want to see us unite. All they want us to do is keep on fussing and fighting. They don’t want to see us live together. All they want us to do is keep on killing one another.",
        person: "Bob Marley"
    },
    {
        quote: "Democracy and freedom will be the theme of every broadcast and editorial. ... Meanwhile the ruling oligarchy and its highly trained elite of sol­diers, policemen, thought-manufacturers and mind-manipulators will quietly run the show as they see fit.",
        person: "Aldous Huxley"
    },
    {
        quote: "The real hopeless victims of mental illness are to be found among those who appear to be most normal.",
        person: "Aldous Huxley"
    },
    {
        quote: "This country cannot afford to be materially rich and spiritually poor.",
        person: "John F. Kennedy"
    },
    {
        quote: "Injustice anywhere is a threat to justice everywhere.",
        person: "Martin Luther King"
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        person: "Martin Luther King"
    },
    {
        quote: "Our scientific power has outrun our spiritual power. We have guided missiles and misguided man.",
        person: "Martin Luther King"
    },
    {
        quote: "Until they become conscious they will never rebel, and until after they have rebelled they cannot become conscious.",
        person: "George Orwell"
    },
    {
        quote: "Conformity is the jailor of freedom, and the enemy of growth.",
        person: "John F. Kennedy"
    },
    {
        quote: "Disobedience, in the eyes of any one who has read history, is man's original virtue. It is through disobedience that progress has been made, through disobedience and through rebellion.",
        person: "Oscar Wilde"
    },
    {
        quote: "Private property ... has led Individualism entirely astray. It has made gain not growth its aim. So that man thought that the important thing was to have, and did not know that the important thing is to be. The true perfection of man lies, not in what man has, but in what man is.",
        person: "Oscar Wilde"
    },
    {
        quote: "The individual has always had to struggle to keep from being overwhelmed by the tribe... If you try it, you’ll be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
        person: "Rudyard Kipling"
    },
    {
        quote: "No king, no parliament, no government ever extended to the people more rights than the people insisted upon.",
        person: "Terence McKenna"
    },
    {
        quote: "When the power of love overcomes the love of power the world will know peace.",
        person: "Disputed"
    }
]

let quoteBtn = $("#quote-btn");
let quoteBlock = $("#quote-block");
let quoteTrail = $("#quote-trail");
let randomNum;
let randomNumStore = [];

randomQuote();

quoteBtn.click(function(){
    randomQuote();
});

function randomQuote() {
    randomNumStore.push(randomNum);

    if(randomNumStore.length == quoteBank.length){
        randomNumStore = [];
    }

    do{
        randomNum = Math.floor(Math.random() * quoteBank.length);
    }while(randomNumStore.includes(randomNum))


    
    quoteBlock.html(quoteBank[randomNum].quote);
    quoteTrail.html(quoteBank[randomNum].person);
}


