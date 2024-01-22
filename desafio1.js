class ProductManager {
    constructor() {
        this.products = [];
    }
    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        const validarCodigo = this.products.find(
            (producto) => producto.code === code
        );
        if (validarCodigo) {
            console.log(
                `El producto "${title}" que quiere ingresar tiene el código "${code}" repetido con "${validarCodigo.title}"`
            );
            return;
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos son obligatorios, verifique el llenado.`);
        } else {
            ProductManager.id++;
            const producto = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id: ProductManager.id,
            };
            this.products.push(producto);
            {
                console.log(`El producto ${producto.title} fue agregado`);
            }
        }
    }
    getProduct() {
        return this.products;
    }
    validarId(id){
        return this.products.find((producto) => producto.id === id);
    }
    getProductById(id) {
        
            if (!this.validarId(id)) {
                console.log(`"Not Found" El producto con ID "${id}" No existe`);
            } else {
                console.log(`El producto con ID "${id}" existe y es el sigueinte:`);
                console.log(this.validarId(id));
                
            }
        }
    }

const producto = new ProductManager();
console.log(producto.getProduct());
producto.addProduct("titulo1", "descripcion1", 123, "sinimagen1", "abcd", 18);
producto.addProduct("titulo2", "descripcion2", 456, "sinimagen2", "abcd", 36);
producto.addProduct("titulo3", "descripcion3", 456, "sinimagen3", "efgh");
producto.addProduct("titulo4", "descripcion4", 456, "sinimagen4", "efjh", 21);

console.log(producto.getProduct());

producto.getProductById(1);
producto.getProductById(23);
