function Product(name, price) {
    this.name = name;
    this.price = price;
    this.productDesc = function() {
        return `${this.name} = ${this.price}`;
    }
}

const product1 = new Product("Soap", 40);
console.log(product1);
console.log(product1.productDesc());
