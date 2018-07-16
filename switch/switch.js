[1, 10, 'one hundred'].forEach((n) => {
    switch (n) {
        case 1:
            console.log("It's a 1");
            break;

        case 10:
            console.log("It's a 10");
            break;

        default:
            console.log("It's something else: " + n);
            break;
    }
});
