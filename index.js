class ProductManager {
    constructor() {
        this.products = [];
        this.codeId = 0;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
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
    updateProduct(id, updatedFields) {
        const products = this.getProducts();
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
        throw new Error('Producto no encontrado');
        }
        products[index] = { ...products[index], ...updatedFields };
        (this.path, JSON.stringify(products, null, 2));
    }
    
    deleteProduct(id) {
        const products = this.getProducts();
        const filteredProducts = products.filter(p => p.id !== id);
        if (filteredProducts.length === products.length) {
        throw new Error('Producto no encontrado');
        }
        (this.path, JSON.stringify(filteredProducts, null, 2));
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct("Product 1", "Description 1", 20, "image1.jpg", "P001", 10);
productManager.addProduct("Product 2", "Description 2", 30, "image2.jpg", "P002", 15);

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));
productManager.updateProduct(1, { price: 0 });
const updatedProduct = productManager.getProductById(1);
console.log(updatedProduct);

productManager.deleteProduct(1);
const deleteProducts = productManager.getProducts();
console.log(deleteProducts);

