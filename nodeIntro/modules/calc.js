class Calc{
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    Plus(a,b){
        console.log(parseInt(this.a)+parseInt(this.b))
    }
    Minus(a,b){
        console.log(parseInt(this.a)-parseInt(this.b))
    }
    Multiply(a,b){
        console.log(parseInt(this.a)*parseInt(this.b))
    }
    Split(a,b){
        console.log(parseInt(this.a)/parseInt(this.b));
    }
}
module.exports = Calc;