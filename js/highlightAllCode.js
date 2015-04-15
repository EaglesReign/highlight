var languages = {
  javascript: /\b(function|return|var|while|if)\b/g /* ... etc */               
};  

function highlightAllCode() {                                                   
  var pres = document.body.getElementsByTagName("pre");                         
  for (var i = 0; i < pres.length; i++) {                                       
    var pre = pres[i];                                                          
    var lang = pre.getAttribute("data-language");                               
    var name = pre.getAttribute("class-proof");                                 
    console.log("Name is " + name);                                             
    if (languages.hasOwnProperty(lang))                                         
      highlightCode(pre, languages[lang]);                                      
  }                                                                             
}  
