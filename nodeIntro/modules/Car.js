class Car {
    constructor(brand,model,price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    showCar(){
        console.log('brand: ',this.brand,'model: ',this.model,'price: ',this.price)
    }
}
module.exports =  Car;