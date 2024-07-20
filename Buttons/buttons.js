var count = 0;
function myfunction(x) {
	var x;
	
    	if(x == 1){
    		count = count+1;
    		console.log(count)
    	}

    	if(count == 1){
    		document.getElementById("change").style.background = 'blue';
    	}
    	else if(count == 2){
    		document.getElementById("change").style.background = 'yellow';
    		count = 0;
    	}
  
}

function myfunction() {
	var x;
	var a = 'blue';
	var b = 'yellow';
    	document.getElementById("change").style.background = b;
    
}
myfunction();

function myfunction1() {
	
	var a = 'blue';
	
    	document.getElementById("change").style.background = a;
    
    
}
myfunction1();