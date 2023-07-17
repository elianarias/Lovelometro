//Capturar los valores de los id

const $btnYes= document.querySelector("#btnYes"),
      $btnNo = document.querySelector("#btnNo");

//Escucha de eventos

$btnNo.addEventListener("mouseover",() => {
    
    let x= window.innerWidth, 
        y= window.innerHeight;
    
        let newX = Math.random()*x,
            newY = Math.random()*y;

            $btnNo.style.position= "absolute";
            $btnNo.style.left=newX + "px";
            $btnNo.style.top= newY + "px";

            //si se coloca por fuera de la pantalla nuestra en btnNo, tenemos que redondear el valor math
           /*
            let newX=Math.floor(Math.random()*x)+1,
                newY=Math.floor(Math.random()*y)+1;
 
           */

} );

$btnYes.addEventListener("click",() =>{
 
    let $div = document.createElement("div"),
        $fragment= document.createDocumentFragment();
        
        $div.innerHTML= "<h1>Gracias por decir que SI!!!</h1>";
        $div.style.backgroundColor="#ff99cc";
        $fragment.appendChild($div);
        
        document.querySelector("h1").appendChild($fragment);




} )