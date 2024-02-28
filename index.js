class ProductManager {
    constructor() {
        this.products = [];
        this.codeId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.log("Ya existe un producto con el mismo código");
            return;
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
            console.log("Product Not Found");
        }
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct("Product 1", "Description 1", 20, "image1.jpg", "P001", 10);
productManager.addProduct("Product 2", "Description 2", 30, "image2.jpg", "P002", 15);

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));