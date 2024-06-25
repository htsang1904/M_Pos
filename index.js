const edge = require('edge-js');
const path = require('path')
const helloWorld = edge.func({
    assemblyFile: 'm_pos/sample.dll',
    typeName: 'sample.Program',
    methodName: 'Hello'
});

const connect = edge.func({
    assemblyFile: 'm_pos/sample.dll',
    typeName: 'sample.Program',
    methodName: 'connect'
});

const showQR = edge.func({
    assemblyFile: 'm_pos/sample.dll',
    typeName: 'sample.Program',
    methodName: 'showQR'
});
const reset = edge.func({
    assemblyFile: 'm_pos/sample.dll',
    typeName: 'sample.Program',
    methodName: 'reset'
});
helloWorld({},function (error, result) {
    if (error) throw error;
    console.log(result);
});
connect({},function (error, result) {
    if (error) throw error;
    console.log(result);
});

let data = {
    qrCode: "00020101021238560010A0000007270126000697041501121280001129930208QRIBFTTA530370454065000005802VN62310105313640818 BN 31364 tam ung.630435C0",
    price: "500.000",
    name: "Guta Cafe"
}
showQR(data,function (error, result) {
    if (error) throw error;
    console.log(result);
});

setTimeout(()=> {
    reset({},function (error, result) {
        if (error) throw error;
        console.log(result);
    });
}, 3000)
