const now = new Date();
console.log(now.getHours());

const interval = setInterval(()=>{
    const now = new Date();
    console.log(now.getHours());
    if(now.getHours() === 12 && now.getMinutes() === 42){
        console.log("It's lunch time");
        clearInterval(interval);
    }
}, 1000)