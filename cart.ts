interface IProduct{
    id: number;
    name: string;
    description?: string;
    price: number;
}

const productList: IProduct[] = [];

let id = 1; // Id serial

// Parâmetros opcionais precisam ficar por último
function addProduct(name: string, price: number, description?: string): IProduct{
    const newProduct: IProduct = {
        id: id,
        name,
        price,
        description
    }; 

    productList.push(newProduct);

    id++;

    return newProduct;
}

addProduct("Computador", 3000);
addProduct("Computador", 3000, "Computador bonito");

function removeProduct(removingId: number): void | string{
    const index = productList.findIndex(product => product.id === removingId);
    
    if(index >= 0){
        productList.splice(index, 1);
        return;
    }

    return "Product not found.";    
}

interface IUser{
    id: number;
    name: string;
    email: string;
}

// let user: IUser | undefined;
let user: IUser | null = null;