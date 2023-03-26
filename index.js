// Your code here
const dodger = document.getElementById("dodger")

function moveDodgerLeft(){
    const leftDigits = dodger.style.left.replace("px", "")
    const left = parseInt(leftDigits, 10)

    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener("keydown", e => {
    if(e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
})


function moveDodgerRight() {
    const leftDigits = dodger.style.left.replace("px", "")
    const left = parseInt(leftDigits, 10)

    if (left > 0){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", e => {
    if(e.key === "ArrowRight"){
        moveDodgerRight()
    }
})
