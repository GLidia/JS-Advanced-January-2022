function solve() {
	let buttonElements = document.getElementsByTagName("button");
	let textareaElements = document.getElementsByTagName("textarea");

	buttonElements[0].addEventListener("click", generate);
	buttonElements[1].addEventListener("click", buy);

	let itemsBought = [];
	let totalPrice = 0;
	let totalDecorationFactor = 0;

	function buy(){
		let checkboxElements = document.querySelectorAll("input[type='checkbox']:checked");	
		for(let el of checkboxElements){
			let currentTrElement = el.parentNode.parentNode;
			let name = currentTrElement.children[1].textContent;
			let price = Number(currentTrElement.children[2].textContent);
			let decFactor = Number(currentTrElement.children[3].textContent);

			itemsBought.push(name);
			totalPrice += price;
			totalDecorationFactor += decFactor;
		}

		textareaElements[1].value = `Bought furniture: ${itemsBought.join(", ")}\n`;
		textareaElements[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
		textareaElements[1].value += `Average decoration factor: ${(totalDecorationFactor / itemsBought.length)}`;
	}

	function generate(){
		let input = JSON.parse(textareaElements[0].value);

		while(input.length > 0){
			let {img, name, price, decFactor} = input.shift();

			let newTrElement = document.createElement("tr");

			let newTdElement1 = document.createElement("td");
			let newImgElement = document.createElement("img");
			newImgElement.src = img;
			newTdElement1.appendChild(newImgElement);

			let newTdElement2 = document.createElement("td");
			let newPElement2 = document.createElement("p");
			newPElement2.textContent = name;
			newTdElement2.appendChild(newPElement2);

			let newTdElement3 = document.createElement("td");
			let newPElement3 = document.createElement("p");
			newPElement3.textContent = price;
			newTdElement3.appendChild(newPElement3);

			let newTdElement4 = document.createElement("td");
			let newPElement4 = document.createElement("p");
			newPElement4.textContent = decFactor;
			newTdElement4.appendChild(newPElement4);

			let newTdElement5 = document.createElement("td");
			let newInputElement = document.createElement("input");
			newInputElement.type = "checkbox";
			newTdElement5.appendChild(newInputElement);

			newTrElement.appendChild(newTdElement1);
			newTrElement.appendChild(newTdElement2);
			newTrElement.appendChild(newTdElement3);
			newTrElement.appendChild(newTdElement4);
			newTrElement.appendChild(newTdElement5);

			document.getElementsByTagName("tbody")[0].appendChild(newTrElement);

		}
	}
  
}