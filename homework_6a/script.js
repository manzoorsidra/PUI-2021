//Capture selected values of radio group and add to "items" array
var items = [];
const cartBtn = document.querySelector('addToCartBtn');
addToCartBtn.onclick = function () {
    const rbs = document.querySelectorAll('input[name="glaze_flavor"]');
    const rbs2 = document.querySelectorAll('input[name="quantity"]');

    let selectedValue1;
    let selectedValue2;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue1 = rb.value;
        }
    }

    for (const rb2 of rbs2) {
      if (rb2.checked) {
          selectedValue2 = rb2.value;
      }
  }
    var item = [selectedValue1, selectedValue2];
    items.push(item);
    console.log(items);

//counter for the shopping cart
    for (var i = 0; i <= items.length; i++){
      document.getElementById("disp").innerHTML = i;
    }
};


//Based on which option is selected change image
document.body.addEventListener('change', function(e){
  let target = e.target;
  let message;
  switch (target.id) {
      case 'vanillaMilk':
        //Add image src attributes here to change images based on selection
          document.getElementById("rollimage").src = "assets/images/walnut.png";
          message = 'vanillaMilk';
          break;
      case 'sugarMilk':
          document.getElementById("rollimage").src = "assets/images/originaldetail.png";
          message = 'sugarMilk';
          break;
      case 'doubleChocolate':
          document.getElementById("rollimage").src = "assets/images/pumpkinspice.png";
          message = 'doubleChocolate';
          break;
      case 'noGlaze':
          document.getElementById("rollimage").src = "assets/images/caramelpecan.png";
          message = 'noGlaze';
          break;
  }
  console.log(message);
});




































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