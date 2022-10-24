// let i = 0;

// do {
//     i++;
//     console.log(i);
// }
// while (i < 10 );

let x = "&#9728;";
let rows = 20;
let stand = 3;
let text = document.getElementById('sample');
likod.style.backgroundColor = "rgb(184 135 245 )";
likod.style.fontFamily = "impact";
sunko.style.color = "yellow";
text.style.color = "white";
text.style.fontWeight = "bold";
text.style.fontSize = "14px";
text.style.letterSpacing = "5px";
text.style.borderRadius = "3px";
divko.style.borderColor = "black";
divko.style.borderStyle = "solid";
divko.style.padding = "15px";
christmasword.style.color = "red";
christmasword.style.fontSize = "30px";


function xmas_Tree(){
    for (let i = 1; i <= rows ; i++){  
        for (let j = 0; j <= i ; j++)
        {
            document.getElementById("sample").innerHTML += "<" ;
            document.getElementById("sample").innerHTML += x ;
            document.getElementById("sample").innerHTML += ">" ;
        }
        document.getElementById("sample").innerHTML += "<br>" ;   
    }
    for (let a = 0; a <= stand ; a++){
        document.getElementById("sample").innerHTML += "<|>" + "<|>";
    }
}
setTimeout(xmas_Tree,1000);

function colorko(){
    let word = "MERRY CHRISTMAS !";

    // let color = ["skyblue", "green", "lightpink", "yellow"];
    // let generateColor = Math.floor(Math.random() * color.length);
    // text.style.color = color[generateColor];
    let cr = Math.floor(Math.random() * 255) ; 
    let cg = Math.floor(Math.random() * 255) ; 
    let cb = Math.floor(Math.random() * 255) ; 
    let displayrgb = "rgb("+ cr + "," + cg + "," + cb +")";
    sample.style.color = displayrgb;
    document.getElementById("rgb").innerHTML = displayrgb;
    console.log(displayrgb);
    document.getElementById("christmasword").innerHTML = word;
}

function start(){
    start_color = setInterval(colorko, 300);
};
function stop(){
    clearInterval(start_color);
};




    






    

