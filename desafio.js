class ProductManager {
    constructor() {
      this.products = [];
      this.autoIncrementId = 1;
    }
  
    addProduct(productData) {
      // Validacion de todos los campos como obligatorios
      if (
        !productData.title ||
        !productData.description ||
        !productData.price ||
        !productData.thumbnail ||
        !productData.code ||
        !productData.stock
      ) {
        console.error('Debe completar todos los campos.');
        return;
      }
  
      // Validacion para que no se repita "code"
      if (this.products.some((product) => product.code === productData.code)) {
        console.error('Ya existe un producto con el mismo código.');
        return;
      }
  
      const newProduct = {
        id: this.autoIncrementId++,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        thumbnail: `img/${productData.thumbnail}`,
        code: productData.code,
        stock: productData.stock,
      };
  
      this.products.push(newProduct);
      console.log('Producto agregado:', newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(productId) {
      const product = this.products.find((p) => p.id === productId);
  
      if (product) {
        return product;
      } else {
        console.error('No se ha encontrado el producto.');
      }
    }
  }
  
  // uso
  const productManager = new ProductManager();
  
  productManager.addProduct({
    title: 'Elite trainer box 151',
    description: '1 tarjeta promocional de foil de arte completo con Snorlax. 65 fundas para cartas. 45 cartas de Energía de Pokémon TCG. Una guía para jugadores de la expansión Scarlet & Violet—151.',
    price: 185.000,
    thumbnail: 'img/etbSnorlax.png',
    code: '0001',
    stock: 10,
  });
  
  productManager.addProduct({
    title: 'Elite trainer box vivid voltage',
    description: '',
    price: 170.000,
    thumbnail: 'img/etbPikachu.png',
    code: '0002',
    stock: 8,
  });
  
  console.log('Todos los productos:', productManager.getProducts());
  
  const productIdToFind = 2;
  const foundProduct = productManager.getProductById(productIdToFind);
  console.log('Producto encontrado por ID:', foundProduct);
  