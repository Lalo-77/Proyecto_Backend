class ProductManager {
    constructor() {

        const fs = require ("fs");
        this.products = [];
        this.codeId = 0;
    }
    addProduct (title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
        }
        if (this.products.some(product => product.code === code)) {
            console.log("Ya existe un producto con el mismo código");
        }
        const newProduct = {
            id: this.codeId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            return product;
        } else {
            console.log("Producto no encontrado");
        }
    }

    updateProduct(id, updatedProduct) {
        const products = this.getProducts();
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index] = { ...updatedProduct, id };
            fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
        }
    }

    deleteProduct(id) {
        const products = this.getProducts();
        const filteredProducts = products.filter(product => product.id !== id);
        fs.writeFileSync(this.path, JSON.stringify(filteredProducts, null, 2));
    }

}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct("Product 1", "Description 1", 20, "image1.jpg", "P001", 10);
productManager.addProduct("Product 2", "Description 2", 30, "image2.jpg", "P002", 15);

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));
console.log(productManager.deleteProduct(2));
