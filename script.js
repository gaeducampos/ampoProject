const insertBtn = document.querySelector(".insert-content");
const listElement = document.getElementById("content");
const listContent = document.querySelector(".list-content");
console.log(listElement);

// DRY

// DO NOT REPEAT YOURSELF


function addTextContent() {
    return listContent.innerHTML +=
        `
<div class="list-item">
    <div class="text-continer">
        <span class="list-item-text">
        ${listElement.value}
        </span>
    </div>
    <div class="btn-container">
        <button class="delete-btn">
            <a class"delete-text">Borrar<i class="fas fa-trash"></i>
             </a>
         </button> 
    </div>
</div>

`
}




insertBtn.addEventListener("click", function () {
    if (listElement.value === "") {
        alert("Ingrese texto por favor!")
    } else {
        addTextContent()
        listElement.value = "";
    }
});

listElement.addEventListener("keyup", (e) => {
    if (listElement.value != "" && e.key === "Enter") {
        addTextContent()
        listElement.value = ""
    }
    else if (listElement.value === "" && e.key === "Enter") {
        alert("Ingrese Texto Por favor");
    }
});

