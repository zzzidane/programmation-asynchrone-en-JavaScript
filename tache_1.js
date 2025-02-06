// Tâche 1: Itération avec Asyn/Wait

async function iterationAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(() => {
            console.log(value);
            resolve();
        }, 1000));
    }
}
iterationAsyncAwait(["N", "H", "F"]);
console.log("Execution");