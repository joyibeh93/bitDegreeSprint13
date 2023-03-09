type SalesCategory ={
    id:number;
    name:string;
    sale_amount:number;
}
type Product ={
    id:number;
    name:string;
    price:number;
    category_id:number;
}

const Milo={
    id:1,
    name:"milo",
    price:5.35,
    category_id:1
}
const Chocolate ={
    id:1,
    name:"chocolate",
    sale_amount:0.25,
}

const spoon={
    id:21,
    name:"spoon",
    price:0.25,
    category_id:2
}
const Cutllery={
    id:2,
    name:"cutllery",
    sale_amount:0.5,
}




const priceCheck = < T extends Product, U extends SalesCategory>(product:T,category:U) =>{
    const cost = (product.price * category.sale_amount).toFixed(2);
    const saleMessage = `Your ${product.name} is on sale for $${cost}!`
    const wrongCategory = `Your product '${product.name}' has a mismatched category`
    
    return product.category_id == category.id ? saleMessage : wrongCategory

}

console.log(priceCheck(spoon, Chocolate))
console.log(priceCheck(Milo, Cutllery))
console.log(priceCheck(spoon, Chocolate))
console.log(priceCheck(spoon, Cutllery))