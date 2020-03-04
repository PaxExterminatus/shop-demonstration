import store from '../store'

class BasketStore {
    constructor() {
        this.products = [];
    }

    get count() {
        return this.products.length;
    }

    get sum() {
        return this.products.reduce((sum, product) => (sum + product.price) * product.count, 0);
    }

    addProduct(product, mutation = 'basketProductAdd') {
        store.commit(mutation, product);
    }
}

export {
    BasketStore
}

export default BasketStore
