async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function myRoutine() {
    console.log('starting...');
    await sleep(3000);
    console.log('It has been approximately 3 seconds');
    console.log('end.');
}

myRoutine();

setTimeout(() => {
    console.log('It has been approximately 1 second');
}, 1000);
