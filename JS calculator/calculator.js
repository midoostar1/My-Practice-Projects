


let eq = document.querySelector(".eq-show")
let clear = document.querySelector("#clear")
var calcDisplay = document.querySelector("#show")
var allBtn = document.querySelectorAll(".num")
let calcshow = calcDisplay.value


for (let btn of allBtn) {
    let btnValue = btn.value
    btn.addEventListener("click", function () {
        document.querySelector("#show").value += btnValue
        console.log(calcshow)

    })

}

eq.addEventListener("click",function (){
    var total = eval( document.querySelector("#show").value)
    document.querySelector("#show").value = total
})



clear.addEventListener("click", Clear)


//function clear calc

function Clear() {
    document.querySelector("#show").value    = ''

}







