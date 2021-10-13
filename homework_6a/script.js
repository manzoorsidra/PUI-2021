

console.log('options');

var selectedOptions = document.getElementsByClassName('options');
for (var i = 0; i < selectedOptions.length; i++) {
    var option = selectedOptions[i];
    option.addEventListener('click', function(){
        console.log('works');
    });
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
