class ProductModel {
    constructor({name, cover, price}) {
        this.name = name;
        this.cover = cover;
        this.price = price;
        this.count = 1;
        this.size = null;
        this.color = null;
    }
}

export {
    ProductModel,
}

export default ProductModel
