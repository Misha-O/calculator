
let operator = null;
let firstInput = null;
let waitingSecondInput = false;

// grabs input and sets value based on clicked number
let input = document.querySelector('input')
//when num clicked get number
function setInput(num){
	input.value += num;
}


//if not + or - keep number value in firstInput - > waitingSecondInput becomes true
function setOperator(op){  
	if( (op == '+' || op == '-' || op == '*' || op == '/') && firstInput===null){
		firstInput = Number(input.value);
		waitingSecondInput = true;
		operator = op;
    //ce resets all variables and clears input field
	}else if(op == 'CE'){
		firstInput = null;
    waitingSecondInput = false;
    operator = null;
    input.value = ''
	}else{
		waitingSecondInput = true;
		if (operator === '+') {
			input.value = +firstInput + +input.value
      firstInput = input.value
		} else if (operator === '-') {
			input.value = firstInput - Number(input.value)
		}
    else if (operator === '*') {
			input.value = firstInput * Number(input.value)
		}
    else if (operator === '/') {
			input.value = firstInput / Number(input.value)
		}
	}
}
//set global function to check if second number clicked
function check(){
	if(waitingSecondInput){
		input.value = '';
		waitingSecondInput = false;
	}
}


//runs onclick btn function, checks if second number clicked, then if num -> inputs; if operator - > inputs
let btns = document.querySelectorAll('button');
btns.forEach(btn=>{
	btn.onclick = function(){
		check();
		if( !isNaN(this.innerText) ){
			setInput(this.innerText);
		}else{
			setOperator(this.innerText)
		}
	}
})

document.querySelector('#backspace').onclick = function(){
  let current  = input.value;
  input.value = current.substring(0,current.length-1)
}
