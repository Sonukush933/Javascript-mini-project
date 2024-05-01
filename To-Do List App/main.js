const item = document.querySelector("#item");
const toDOBox = document.querySelector("#to-do-box");

item.addEventListener("keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value);
            this.value = ""
        }
    });

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
   ${item} 
    <i class="fa-solid fa-xmark"></i>
    `;


    listItem.addEventListener("click",
        function () {
            this.classList.toggle("done");
        });

    listItem.querySelector("i").addEventListener
        ("click",
            function () {
                listItem.remove();
            });
    toDOBox.appendChild(listItem);
};