    document.querySelector(".filter").addEventListener("click", function(e) {
        const id = e.target.id;
        if (id) {
            document.querySelector(".on").classList.remove("on");
            document.getElementById(id).classList.add("on");
            document.querySelector(".todos").className = `todos ${id}`;
        }
    });
    document
        .getElementById("clear-completed")
        .addEventListener("click", function() {
            deleteIndexes = [];
            document.querySelectorAll(".card.checked").forEach(function(card) {
                deleteIndexes.push(
                    [...document.querySelectorAll(".todos .card")].indexOf(card)
                );
                card.classList.add("fall");
                card.addEventListener("animationend", function(e) {
                    setTimeout(function() {
                        card.remove();
                    }, 100);
                });
            });
            removeManyTodo(deleteIndexes);
        });
}
function stateTodo(index, completed) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos[index].isCompleted = completed;
    localStorage.setItem("todos", JSON.stringify(todos));
}
