window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtWidth');
	heightObj = document.getElementById('txtHeight');
    costObj = document.getElementById('tdCost');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btncalcCost').onclick = calcCost;
}


function resetInputs() {
    lengthObj.value = '';
    widthObj.value = '';
	heightObj.value = '';
    costObj.innerHTML = '';
}

function glue () {
	var length = new number (lengthObj.value);
	var width = new number (widthObj.value);
	var height = new number (heightObj.value);
	var cost = 0.1;
	return ((length + width * 2) + (height*4) * cost);
}



function glass () {
	var length = new Number ( lengthObj.value);
	var width = new Number (widthObj.value);
	var height = new Number ( heightObj.value);
	var cost = 0.1;
	return ((length * width) + (height* length *2 )+ (height * width *2)) * cost;
}


function labour () {
	var length = new Number ( lengthObj.value);
	var width = new Number (widthObj.value);
	var height = new Number ( heightObj.value);
	var surfacearea = glass ();
	var labourcost = 60;
	var labourMath = labourCost/6000;
	return surfaceArea * labourMath;
}	


function gst () {
	var length = new Number (lengthObj.value);
	var width = new Number (widthObj.value);
	var height= new Number (heightObj.value);
	return ((labour + glue + glass) *0.01) ;
}


function calcCost() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(widthObj.value);
	var gluecost = glue();
	var labourCost = labour();
	var glassCost = glass();
	var tax = gst();
	
    if(isNaN(length) || isNaN(width)) {
        alert('Invalid length or width');
        return;
    }
	

    costObj.innerHTML = '';
	costObj.innerHTML = gluecost + labour Cost+ glassCost + tax;
}
