$(".go").on("click",function(){
    $('.nave_cab').animate({width:"300px"},1000,function(){
        $("ul").slideDown(500);
    });
    $('.go').css('display','none');
    $('.re').css('display','block');
    $('.nave_cab').css('display','flex');
})
$(".re").on("click",function(){
    $('.nave_cab').animate({width:"0"},1000,function(){
        $('.nave_cab').css('display','none');
    });
    $('.re').css('display','none');
    $('.go').css('display','block');
   
})
$(".sea").on("click",function(){
   

    $('.search').css('display','block');
    $('.nave_cab').animate({width:"0"},1000,function(){
        $('.nave_cab').css('display','none');
        $('.re').css('display','none');
        $('.go').css('display','block');
    });
    $('.inputee').css('display','none');
    // $('.container').css('display','none');
   
})
$(".inp").on("click",function(){
    $('.nave_cab').animate({width:"0"},1000,function(){
        $('.nave_cab').css('display','none');
        $('.re').css('display','none');
        // $('.inputee').css('display','none');
        $('.go').css('display','block');
    });

    $('.inputee').css('display','block');
    $('.container').css('display','none');
    $('.search').css('display','none');
    // $('.dd').css('display','none');
   
   
})

let addElement=[];
let select=document.querySelector("select")
let searc=document.querySelector(".searc");
function change(ur){
    let myelement=new XMLHttpRequest();
    myelement.open("GET",`https://forkify-api.herokuapp.com/api/v2/recipes?search=${ur}`);
    myelement.send();
    myelement.addEventListener("readystatechange",function(){
        if(myelement.readyState==4&&myelement.status==200){
        let add=JSON.parse(myelement.response).data;
        addElement=add.recipes;
        display();
        }
    })
}
change("carrot")
searc.addEventListener("blur",function(e){
    change(e.target.value);

})
function display(){
    let cartona='';
    for(let i=0;i<addElement.length;i++){
        cartona +=`<div class="col-md-3  images">
             <img src="${addElement[i].image_url}"class="w-100" alt="">
             <div class="layer">
             <h1>${addElement[i].publisher}</h1>
             </div>
             </div>`
    }
    document.querySelector("#mydata").innerHTML=cartona;
}

let next=document.querySelector("#mydata")
next.addEventListener("click",function(){
    // getElementById("mydata").style.display = none;
    dis();
   
})
function dis(){
    let cartona="";
    for(let i=0;i<addElement.length;i++){
        cartona +=`<div class="in w-25">
                <img src="${addElement[i].image_url}"class="w-100" alt="">
                <h4>the titel is${addElement[i].title}</h4>
            </div>
            <div class="cs w-50">
                <h2>publisher is:${addElement[i].publisher}</h2>
            </div>`
    }
    document.querySelector("#data").innerHTML=cartona;
}