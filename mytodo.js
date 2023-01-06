let input = prompt("What would you like to do? ").toLowerCase();
const todos = ["Master JS", "Secure an internship"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("*********")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);   
        }
        console.log("*********")
    } else if (input === "new") {
        const newTodo = prompt("OK, What is the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to list.`);
    } else if (input === "delete") {
        const delTodo = parseInt(prompt("OK, Enter an index to delete!"));
        if (!Number.isNaN(delTodo)) {
            const deleted = todos.splice(delTodo, 1);
            console.log(`${deleted} removed from list.`)
        } else {
            console.log("Unknown Value Format")
        }
    }
    input = prompt("What would you like to do? ");
}
console.log("OK QUIT THE APP!")