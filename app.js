 // console.log("I'm from navigate function")//
   //var ruth = "hello";  --is more compatible with IE
   
   //let ruth = "hello";   let initialises a variable,
   // allows for the variable to be changed, and you can overwrite values.
   
   //const ruth = "hello";  a constant value means that you cannot reassign//
   
function navigate(){
    const viewerBtn = document.getElementById('viewerBtn');
    const editorBtn = document.getElementById('editorBtn');
  
    viewerBtn.addEventListener('click',function(){
        window.location.href= "./viewer.html";
    });

    editorBtn.addEventListener ('click',function(){
        window.location.href="./editor.html"
    });
};

navigate();