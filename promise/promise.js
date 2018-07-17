(new Promise(resolve => setTimeout(resolve, 500)))
    .then(() => console.log('Waited half a second'));
