// find maximum between two numbers
function maxnum() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
var num1 = parseInt(a);
var num2 = parseInt(b);
    if (num1>num2) {
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = num1+" " +"is the greater number"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main').appendChild(newDiv)
} else {
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = num2+" " +"is the greater number"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main').appendChild(newDiv)
}
}



// find maximum between three numbers
function max() {
var nu1 = parseInt(document.getElementById("nu1").value);
var nu2 = parseInt(document.getElementById("nu2").value);
var nu3 = parseInt(document.getElementById("nu3").value);
if(nu1>nu2 && nu1>nu3){
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = nu1+" " +"is the greater number"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main1').appendChild(newDiv)
}
if( nu2>nu1 && nu2>nu3){
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = nu2 +" "+"is the greater number"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main1').appendChild(newDiv)
}
else if(nu3>nu1 && nu3>nu2){
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = nu3+" " +"is the greater number"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main1').appendChild(newDiv)
}
}


// number is negative positive or zero
function che() {
var number = parseInt(document.getElementById("number").value)
if(number>0){
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = number +" "+"The number is positive"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main2').appendChild(newDiv)
}
if(number<0){
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = number +" "+"The number is negative"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main2').appendChild(newDiv)
}
else{
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = number +" "+"The number is zero"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main2').appendChild(newDiv)
}
}


// The number is dividable with 5&11 or not
function div() {
var numb = parseInt(document.getElementById("numb").value);
if(numb%5===0){
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText ="The number is divideable with 5"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main3').appendChild(newDiv)
}
else if(numb%11===0){
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = "The number is divideable with 11"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main3').appendChild(newDiv)
}
else{
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = "The number is  not divideable with 5 or 11"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main3').appendChild(newDiv)
}
}


// The number is even or odd
function even() {
    var even = parseInt(document.getElementById("even").value);
    if(even%2===0){
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
       
        newDiv.innerText = "The number is even"
        let input =document.getElementsByTagName("input");
        
    
        document.getElementById('main4').appendChild(newDiv)
    }
    else{
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
       
        newDiv.innerText = "The number is odd"
        let input =document.getElementsByTagName("input");
        
    
        document.getElementById('main4').appendChild(newDiv)
    }

}

// check the year is leaf or not
function leaf() {
var date = document.getElementById("date").value;
if (date%4===0) {
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = "This is a leaf year and it has 366 days"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main5').appendChild(newDiv)
} else {
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = "This is not a leaf year and it has 365 days"
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main5').appendChild(newDiv)
}
}
// check the letter is alphabit or not


// check length of string
function length() {
    var length = document.getElementById("length").value;
    var len = length.length
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = "This length of the string is"+" "+len
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main7').appendChild(newDiv)
}

// write a js program to copy one string to another
function copy() {
    var copy = document.getElementById("copy").value;
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText =copy
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main8').appendChild(newDiv)
}


// concate two strings
function concate() {
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = string1+string2
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main9').appendChild(newDiv)
}


// compare two string
function compare() {
    var string3 = document.getElementById("string3").value;
    var string4 = document.getElementById("string4").value;
    if (string3=string4) {
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
       
        newDiv.innerText = "After comparing these strings are equal"
        let input =document.getElementsByTagName("input");
        
    
        document.getElementById('main10').appendChild(newDiv)
    } else {
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
       
        newDiv.innerText = "After comparing these strings are not    equal"
        let input =document.getElementsByTagName("input");
        
    
        document.getElementById('main10').appendChild(newDiv)
    }
}

function rever() {
    var rashid = document.getElementById("reverse").value;
    // var ras = reverse(rashid);
    alert(reverse(rashid));


}

function pri() {
   var a =["Rashid","Ishfaq","Ramzan","Adnan","Ali","Adnan","Sami","Sharjeel","Sahzam","Ali Rehman"] 
   let newDiv = document.createElement('div');
   newDiv.className = "new-div";
   newDiv.style.backgroundColor = "yellow";
   newDiv.style.fontSize = "40px";
  
   newDiv.innerText = a;
   let input =document.getElementsByTagName("input");
   

   document.getElementById('main13').appendChild(newDiv)
}

function neg() {
    var c =[1,2,-3,4,-5,6,-7,-8,9,-1]
    for (let a = 0; a < c.length; a++) {
        const element = c[a];
        if (element<0) {
            let newDiv = document.createElement('div');
            newDiv.className = "new-div";
            newDiv.style.backgroundColor = "yellow";
            newDiv.style.fontSize = "40px";
           
            newDiv.innerText = element;
            let input =document.getElementsByTagName("input");
            
         
            document.getElementById('main14').appendChild(newDiv)        
        } else {
            let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = "Not a negative number";
    let input =document.getElementsByTagName("input");
    
 
    document.getElementById('main14').appendChild(newDiv)
        }
        
    }
}

function abc() {
    var f =[1,2,-3,4,-5,6,-7,-8,9,-1]
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = f.splice(2,5,25)
    let input =document.getElementsByTagName("input");
    
 
    document.getElementById('main15').appendChild(newDiv)


}

// round off
function roun(){
var roun = document.getElementById("round").value;
var ro = roun.slice(0,1)
var rr = roun.slice(2,3)
var oo = roun.slice(3,4)
if(oo>=5){
    var ra =parseInt(rr) + 1
}
else{
    var ra = rr
}
let newDiv = document.createElement('div');
newDiv.className = "new-div";
newDiv.style.backgroundColor = "yellow";
newDiv.style.fontSize = "40px";

newDiv.innerText = ro+"."+ra
let input =document.getElementsByTagName("input");


document.getElementById('main16').appendChild(newDiv)

}


// ceil off

function hel(){
    var roun = document.getElementById("hel").value;
    var ro = roun.slice(0,1)
    var rr = roun.slice(2,3)
    var oo = roun.slice(3,4)
     var ra =parseInt(rr) + 1
    
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    
    newDiv.innerText = ro+"."+ra
    let input =document.getElementsByTagName("input");
    
    
    document.getElementById('main17').appendChild(newDiv)
    
    }




    function hy(){
        var roun = document.getElementById("hy").value;
        var ro = roun.slice(0,1)
        var rr = roun.slice(2,3)
        var oo = roun.slice(3,4)
       
            var ra =parseInt(rr) - 1
       
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        
        newDiv.innerText = ro+"."+ra
        let input =document.getElementsByTagName("input");
        
        
        document.getElementById('main18').appendChild(newDiv)
        
        }




        // print all alphabits using loop
        function per() {
         var pri = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
         for (let i = 0; i < pri.length; i++) {
            
             const pear = pri[i];
             console.log(pear);   
             let newDiv = document.createElement('div');
                newDiv.className = "new-div";
                newDiv.style.backgroundColor = "yellow";
                newDiv.style.fontSize = "40px";
                
                newDiv.innerText =pear;
                let input =document.getElementsByTagName("input");
                
                
                document.getElementById('main19').appendChild(newDiv)
                
                }
         }   


        //  even numbers between 1-100
        function red() {
            var pi = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
            for (let i = 0; i < pi.length; i++) {
               
                const pr = pi[i];
                if(pr%2===0){
                    var hh = pr;
                }
                else{
                var hh = " "
                }
                let newDiv = document.createElement('div');
                newDiv.className = "new-div";
                newDiv.style.backgroundColor = "yellow";
                newDiv.style.fontSize = "40px";
                
                newDiv.innerText =hh;
                let input =document.getElementsByTagName("input");
                
                
                document.getElementById('main20').appendChild(newDiv)
                // console.log(hh);   
                
                   
                   }
            }   


             //  odd numbers between 1-100
        function pink() {
            var pi = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
            for (let i = 0; i < pi.length; i++) {
               
                const pr = pi[i];
                if(pr%2!==0){
                    var hh = pr;
                }
                else{
                var hh = " "
                }
                let newDiv = document.createElement('div');
                newDiv.className = "new-div";
                newDiv.style.backgroundColor = "yellow";
                newDiv.style.fontSize = "40px";
                
                newDiv.innerText =hh;
                let input =document.getElementsByTagName("input");
                
                
                document.getElementById('main21').appendChild(newDiv)
                // console.log(hh);   
                
                   
                   }
                }



                // all natural numbers
        function na() {
            var pi = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,"...n"];
            for (let i = 0; i < pi.length; i++) {
               
                const pr = pi[i];
               
                let newDiv = document.createElement('div');
                newDiv.className = "new-div";
                newDiv.style.backgroundColor = "yellow";
                newDiv.style.fontSize = "40px";
                
                newDiv.innerText =pr;
                let input =document.getElementsByTagName("input");
                
                
                document.getElementById('main22').appendChild(newDiv)
                // console.log(hh);   
                
                   
                   }
                }





                // VERY PROBLEM FACING PROGRAMS
    // check alphabit
    function alp() {
        var ac = document.getElementById("alp").value;
        var as = ["a","e","o","i","u"];
   if (as[0]=ac) {
       var hhh = parseInt(1)
   }
   if (as[1]=ac) {
    var hhh = parseInt(1)
}
if (as[2]=ac) {
    var hhh = parseInt(1)
}
if (as[3]=ac) {
    var hhh = parseInt(1)
}
if (as[4]=ac) {
    var hhh = parseInt(1)
}
   else {
       var aaa = parseInt(1)
   }
   let newDiv = document.createElement('div');
   newDiv.className = "new-div";
   newDiv.style.backgroundColor = "yellow";
   newDiv.style.fontSize = "40px";
   
   newDiv.innerText ="There are "+hhh+"Vowels and"+aaa+"consonents";
   let input =document.getElementsByTagName("input");
   
   
   document.getElementById('main23').appendChild(newDiv)
    }



    // lower to upper case
    function upper() {
        var think = document.getElementById("upper").value;
    var thought = think.toUpperCase()
    
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    
    newDiv.innerText =thought;
    let input =document.getElementsByTagName("input");
    
    
    document.getElementById('main24').appendChild(newDiv)
    }


      // upper to lower case
      function lower() {
        var think = document.getElementById("upper").value;
    var thought = think.toLowerCase()
    
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    
    newDiv.innerText =thought;
    let input =document.getElementsByTagName("input");
    
    
    document.getElementById('main25').appendChild(newDiv)
    }



    // max and min
   
    function mi() {
        var z =[1,2,-3,4,-5,6,-7,-8,9,-1];     
        var a =z.min()
    }
    function ma() {
        var z =[1,2,-3,4,-5,6,-7,-8,9,-1];
       var b=z.max()
    }
