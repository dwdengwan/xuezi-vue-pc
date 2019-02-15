window.onload=function(){
  var lid=location.search.split("=")[1];
  ajax({
    url:"http://localhost:3000/details",
    type:"get",
    data:"lid="+lid,
    dataType:"json"
  })//open(output)
  //        ↓
  .then((output)=>{
    var {product,specs,pics}=output;
    var details=
      document.getElementById("details");
    details.children[0].innerHTML=product.title;
    details.children[1].children[0].innerHTML=
      product.subtitle;
    details.children[2].children[0].children[1]
      .innerHTML=`¥${product.price.toFixed(2)}`;
    details.children[2].children[1].children[1]
      .innerHTML=product.promise;

    var html="";
    for(var sp of specs){
      html+=`<a class="btn btn-sm btn-outline-secondary ${sp.lid==lid?'active':''}" href="product_details.html?lid=${sp.lid}" >${sp.spec}</a>`;
    }
    details.children[4].children[1].innerHTML=html;
  })
}