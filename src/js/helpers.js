
/*
 * Helpers & Debugers
 * 
 */


/* Enable/Disable console.log outputs */
var DEBUG = false;
if(process.env.NODE_ENV == "development") {
  var DEBUG = true;
}
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
} else {

};

/* Check if javascript is enabled */
document.documentElement.className = "";
document.documentElement.className = "js";
/* Helper comment */