// var productNameInput = document.getElementById("Product Name")
// var productPriceInput = document.getElementById("Product Price")
// var productCategoryInput = document.getElementById("Product Category")
// var productSaleInput = document.getElementById("Product Sale")
// var productDesInput = document.getElementById("Product Describtion")
// var producSearchInput = document.getElementById("Search input")

// var productList;
// if(localStorage.getItem("datalist")==null){
//    productList=[]
// }else{productList=JSON.parse(localStorage.getItem("datalist"))
//    display()
// }
// function addproduct(){
// var product ={
//    name:productNameInput.value,
//    price:productPriceInput.value,
//    category:productCategoryInput.value,
//    sale:productSaleInput.checked,
// des:productDesInput.value,

// }
// productList.push(product)
// localStorage.setItem("datalist",JSON.stringify(productList))
// display()

// } 

// function display(){
// var temp=""
// for( var i=0; i<productList.length ;i++){

// temp=temp+ `<tr>
// <td>`+i+`</td>
// <td>`+productList[i].name +`</td>
// <td>`+productList[i].price+`</td>
// <td>`+productList[i].category+`</td>
// <td>`+productList[i].sale+`</td>
// <td>`+productList[i].des +`</td>
// <td><button class="btn btn-warning ">Update</button></td>
// <td><button onclick=(deletproduc(`+i+`))  class="btn btn-danger  ">Delete</button></td>


// </tr>

//       `
//       document.getElementById("mydata").innerHTML=temp

// }



// }

// function deletproduc(x){
// productList.splice(x,1)
// display()

// localStorage.setItem("datalist",JSON.stringify(productList))
// }

// function clearproduct(){
//    productNameInput.value=``
//    productPriceInput.value=``
//    productCategoryInput.value=`TV`
//    productSaleInput.checked=false
//    productDesInput.value=``
// }
// function Searchproduct(){
//    console.log(producSearchInput.value)
// }




var nameInput = document.getElementById("Site Name")
var urlInput = document.getElementById("Site URL")

var updateInput = document.getElementById("updbtn")
var addInput = document.getElementById("addptn")

var indexupdate = 0;

var productList;
if (localStorage.getItem("datalist") == null) {
   var productList = []
}
else {
   productList = JSON.parse(localStorage.getItem("datalist"))
   display()
}


function submitData() {
   var product = {
      name: nameInput.value,
      url: urlInput.value,

   };
   productList.push(product)
   localStorage.setItem("datalist", JSON.stringify(productList))

   display()

}




function display() {
   var temp = ""
   for (var i = 0; i < productList.length; i++)

      temp = temp + `<tr>
<td> `+ i + `  </td> 
<td>   `+ productList[i].name + `</td> 
<td>   `+ productList[i].url + `</td> 
<td> <button  class="btn btn-success  ">Visit</button>  </td> 
<td> <button   onclick="deletdata(`+ i + `)" class="   btn btn-danger ">Delete</button>  </td>
<td> <button   onclick="Updatedata(`+ i + `)" class="   btn btn-warning ">Update</button>  </td>

</tr> `

   document.getElementById("tabledata").innerHTML = temp
}


function deletdata(x) {
   productList.splice(x, 1)
   display()
   localStorage.setItem("datalist", JSON.stringify(productList))

}

function Updatedata(index) {

   indexupdate = index;

   var currentProduct = productList[index]
   nameInput.value = currentProduct.name
   urlInput.value = currentProduct.url



   updateInput.classList.remove("d-none");
   addInput.classList.add("d-none");
}



function updateproduct() {
   var product = {
      name: nameInput.value,
      url: urlInput.value,

   };

   productList.splice(indexupdate, 1, product)
   localStorage.setItem("datalist", JSON.stringify(productList))
   display()

   updateInput.classList.add("d-none");
   addInput.classList.remove("d-none");

}








