function addNumbers(){
    let a,b;
    a=2;
    b=4;
    let c=a+b;
    return "Sum= " + c;
}
function subtractNumbers(){
    let a,b;
    a=4;
    b=2;
    let c=a-b;
    return "Differentiation = " +c;
}
function divideNumbers(){
    let a,b;
    a=2;
    b=4;
    let c=b/a;
    let d=b%a;
    return "Quotient= "+ c + " Remainder= "+d;
}
function multiplyNumbers(){
    let a,b;
    a=2;
    b=4;
    let c=a*b;
    return c;
}
function changeContent(){
    document.getElementById('content').innerText='Penguins can stay underwater for 10-15 minutes'
}
function changeColor(){
    document.getElementById('g').style.background='beige'
}
function changePic(){
    document.getElementById('change').src='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F59%2F22%2Ffb%2F5922fb9284828d8c375717d9e7d74967.jpg&f=1&nofb=1&ipt=4b6fdee743fec1da4aa6ece424dc518280825e445c4a49aac76b0acf9e4f62f4';
}

function showParagraph(){
    document.getElementById('show').style.display='block'
    document.getElementById('i').innerHTML='End'
}
function hideParagraph(){
    var x = document.getElementById('hide')
    if (x.style.display==='block' || x.style.display===''){
        x.style.display='none';
        document.getElementById('j').innerHTML='Show';
    }else{
        x.style.display='block';
        document.getElementById('j').innerHTML='Hide';
    }
}