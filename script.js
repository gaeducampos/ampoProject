const insertBtn = document.querySelector(".insert-content");
const listElement = document.getElementById("content");
const listContent = document.querySelector(".list-content");
const typeItem = document.getElementById("elements")
const filterBtns = document.querySelectorAll(".filter-content");
const deleteBtns = document.querySelectorAll(".delete-btn");



// simple for

let shoopingList = []

let newObject = {
    value: "Pollo",
    type: "carne"
}



function addTextContent(shoppingList) {
    let displayShoppingList = shoppingList.map(function (item) {
        return `
        <div class="list-item">
            <div class="text-continer">
                <span class="list-item-text">
                ${item.value}
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
    });

    displayShoppingList = displayShoppingList.join("");
    listContent.innerHTML = displayShoppingList;

}

function setObjectsShoppingList() {
    let itemProperties = {
        value: listElement.value,
        category: typeItem.options[typeItem.selectedIndex].value
    }
    shoopingList.push(itemProperties);
    listElement.value = "";
    console.log(shoopingList);
}

filterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const category = event.currentTarget.dataset.id;
        const sortByCategory = shoopingList.filter(function (item) {
            if (item.category === category) {
                return item
            }
        });
        if (category === "todos") {
            addTextContent(shoopingList);
        } else {
            addTextContent(sortByCategory);
        }
    })
})



insertBtn.addEventListener("click", function () {
    if (listElement.value === "") {
        alert("Ingrese texto por favor!")
    } else {
        if (typeItem.options[typeItem.selectedIndex].value === "type") {
            alert("Por favor selecciona una categoría")
        } else {
            setObjectsShoppingList()
            addTextContent(shoopingList)
            listElement.value = "";
            let addOption = document.createElement("option");
            typeItem.appendChild(addOption)
            addOption.value = typeItem.options[typeItem.selectedIndex].value
            addOption.text = typeItem.options[typeItem.selectedIndex].text

            typeItem.options[typeItem.selectedIndex] = addOption
        }

    }
});



listElement.addEventListener("keyup", (e) => {
    if (listElement.value != "" && e.key === "Enter") {
        if (typeItem.options[typeItem.selectedIndex].value === "type") {
            alert("Por favor selecciona una categoría")
        } else {
            setObjectsShoppingList()
            addTextContent(shoopingList)
            listElement.value = "";
            let addOption = document.createElement("option");
            typeItem.appendChild(addOption)
            addOption.value = typeItem.options[typeItem.selectedIndex].value
            addOption.text = typeItem.options[typeItem.selectedIndex].text

            typeItem.options[typeItem.selectedIndex] = addOption

        }
    }
    else if (listElement.value === "" && e.key === "Enter") {
        alert("Ingrese Texto Por favor");
    }
});

