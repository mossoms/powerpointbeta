function navigateSlides(){
    const leftBtn =document.getElementById("btn-Left");
    const rightBtn = document.getElementById("btn-Right");
    const homeBtn = document.getElementById("btn-Home")

    const slide0 = document.getElementById('slide0');
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');

    const slides =[slide0,slide1,slide2];

    let i        = 0;

        leftBtn.addEventListener('click',function(){
            if(i===0){
                i =2;
                slides[2].style.display='block';
                slides[0].style.display='none';
                slides[1].style.display='none';
                return;
            }
            i -=1;
            slides[i+1].style.display='none';
            slides[i].style.display='block';
            
        });

        rightBtn.addEventListener('click',function(){
            if(i===2){
                i=0;
                slides[0].style.display='block';
                slides[1].style.display='none';
                slides[2].style.display='none';
                return;
            }
            i +=1;
            slides [i-1].style.display ='none';
            slides[i].style.display = 'block';
            
        });

        homeBtn.addEventListener('click',function(){
            window.location.href="./index.html";
   
       });
    
}

navigateSlides();