window.onload = function(e){ 
  	var nodes = (document.querySelectorAll('[class^="price-"]'));
  	nodes.forEach(function(element){
  		console.log(nodes);
  		var discount = discountCalc(element.innerHTML);
  		var divElement = document.createElement("div");
  		divElement.innerHTML = "Discount : "+discount+"%";
  		insertAfter(divElement,element);
  		console.log(discount);
  	})

  	function insertAfter(newNode, referenceNode) {
	    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
  	function discountCalc(val){
  		var data = val.toString().slice(1);
  		if(data < 100){
  			return 20;
  		}
  		else if((data >= 100) && (data < 500)){
  			return 30
  		}
  		else if(data >= 500){
  			return 40
  		}
  	}
}