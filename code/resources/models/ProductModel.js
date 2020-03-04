class ProductModel {
    constructor({id, name, cover, price}) {
        this.id = id;
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
