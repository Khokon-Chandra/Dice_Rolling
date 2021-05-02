
function createDice(){
	const diceContainer = document.querySelector(".dice");
	diceContainer.insertAdjacentHTML("beforeend",`<div class="dice-row"><span class="dice-col"></span><span class="dice-col"></span><span class="dice-col"></span></div>
	<div class="dice-row"><span class="dice-col"></span><span class="dice-col"></span><span class="dice-col"></span></div>
	<div class="dice-row"><span class="dice-col"></span><span class="dice-col"></span><span class="dice-col"></span></div>`);
}

function dice(count){

	let diceRows = document.querySelectorAll(".dice-row");

	for(var row=1; row<=3; row++){
		for(var col=1; col<=3; col++){
			if(count==1){
				diceRows[1].children[1].classList.add("dot");
			}
			else if((row==1 || col==1) && (row==3 || col==3) && count==2){
				diceRows[row-1].children[col-1].classList.add("dot");
			}
			else if((row==1 && col==3) || (col==1 && row==3) || (row==2 && col==2) && count==3){
				diceRows[row-1].children[col-1].classList.add("dot");
			}
			else if((row==1 || row==3) && (col==1 || col==3) && count == 4){
				diceRows[row-1].children[col-1].classList.add("dot");
			}
			else if((row+col)%2 == 0 && count==5){
				diceRows[row-1].children[col-1].classList.add("dot");
			}
			else if(count==6){
				diceRows[row-1].children[col-1].classList.add("dot");
			}else{
				diceRows[row-1].children[col-1].classList.remove("dot")
			}
		}
	}
}
