const Calc = require('./modules/calc');

const argv = process.argv.slice(2);



// console.log(argv);

switch (argv[0]) {
    case "--Plus":
            console.log("Example: --minus 2 2");
            let a = argv[1];
            let b = argv[2];
            const calc = new Calc(parseInt(a),parseInt(b));
            calc.Plus();
        break;
        case "--Minus":
            console.log("Example: --minus 2 2");
            let a = argv[1];
            let b = argv[2];
            const calc = new Calc(parseInt(a),parseInt(b));
            calc.Minushi();
        break;
    default:
        console.log("Use --help to get more information");
        break;
}