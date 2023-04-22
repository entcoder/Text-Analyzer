console.log("script added");
uppercase.addEventListener("click",()=>{

    console.log("text transforming");
    inpText.value=inpText.value.toUpperCase();


})
lowercase.addEventListener("click",()=>{

    console.log("text transforming");
    inpText.value=inpText.value.toLowerCase();
})

inpText.addEventListener("input",()=>{

    console.log("text changed");
    charcount.innerText = inpText.value.length
    wordcount.innerText = inpText.value.trim().split(" ").length
   
})
removespaces.addEventListener("click",()=>{

    console.log("removing spaces");
    inpText.value=inpText.value.replace(/\s+/g,' ').trim();
})