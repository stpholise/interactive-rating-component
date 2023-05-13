const num = document.querySelectorAll(".num");
const selectedNum = document.querySelector(".selcted-num")
const btn = document.querySelector(".sub-btn");
const mainBox = document.querySelector(".main")
const tyBox = document.querySelector(".ty")

const myArr = [] // to add the value of each rating
const bgCol = num.style; // holds the current style of each btn

// EACH NUM OR RATING CLICKED
// ================
num.forEach(element => {
    let omo = element.textContent
    myArr.push(omo)
    element.addEventListener("click", (e) =>{
        removeAtv()
        e.currentTarget.style.backgroundColor = "blue";
        selectedNum.textContent = e.currentTarget.textContent
    })
   
});


// REMOBE  ACTIVE FROM ALL THE CLICKS SO AS TO SECLCT THE CURRNTYLE CLICKED 
// ===============
function removeAtv(){
    num.forEach((el) => {
        el.style = bgCol
    })
}

// BUTTON CLICK 
// ----------
btn.addEventListener("click", (e) => {
    if(mainBox.classList.contains("show")){
        mainBox.classList.remove("show")
        tyBox.classList.add("show")
    }
})