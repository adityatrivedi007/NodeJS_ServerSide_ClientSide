console.log('script.js loaded');
getRandomNames();

async function getRandomNames(){
    const response = await fetch('/Random');
    const data = await response.json();
    console.log(data);
}