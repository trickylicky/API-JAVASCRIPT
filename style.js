fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data)
    return data.json();
}).then((completedata)=>{
    //console.log(completedata[19].price);
    let data1="";
    completedata.map((values)=>
    data1 +=` <div class="card">
    <h1 class="tiltle">${values.title}</h1>
    <img class="image" src="${values.image}" alt="image">
    <p>${values.description}</p>
    <p class="category">${values.category}</p>
    <p class="price">${values.price}</p>
</div>`
    )
    document.getElementById("cards").innerHTML=data1;
});