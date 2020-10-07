const classOrder = ["enter", "left", "center", "right", "exit"]
let companies = []
let timerDelay = 3000

function moveCompanies(dir) {
    console.log("MOVING!");
    let start = (dir > 0) ? 0 : classOrder.length - 1
    let end = (dir > 0) ? classOrder.length-1 : 0
    let oldEnd = $(`.carousel .company.${classOrder[end]}`)
    for (let i = end-dir; i >= 0 && i < classOrder.length; i -= dir) {
        $(`.carousel .company.${classOrder[i]}`).removeClass(classOrder[i]).addClass(classOrder[i+dir]).unbind()
    }
    oldEnd.removeClass(classOrder[end]).addClass(classOrder[start])
    setUpHandlers()
}

function setUpHandlers() {
    $(".carousel .company.left").click(() => {
        moveCompanies(1)
        clearInterval(loopInterval);
        loopInterval = setInterval(() => moveCompanies(1), timerDelay);
    })

    $(".carousel .company.right").click(() => {
        moveCompanies(-1)
        clearInterval(loopInterval);
        loopInterval = setInterval(() => moveCompanies(1), timerDelay);
    })
}
setUpHandlers()

// let loopInterval = setInterval(() => moveCompanies(1), timerDelay);