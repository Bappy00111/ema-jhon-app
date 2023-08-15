import { getShoppingCart } from "./assets/utilities/fakedb";

const addedProductLoaded = async () =>{
    const loadedProduct = await fetch('product.json')
    const products = await loadedProduct.json();
    // console.log(products)
   
    const storedCart  = getShoppingCart()
    // console.log(storedCart)
    const saveCart = [];


    for(const id in storedCart ){
        const addedProduct = products.find(product => product.id === id)
        // console.log(addedProduct)
        if(addedProduct){
            const quantity = storedCart [id]
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);

        }
    }
    return saveCart;

}
export default addedProductLoaded;