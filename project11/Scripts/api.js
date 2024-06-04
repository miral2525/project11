/*/*const { fetch } = require("modernizr");*/*/

let p = fetch(" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example");
p.then((value1) => {

    return value1.json()
}).then((value2) => {

    console.log(value2)
});