const yes=document.getElementById("yes");
const no=document.getElementById("no");
const gif=document.getElementById("gif");
gif.classList.add("hidden");
yes.addEventListener("click",()=>{
    alert("Bubu:OMG, I'm on my way! 😍 ");
    gif.classList.remove("hidden");

});
no.addEventListener("click",()=>{
    alert("Bubu:He didn't text, so I'm not coming! 😤");
    gif.classList.add("hidden");

})
