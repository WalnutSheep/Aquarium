window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtWidth');
	heightObj = document.getElementById('txtHeight');
    costObj = document.getElementById('tdCost');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalcCost').onclick = calcCost;
}

function resetInputs() {
    lengthObj.value = '';
    girthObj.value = '';
    weightObj.innerHTML = '';
}

function calcCost() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || isNaN(width)) {
        alert('Invalid length or width');
        return;
    }
    costObj.innerHTML = length*Math.pow(width,2)/800;
}