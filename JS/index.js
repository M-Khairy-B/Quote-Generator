    var  arrayQuotes= [
        {
            quote: "“Be yourself; everyone else is already taken.”",
            author: "― Oscar Wilde",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Oscar Wilde.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“If you tell the truth, you don't have to remember anything.”",
            author: "― Mark Twain",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Mark Twain.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“So many books, so little time.”",
            author: "― Frank Zappa",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Frank Zappa.jpg" alt="Frank Zappa" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            author: "― Albert Einstein",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Albert Einstein.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“A room without books is like a body without a soul.”",
            author: "― Marcus Tullius Cicero",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Marcus Tullius.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            author: "― Bernard M. Baruch",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Bernard M. Baruch.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            author: "― Dr. Seuss",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Dr. Seuss.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“You only live once, but if you do it right, once is enough.”",
            author: "― Mae West",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Mae West.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
        {
            quote: "“Be the change that you wish to see in the world.”",
            author: "― Mahatma Gandhi",
            imgWriter:`<div class="d-flex justify-content-center align-items-center">
            <img src="img/Mahatma Gandhi.jpg" alt="" class="rounded-circle img-writer" />
                </div>`
        },
    ];



function generate() {
    var arrayIndex = Math.floor(Math.random()* arrayQuotes.length);
    document.getElementById("quotes").innerHTML = arrayQuotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = arrayQuotes[arrayIndex].author;
    document.getElementById("imgwriter").innerHTML = arrayQuotes[arrayIndex].imgWriter;
}
// var prevIndex;
// function generate() {
//     // var arrayIndex = Math.floor(Math.random()* arrayQuotes.length);
//     // // document.getElementById("quotes").innerHTML = arrayQuotes[arrayIndex].quote;


//     // document.getElementById("imgwriter").innerHTML = arrayQuotes[arrayIndex].imgWriter;
//     // if(arrayIndex !=  document.getElementById("quotes").innerHTML ,document.getElementById("author").innerHTML ){
//     //     document.getElementById("quotes").innerHTML = arrayQuotes[arrayIndex].quote ,arrayQuotes[arrayIndex].author ;
//     //     arrayIndex = Math.floor(Math.random()* arrayQuotes.length)
//     // }

//     var index = Math.floor(Math.random()* arrayQuotes.length);
//     if(index!=prevIndex){
//         document.getElementById("quotes").innerHTML = arrayQuotes[arrayIndex].quote;
//     document.getElementById("author").innerHTML = arrayQuotes[arrayIndex].author;
//     document.getElementById("imgwriter").innerHTML = arrayQuotes[arrayIndex].imgWriter;
//     prevIndex=index
//     }else{
//         var index = Math.floor(Math.random()* arrayQuotes.length);
//         generate()
//     }
// }
