
//сложение
function pluse() {
	var n1, n2, result;
	
	n1 = document.getElementById('1').value;
	n1 = parseInt(n1);
	
	n2 = document.getElementById('2').value;
	n2 = parseInt(n2);
	
	result = n1 + n2;
	document.getElementById('out').innerHTML = result;
}
//вычетание
function minuse() {
	var n1, n2, result;
	n1 = document.getElementById('1').value;
	n1 = parseInt(n1);
	
	n2 = document.getElementById('2').value;
	n2 = parseInt(n2);
	
	result = n1 - n2;
	document.getElementById('out').innerHTML = result;
}
//умножение
function multiply() {
	var n1, n2, result;
	n1 = document.getElementById('1').value;
	n1 = parseInt(n1);
	
	n2 = document.getElementById('2').value;
	n2 = parseInt(n2);
	
	result = n1 * n2;
	result = result.toFixed(0);
	document.getElementById('out').innerHTML = result;
}
//деление
function divide() {
	var n1, n2, result;
	n1 = document.getElementById('1').value;
	n1 = parseInt(n1);
	
	n2 = document.getElementById('2').value;
	n2 = parseInt(n2);
	
	result = n1 / n2;
	result = result.toFixed(0);
	document.getElementById('out').innerHTML = result;
}


