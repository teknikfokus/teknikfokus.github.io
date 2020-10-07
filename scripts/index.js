const classOrder = ["enter", "left", "center", "right", "exit"]
let companies = []
let timerDelay = 3000

function moveForward() {
    let carousel = $(".carousel");
    carousel.children().first().removeClass("edge");
    carousel.find(".company:nth-last-child(2)").addClass("edge");
    carousel.prepend($(".carousel .company:last").clone())
    carousel.append($(".carousel .company:last").clone())
    carousel.children().addClass("moving");

    carousel.find(".center").removeClass("center");
    carousel.find(`:nth-child(${(carousel.children().length-1)/2})`).addClass("center")
    
    setTimeout(() => {
        carousel.children().last().remove()
        carousel.children().last().remove()
        carousel.children().removeClass("moving");
    }, 1000)
}

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function initCarousel() {
    let logos = [];
    $.get("./images/logos/.", function(data) 
    {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                logos.push(val);
            } 
        });
        logos = shuffleArray(logos)
        let carousel = $(".carousel");
        for (let i = 0; i < 50; i++) {
            companies.push("A");
        }
        let amountOfCompanies = Math.floor(companies.length/2)*2 +1
    
        for (let i = 0; i < amountOfCompanies; i++) {
            logo = logos[i];
            let element = `
            <div class="company" style="background-image: url('${logo}')">
            </div>`;
            carousel.append(element)
        }
        carousel.find(`:nth-child(${(amountOfCompanies-1)/2 + 1})`).addClass("center")
        carousel.children().first().addClass("edge")
        carousel.children().last().addClass("edge")
    
        setInterval(() => moveForward(), timerDelay);
    });
}
$(document).ready(() => {
    initCarousel()
});
