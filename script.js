let input=document.getElementById('inputbox');

let str="";

let allbtn=Array.from(document.getElementsByClassName('button'));
if(str.length===0)
    {
        input.value='0';
    }
allbtn.map((i)=>{
    i.addEventListener('click',(e)=>{

           

         if(e.target.innerHTML==='=')
            {
                   input.value=eval(str);
            }
         else if(e.target.innerHTML=='C')
            {
                str='';
                input.value='0';
            }

            else if(e.target.innerHTML=='DEL')
                {
                    str=str.slice(0,str.length-1);
                    input.value=str;
                }


            else{
                str+=e.target.innerHTML;
                input.value=str;
            }

           
        
    })
})