document.getElementById("addToCartBtn").addEventListener("click", function() {
    for(var i=1;i<6;i++) {
        document.getElementsByClassName(i+'_p').style.backgroundColor = '#BEDEB6';
      }
  });



function addToCart() { 
    if(document.getElementById('noGlaze').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("noGlaze").value
            + " radio button checked";
    }
    else if(document.getElementById('vanillaMilk').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("vanillaMilk").value
            + " radio button checked";  
    }
    else if(document.getElementById('sugarMilk').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("sugarMilk").value
            + " radio button checked";  
    }
    else if(document.getElementById('doubleChocolate').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("doubleChocolate").value
            + " radio button checked";  
    }
    else {
        document.getElementById("disp").innerHTML
            = "No one selected";
    }
}

































// function addCinnamonRoll(){
//     var rolls = [];
//     if(localStorage.getItem('rolls')){
//         rolls = JSON.parse(localStorage.getItem('rolls'));
//     }
//     rolls.push({'Flavor' : 'glaze' : quantity });
//     localStorage.setItem('products', JSON.stringify(products));

// }

// function addProduct(){
//     let products = [];
//     if(localStorage.getItem('products')){
//         products = JSON.parse(localStorage.getItem('products'));
//     }
//     products.push({'productId' : productId + 1, image : '<imageLink>'});
//     localStorage.setItem('products', JSON.stringify(products));
// }
