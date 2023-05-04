let pageSwap = document.querySelector('#pageSwap');
let countTop = document.querySelector('.top_count');
pageSwap.addEventListener("click", PageSwapper, false)
let valCountTop = countTop.innerHTML.replace('0', '');
console.log('1st====', valCountTop)
function PageSwapper() {
  // let countBot = document.querySelector('.bot_count');
  // let scrollBar = document.querySelector('#one');
  // let arrow = document.querySelector('.arrow');
  countTop = document.querySelector('.top_count');
  valCountTop = countTop.innerHTML.replace('0', '');
  console.log('====', valCountTop)
  if (valCountTop >= 1 && valCountTop <= 5) {
    countTop.innerHTML = '0' + (++countTop.innerHTML)
    console.log('------------------',valCountTop)
    if (valCountTop == 1) {
      document.querySelector("#dyn-title").innerHTML = 'Lorem ipsum!'
      document.querySelector('#dyn-text').innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`
      document.querySelector('#num').innerHTML = "0" + ++document.querySelector('#num').innerHTML;
      console.log('>>>>>>>>>>',valCountTop)
      
      }if (valCountTop == 2) {
        document.querySelector('#dyn-text').innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`;
        document.querySelector('#dyn-text').style.height = '200px';
        // document.querySelector('#dyn-text').style.overflow = 'auto';
        document.querySelector('#num').innerHTML = "0" + ++document.querySelector('#num').innerHTML;
    
    } 
  }

}