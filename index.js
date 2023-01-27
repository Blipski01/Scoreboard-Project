let homeCount = 0
let guestCount = 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")



function homeAdd1() {
    homeCount += 1
    scoreHome.textContent = homeCount
}
function homeAdd2() {
    homeCount += 2
    scoreHome.textContent = homeCount
}
function homeAdd3() {
    homeCount += 3
    scoreHome.textContent = homeCount
}

function guestAdd1() {
    guestCount += 1
    scoreGuest.textContent = guestCount
}
function guestAdd2() {
    guestCount += 2
    scoreGuest.textContent = guestCount
}
function guestAdd3() {
    guestCount += 3
    scoreGuest.textContent = guestCount
}

function newGame() {
    homeCount = 0
    scoreHome.textContent = homeCount
    guestCount = 0
    scoreGuest.textContent = guestCount

}