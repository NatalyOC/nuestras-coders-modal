var selectPromo = document.getElementById('select-promo');
var imagesContainer = document.getElementById('images-container');
var subImagesContainer=null;

selectPromo.addEventListener('change',showPromo);
imagesContainer.addEventListener('click',showModal);

    // arrays de las promociones: alumnas
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

var CHILE4='4-chile';
var LIMA5='5-lima';
var LIMA6='6-lima';

function showCoders(arr,promo){
    if(subImagesContainer)
        imagesContainer.removeChild(subImagesContainer);

        subImagesContainer=document.createElement('div');
        imagesContainer.appendChild(subImagesContainer);

    for(var i=0; i< arr.length; i++)
        createImage(promo, arr[i]);
}

function createImage(promo,name){

    var img=document.createElement('img');//
    //img.setAttribute('src','assets/images/4-chile/anais-araya.jpg');
    img.setAttribute('src','assets/images/' + promo + '/' + name + '.jpg');
    subImagesContainer.appendChild(img);
}

function showPromo(event){
    switch(true){
        case event.target.value==='4chile':
            //imagesContainer.textContent='';
            showCoders(arr4Chile,CHILE4);
            break;
        case event.target.value==='5lima':
            //imagesContainer.textContent='';    
            showCoders(arr5Lima,LIMA5);
            break;
        case event.target.value==='6lima':
            //imagesContainer.textContent='';    
            showCoders(arr6Lima,LIMA6);
            break;
        default:
            showCoders(arr4Chile,CHILE4);
            showCoders(arr5Lima,LIMA5);
            showCoders(arr6Lima,LIMA6);
    }

}

function showModal(event){
 //console.log(event.target);
 var modal= document.createElement('div');
 modal.style.position='fixed';
 modal.style.background='rgba(0,0,0, 0.7)';
 modal.style.top='0';
 modal.style.left='0';
 modal.style.width='100%';
 modal.style.height='100%';
 modal.appendChild(event.target);
 event.target.style.margin= window.innerHeight/4 + 'px auto';
 event.target.style.display='block';
 document.body.appendChild(modal);
 modal.addEventListener('click',function(event){
    // event.target.parentElement.removeChild(event.target);}
    event.target.parentElement.removeChild(event.target);
 })
}

/* showCoders(arr5Lima,LIMA5);
showCoders(arr6Lima,LIMA6); */