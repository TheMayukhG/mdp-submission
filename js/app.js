// This is the js file for functionality of whole website

  window.scroll(0,1px);

console.log("included");

// consts
const header = document.querySelector('#header');
const htext = document.querySelector('ul');
const scrldwn = document.querySelector('#scrollDown');
const burger = document.querySelector('#hamburger');

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY >= 221) {
    header.classList.add('head-scrolled');
    header.classList.remove('head-not-scrolled');

    // waves.style.display = "hidden"
    const waves = document.getElementById('vanta-rings');
    
    // waves.style.opacity = "80%";
    // waves.style.position = "fixed";
    // waves.style.top =0
    // waves.style.height = `${100}vh`;
    // waves.style.width = `${100}vw`;
    // console.log(waves);
    console.log(waves);
    
  } else if (window.scrollY < 221) {

    header.classList.remove("head-scrolled");
    console.log(document.querySelector("#scrldwn"))
    header.classList.add("head-not-scrolled");
      scrldwn.innerHTML = `
      <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
      `
      const waves = document.getElementById('vanta-rings');
    
      // waves.style.opacity = 0;
      // waves.style.position = 'relative';
      
      
      
      
  }
});
// document.getElementById('vanta-rings').style.top = "120vh"
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 400) {

    // waves.style.display = "hidden"
    const waves = document.getElementById('vanta-rings');
    
    waves.style.opacity = "80%";
    waves.style.display = "block";
    // waves.style.top = 0;
    console.log(waves);
    
  } else if (window.scrollY < 399) {

    
      const waves = document.getElementById('vanta-rings');
    
      waves.style.opacity = 0;
      setTimeout(() => {
        
        waves.style.display = "none";
      }, 500);
      
      
      
      
      
  }
});

// window.addEventListener("scroll",()=>{
//   if (window.scrollY>= 794){
//     const waves = document.getElementById('vanta-rings');
//     waves.style.position = fixed;
//     waves.style.top = 0;
//   }
// })


// hamburger menu


var dropdown = document.querySelector("#dropdown");

var hamburger = document.querySelector("#hamburger");
c = 1;
hamburger.addEventListener("click", () => {
  // console.log("hamclicked")
  c++;
  if(c % 2 == 0) {
    dropdown.style.height = `${60}px`
} else {
  dropdown.style.height = `${0}px`
  }
})
  // const number = prompt("Enter a number: ");
  
  //check if the number is even
  
//   if(c % 2 == 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
//   }
//   console.log(c);
