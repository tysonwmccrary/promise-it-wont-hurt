var p = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
    console.log(error.message);
}

p.then(console.log, function (onReject) {
    console.log(error.message);
});