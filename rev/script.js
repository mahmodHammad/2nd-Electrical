const data = [
    {lable:"transfer 1",label:"heat transfer 1", value: { rec: "https://drive.google.com/file/d/1HQNOG0fyPR1_I6P2M8QE0Exzmpk2ULnz/preview", pdf: "https://drive.google.com/file/d/12WVBb7Z8zZGIWDxC0cpPaoFD3X4YJh-q/preview" } },
    {lable:"transfer 2",label:"heat transfer2", value: { rec: "https://drive.google.com/file/d/1VRpK-ywyTwQGZBfZ7cIeN1vXHU57-cKo/preview", pdf: "https://drive.google.com/file/d/1Tt-xoeqQitA3ox6tOYbIoHcyn6F61gwD/preview" } },
    {lable:"engines",label:"engines + Final Exams", value: { rec: "https://drive.google.com/file/d/1okiSimFeYe7cGdXWOaLpnpi-_61mBOdj/preview", pdf: "https://drive.google.com/file/d/1f2BlsCAF9QCAH6z6N9qtsjwE0CK6Zdqi/preview" } },
    {lable:"thermo 1",label:"thermodynamics before Mid Term", value: { rec: "https://drive.google.com/file/d/1-A7mUB8sCja1-vBX74VRuzS8Y82u8Dao/preview", pdf: "https://drive.google.com/file/d/1ewP-uuxdPjK1UnSyhDM4XTkzdbzXpyx7/preview" } }
   , {lable:"thermo 2",label:"thermodynamics after Mid Term", value: { rec: "https://drive.google.com/file/d/14gw6N-nenYMfIa9BPIiRerwLoCuaF8OO/preview", pdf: "https://drive.google.com/file/d/1IeEYvpW-ruuY9wQeP7H49AmKkVK4lR1b/preview" } }
]
const content = document.querySelector('.content')
const footer=document.querySelector(".footer")


function renderbtn(){
    let btns=document.createElement("div")
    btns.className='btns'
    content.appendChild(btns)

    for (const e of data) {
        let btn=createbtn(e.lable,"btn",e.label ,e.value)
        btns.appendChild(btn)
    }
}
renderbtn()

function createbtn(lable, classe ,label,value) {

    let btn = document.createElement("button")
    btn.className = classe
    btn.innerText = lable
    btn.onclick=()=>create(label,value.rec,value.pdf)
    return btn
}

function create(label, recsrc, pdfsrc) {

    
    let scroll = document.createElement("a")
    scroll.className = "scroll"
    scroll.href="#doc"
    scroll.innerHTML="scroll "

    let rev = document.createElement("div")
    rev.className = "rev"

    let hd3 = document.createElement("h3")
    hd3.innerText = label

    let rec = document.createElement("iframe")
    rec.src = recsrc
    rec.className = "record"


    let pdf = document.createElement("iframe")
    pdf.src = pdfsrc
    pdf.attributes.mozallowfullscreen="true";
    pdf.webkitallowfullscreen="true"
    pdf.className = "pdf"
    pdf.id='doc'

    rev.appendChild(scroll)
    rev.appendChild(hd3)
    rev.appendChild(rec)
    rev.appendChild(pdf)

    render(rev)

    return rev
}


let c=0;
let old=0;
function render(child) {
    if(c===0){
        content.appendChild(child)
        old=child
        footer.style.display="block"
    }
    else{
        if(child!==old){
            content.replaceChild(child, old)
            old=child
        }
    }
    c++
}
