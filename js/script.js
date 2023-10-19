 
const two = document.getElementById("two")
const tab2 = document.getElementById("second")
const tog = document.getElementById("defaultOpen")
const tab = document.getElementById("first")
const tab3 = document.getElementById("third")
const three = document.getElementById("three")
document.getElementById("defaultOpen").click();
tog.addEventListener('click', ()=>{
if(tab.style.display=== 'none'){
    tab.style.display = 'flex'
    tab3.style.display = "none"
    tab2.style.display ="none"
}
else{
    tab.style.display = 'flex'
}
})

two.addEventListener("click", ()=>{
    if(tab2.style.display === "none"){
        tab2.style.display = "flex"
        tab3.style.display = "none"
        tab.style.display = "none"
    }else{
        tab2.style.display = "none"
    }
})
three.addEventListener("click", ()=>{
    if(tab3.style.display === "none"){
        tab3.style.display = "flex"
        tab.style.display = "none"
        tab2.style.display = "none"
    }else{
        third.style.display = "none"
    }
})

const acc = document.getElementById("ac");
const txt1 = document.getElementById("txt1")
acc.addEventListener("click", ()=>{
    if(txt1.style.display === "none" || txt1.style.display === " "){
        txt1.style.display = "flex"
    }else{
        txt1.style.display = "none"
    }
})
const nd = document.getElementById("acc");
const txt2 = document.getElementById("txt2")
nd.addEventListener("click", ()=>{
    if(txt2.style.display === "none" || txt2.style.display === " "){
        txt2.style.display = "flex"
    }else{
        txt2.style.display = "none"
    }
})
const rd = document.getElementById("accc");
const txt3 = document.getElementById("txt3")
rd.addEventListener("click", ()=>{
    if(txt3.style.display === "none" || txt3.style.display === " "){
        txt3.style.display = "flex"
    }else{
        txt3.style.display = "none"
    }
})
const th = document.getElementById("acccc");
const txt4 = document.getElementById("txt4")
th.addEventListener("click", ()=>{
    if(txt4.style.display === "none" || txt4.style.display === " "){
        txt4.style.display = "flex"
    }else{
        txt4.style.display = "none"
    }
})
const menu = document.getElementById("menu")
const links = document.getElementById("newlist")
menu.addEventListener("click", ()=>{
    if(links.style.display === "none"){
        links.style.display = "flex"
    }else{
        links.style.display = "none"
    }
})