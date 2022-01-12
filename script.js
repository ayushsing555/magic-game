const iconlist=["paw","tram","snowboarding","spider","angry","columns","smile","paperclip","ghost","clipboard",
  "square","fan","compass","cog","certificate","sync","sun","highlighter","clone","table","icons","screwdriver",
   "fish","egg","cheese","bone","cookie","carrot","futbol","brain","car","ambulance","bicycle","helicopter","bus","plane"];
    var a=iconlist[Math.floor(Math.random()*iconlist.length)];
    var li;
    for(var i=0;i<=99;i++)
    {
        if(i%9==0){
        li=document.getElementsByTagName("li")[i];
        li.innerHTML=`${i}   <i class="fas fa-${a}"></i>`;
        }
        else{
         li=document.getElementsByTagName("li")[i];
        li.innerHTML=`${i}   <i class="fas fa-${iconlist[Math.floor(Math.random()*iconlist.length)]}"></i>`
        }
    }

    var sum=0
  const firststep=()=>{
          document.getElementsByTagName("b")[0].innerHTML="Think of a number with two digits.for example 43."
          sum++;
          document.getElementById("btn").innerHTML="NEXT";
  }
  const secondstep=()=>{
      document.getElementsByTagName("b")[0].innerHTML="now add its digits.for example 4+3=7."
       sum++;
  }
  const thirdstep=()=>{
      document.getElementsByTagName("b")[0].innerHTML="Next,subtract the new number from your original number.for example 43-7=36."
      sum++;
    }
  const fourthstep=()=>{
      document.getElementsByTagName("b")[0].innerHTML="Finally,look at the symbol next to your number.Remember it.."
      sum++;
    }
    const finalstep=()=>{
        document.getElementsByClassName("contain")[0].style.display="flex"
        document.getElementsByClassName("box")[0].style.display="none"
        sum++;
    }
      const magic=()=>{
      var b=document.getElementsByTagName("li")[0].innerHTML;
      var img=b.slice(21,-6);
      document.getElementById("magic").innerHTML= `<i id="answer"class="fas fa-${img}" style="font-size: 300px; color:rgb(61, 241, 172);;"></i>`;
      document.getElementsByClassName("contain")[0].style.display="none";
      document.getElementsByClassName("box")[0].style.display="block";
    }
    btn.addEventListener("click",()=>{
       if(sum==0)
         firststep();
        else if(sum==1)
          secondstep();
        else if(sum==2)
          thirdstep();
        else if(sum==3)
          fourthstep();
        else if(sum==4)
          finalstep();
        else
          location.href="index.html";
    });
    btn1.addEventListener("click",()=>{
            magic();
         });
