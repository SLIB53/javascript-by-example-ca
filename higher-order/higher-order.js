function sayHello (beforeCallback, afterCallback) {
    beforeCallback();
    console.log("Hello");
    afterCallback();
}

sayHello(
    () => console.log("👋"),
    () => console.log("😎")
);


function createFixture (kernel, startCallback, endCallback) {
    return () => {
        startCallback();
        kernel();
        endCallback();
    };
}

const createBasicFixture = (kernel) => createFixture(
    kernel,
    () => console.log("Starting..."),
    () => console.log("Finished.")
);

(createBasicFixture(
    () => console.log("Running..."))
)();

(createBasicFixture(
    () => console.log("🤫"))
)();
