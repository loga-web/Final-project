let menu = document.querySelector("#menubar")
let mynav = document.querySelector(".navbar")

let myuser = document.querySelector("#user")
let myform = document.querySelector(".search-form")


let mysearch = document.querySelector("#search")
let mysearchform = document.querySelector(".searchbar")

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
myuser.onclick = () =>{
    myform.classList.toggle('active');
}

mysearch.onclick = () =>{
    mysearchform.classList.toggle('active');
}

const counters= document.querySelectorAll('.counter')
const speed=200;
counters.forEach(counter => {
const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target/speed;

    if(count<target)
    {
        counter.innerText=count+inc;
        setTimeout(updateCount, 1);
    }
    else{
count.innerText=target;
    }
    
}
updateCount();
});
