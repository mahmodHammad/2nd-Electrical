const data = [
    {label:"heat tran1", value: { rec: "https://drive.google.com/file/d/1VRpK-ywyTwQGZBfZ7cIeN1vXHU57-cKo/preview", pdf: "https://drive.google.com/file/d/1Tt-xoeqQitA3ox6tOYbIoHcyn6F61gwD/preview" } },
    {label:"engines", value: { rec: "", pdf: "" } },
    {label:"thermo", value: { rec: "", pdf: "" } }
]
let content = document.querySelector('.content')


function renderbtn(){
    console.log(data[0].value)
    let btn=createbtn("HeatTransFerr1","btn",data[0].label ,data[0].value)
    content.appendChild(btn)
}
// setTimeout(renderbtn,500 )
renderbtn()

function createbtn(lable, classe ,label,value) {

    let btn = document.createElement("button")
    btn.className = classe
    btn.innerText = lable
    btn.onclick=()=>create(label,value.rec,value.pdf)
    console.log(btn)
    return btn
}

function create(label, recsrc, pdfsrc) {
    let rev = document.createElement("div")
    rev.className = "rev"

    let hd3 = document.createElement("h3")
    hd3.innerText = label

    let rec = document.createElement("iframe")
    rec.src = recsrc
    rec.className = "record"

    let pdf = document.createElement("iframe")
    pdf.src = pdfsrc
    pdf.className = "pdf"

    rev.appendChild(hd3)
    rev.appendChild(rec)
    rev.appendChild(pdf)
    render(rev)

    return rev
}

// document.replaceChild(new, old)

function render(child) {
    // let btn = createbtn("Heat Rev1 ", "btn btn-danger")
    // content.appendChild(btn)
    // let rev = create("heat transfer 1", "https://drive.google.com/file/d/1VRpK-ywyTwQGZBfZ7cIeN1vXHU57-cKo/preview", "https://drive.google.com/file/d/1Tt-xoeqQitA3ox6tOYbIoHcyn6F61gwD/preview")
    content.appendChild(child)

}

console.log(content)