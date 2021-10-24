//Capture selected values of radio group and add to "items" array
var myId;
var items = [];

var cartBtnAvailable = document.getElementById('addToCartBtn');
if(cartBtnAvailable){
  cartBtnAvailable.addEventListener('click', function(){
//     const rbs = document.querySelectorAll('input[name="glaze_flavor"]');
//     const rbs2 = document.querySelectorAll('input[name="quantity"]');

//     let selectedValue1;
//     let selectedValue2;

//     for (const rb of rbs) {
//         if (rb.checked) {
//             selectedValue1 = rb.value;
//         }
//     }

//     for (const rb2 of rbs2) {
//       if (rb2.checked) {
//           selectedValue2 = rb2.value;
//       }
//   }
//     var item = [selectedValue1, selectedValue2];
//     items.push(item);
//     console.log(items);


// Local Storage Cart Items Counter
    currentCounterValue = parseInt(localStorage.getItem('cartItemNumber'));

    if (isNaN(currentCounterValue)){
        currentCounterValue = 0;
        localStorage.setItem("cartItemNumber", JSON.stringify(currentCounterValue));
    };

    var updatedCounter = currentCounterValue + 1;
    localStorage.setItem("cartItemNumber", JSON.stringify(updatedCounter));

    console.log(typeof(localStorage.getItem('cartItemNumber')) + localStorage.getItem('cartItemNumber'));

    
  });
};



function updateCartOnAllPages(){

    if(document.getElementById("disp")){
        document.getElementById("disp").innerHTML = JSON.parse(localStorage.getItem('cartItemNumber'));
    }

    var cartCount = JSON.parse(localStorage.getItem('cartItemNumber'));
    console.log("cartCount = " + cartCount);

    var cartItemNumber = document.getElementsByClassName("dispClass");
    console.log(cartItemNumber);

    cartItemNumber.innerHTML = cartCount;
    console.log(cartItemNumber.innerHTML);
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




















































