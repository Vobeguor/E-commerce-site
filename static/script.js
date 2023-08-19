const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav =document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
    
}
if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
    
}



// Get the full name from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const fullname = urlParams.get("fullname");

// Update the DOM to display the full name
if (fullname) {
    const fullNameElement = document.getElementById("fullname");
    if (fullNameElement) {
        fullNameElement.textContent = `Welcome, ${fullname}!`;
    }
}