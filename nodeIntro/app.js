const Calc = require('./modules/calc.js')

const argv = process.argv.slice(2);

switch (argv[0]) {
    case "--plus":
            console.log("Example: --plus 2 2");
            let a = argv[1];
            let b = argv[2];
            const calc = new Calc(parseInt(a),parseInt(b));
            calc.Plus();
        break;
    case "--minus":
        console.log('example: --minus 3 2');
            let c = argv[1];
            let d = argv[2];
            const calcM = new Calc(c,d)
            calcM.Minus()
        break;
    case "--multiply":
        console.log('example: --multiply 3 2');
            let e = argv[1];
            let f = argv[2];
            const calcMl = new Calc(e,f)
            calcMl.Multiply()
        break;
    case "--split":
        console.log('example: --slpit 3 2');
            let g = argv[1];
            let h = argv[2];
            const calcS = new Calc(g,h)
            calcS.Split()
        break;
    default:
        console.log("Use --help to get more information");
        break;
}