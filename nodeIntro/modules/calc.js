class Calc{
    Plus(a,b){
        let result = a+b;
        return result;
    }
    Minus(a,b){
        let res = parseInt(a)-parseInt(b);
    }
    Multiply(a,b){
        let res = parseInt(a)*parseInt(b);
    }
    Split(a,b){
        let res = parseInt(a)/parseInt(b);
    }
}
module.exports = Calc;