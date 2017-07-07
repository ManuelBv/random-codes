//docs for this console.log with CSS stuff - https://developer.mozilla.org/en-US/docs/Web/API/console#Outputting_text_to_the_console

let spacing = " ";
let timeStep = 33;
let runs = 150;

function for1(){
for (let i = 1; i < runs; i++) {
    setTimeout(function(){  
		console.clear();
        console.log("%s%c%s",spacing,"color: #0ff;background: #00f;padding: 3px;","[Mike]")      
        spacing += " ";
        }, timeStep*i); 
}
};



function for2(){
for (let j = 1; j < runs; j++) {
    setTimeout(function(){  
		console.clear();
        console.log("%s%c%s",spacing,"color: #0ff;background: #00f;padding: 3px;","[Mike]")      
        spacing = spacing.substring(0, spacing.length - 1);
        }, timeStep*j); 
}
};

for1();
setTimeout(for2,timeStep * runs);

