import store from '../store'

class Basket {
    constructor() {
        this.products = [];
    }

    get count() {
        return this.products.length;
    }

    get sum() {
        return this.products.reduce((sum, product) => sum + product.price.current, 0);
    }

    addProduct(product, mutation = 'basketProductAdd') {
        store.commit(mutation, product);
    }
}

export {
    Basket
}

export default Basket
