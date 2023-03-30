let bar=document.getElementById("scroll");
        window.addEventListener("scroll",function func(){
            let scrollposition=window.scrollY;
            let documentheight=document.documentElement.scrollHeight;
            let windowheight=window.innerHeight;
            var scrollpercentage=scrollposition/(documentheight-windowheight)*100;
            bar.style.width=scrollpercentage+'%';
        });
        