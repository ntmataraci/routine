/* conten */

let data = {
    1: "deneme bir yazı",
    2: "deneme iki yazı",
    3: "deneme 3 yazı",
    4: "deneme 4 yazı",
    5: "deneme 5 yazı",
    6: "deneme 6 yazı",
    7: "deneme 7 yazı",
    8: "deneme 8 yazı",
}

let i = 1;

document.querySelector(".button--right").addEventListener("click", () => {

    i += 1;
    if (i > 8) {
        i = 1
    }
    updateText(i);
})

document.querySelector(".button--left").addEventListener("click", () => {
    i -= 1;
    if (i < 1) {
        i = 8;
    }
    updateText(i);
})


function updateText(i) {
    document.querySelector(".section--law").textContent = data[i]
}


/* menü */
document.querySelector(".tab").addEventListener("click", (e) => {
    let myTarget = e.target;
    if (myTarget.classList.value == "tab--routine") {
        document.querySelector(".section--law").style.display = "none";
        document.querySelector(".button").style.display = "none";
        document.querySelector(".section--routine").style.display = "block";
    } else if (myTarget.classList.value == "tab--law") {
        document.querySelector(".section--law").style.display = "block";
        document.querySelector(".button").style.display = "flex";
        document.querySelector(".section--routine").style.display = "none";
    } else {
        return;
    }

}
)


// /* textarea*/
// document.querySelector(".submit").addEventListener("click",()=>{
//     let textAdd=document.querySelector("#textarea")
//     localStorage.setItem("darkside_content",textAdd.value)
// })







/* routine */

if (localStorage.getItem("darkside") != null) {
    (JSON.parse(localStorage.getItem("darkside"))).forEach(x => {
        document.querySelector(".section__routines").innerHTML += `<div class="routine--row"><button data-number="-1">-</button><div class="routine__text" data-number="0">${x["name"]}</div><button data-number="1">+</button><div class="streak">${x["value"]}</div><div class="delete">[X]</div></div><br>`
    })
}

document.getElementById("newRoutine").addEventListener("click", () => {
    let routine = prompt("Please add new routine")
    document.querySelector(".section__routines").innerHTML += `<div class="routine--row"><button data-number="-1">-</button><div class="routine__text" data-number="0">${routine}</div><button data-number="1">+</button><div class="streak">0</div><div class="delete">[X]</div></div><br>`
    update()
})




function update() {
    let multiRoutine = document.querySelectorAll(".routine--row")
    multiRoutine.forEach((x, idx) => {
        console.log(x.querySelectorAll("button"))
        x.addEventListener("click", (e) => {
            deleteRecords()
            let dataSet = +e.target.dataset.number
            multiRoutine[idx].querySelector(".streak").innerText = +multiRoutine[idx].querySelector(".streak").innerText + dataSet
            newRecord()
        })
        x.querySelector(".delete").addEventListener("click",(e)=>{
            console.log(e.target.parentElement)
            deleteRecords()
            e.target.parentElement.remove()
            newRecord()
        })
    })

}

update()

let myArr=[]

function newRecord(){
     let myArr=[]
    let myArrStr=[]
   let multiRoutine = document.querySelectorAll(".routine--row")
   multiRoutine.forEach((x,idx)=>{
   let routineName= x.querySelector(".routine__text").innerText
   let routineValue= x.querySelector(".streak").innerText
   myArr.push({"name":`${routineName}`,"value":routineValue})
   myArrStr=JSON.stringify(myArr)
   myArrStr.replaceAll("[","")
   myArrStr.replaceAll("]","")
   localStorage.setItem("darkside",myArrStr)

    })
}

function deleteRecords() {
    localStorage.removeItem("darkside")
}

let date = new Date()
newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
