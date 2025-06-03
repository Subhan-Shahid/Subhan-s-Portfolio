let bhtml = document.getElementsByClassName('btn')[0]
let bcss = document.getElementsByClassName('btn')[1]
let bjs = document.getElementsByClassName('btn')[2]
let bboot = document.getElementsByClassName('btn')[3]
let styhp = document.getElementsByClassName('card-body-js')[0]
let stycp = document.getElementsByClassName('card-body-js')[1]
let styjsp = document.getElementsByClassName('card-body-js')[2]
let stybp = document.getElementsByClassName('card-body-js')[3]
bhtml.addEventListener('click', function(){
    if(styhp.style.display === "inline-block"){
        styhp.style.display = "none"
    }
    else {
        styhp.style.display = "inline-block";
    }
});
bcss.addEventListener('click', function(){
     if(stycp.style.display === "inline-block"){
        stycp.style.display = "none"
    }
    else {
        stycp.style.display = "inline-block";
    }
})
bjs.addEventListener('click', function(){
    if(styjsp.style.display === "inline-block"){
        styjsp.style.display = "none"
    }
    else {
        styjsp.style.display = "inline-block";
    }
})
bboot.addEventListener('click', function(){
     if(stybp.style.display === "inline-block"){
        stybp.style.display = "none"
    }
    else {
        stybp.style.display = "inline-block";
    }
})
