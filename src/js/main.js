console.log('loaded main.js');
import regeneratorRuntime from "regenerator-runtime";

// OTHER
import './helpers'; // Toggle Console/Debug ON/OFF


/**
 *  DYNAMIC LOADING MODULES (Lazyload)
 */

let hasLazyload = document.querySelector('.lazyload');
if(hasLazyload) {
  (async () => {
    const lazyload = await import('./lazysizes.min');
  })();
}