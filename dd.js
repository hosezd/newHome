var y= "Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0".split("|").join(",").split("*").join(",").split(",")
var a = new Array();
var b = new Array();
var c = new Array();
var cold = new Array();
var mod = new Array();
var hot = new Array();
var j=0;
for (let i=0;i<=y.length;i+=2){
    a.push(c[i]);
    b.push(c[i+1]);
}

function used(y){
    return ((y-32)*(5/9));
}

for (let i=0;i<y.length-1;i++){
    c.push(used(a[i]))
    c.push(b[i])
}

for (let i=0;i<a.length-1;i+=2){
    if(c[i]<=20){
        cold.push(c[i+1]);
        cold.push(c[i]);
    }
    else if(a[i]<=30){
        mod.push(c[i+1]);
        mod.push(c[i]);
    }
    
    else 
     (c[i]>30)
        hot.push(c[i+1]);
        hot.push(c[i]);
      
    }

    console.log("Cold");
    for (let i=0;i<=cold.length-1;i+=2){
        console.log(cold[i]);
    }
    console.log("Moderate");
    for (let i=0;i<=mod.length-1;i+=2){
        console.log(cold[i]);
    }
    console.log("Hot");
    for (let i=0;i<=hot.length-1;i+=2){
        console.log(cold[i]);
    }