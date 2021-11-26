const insertBtn = document.querySelector(".insert-content");
const listElement = document.getElementById("content");
const listContent = document.querySelector(".list-content");
const typeItem = document.getElementById("elements")
const filterBtns = document.querySelectorAll(".filter-content");



// simple for

let shoopingList = []
let sortByCategory = []
let counter = 1;

function deleteOnShoppingListArray(deleteBtns) {
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {

            const identifier = parseInt(btn.id)
            shoopingList.splice(shoopingList.findIndex(item => item.id === identifier), 1)
            sortByCategory.splice(sortByCategory.findIndex(item => item.id === identifier), 1)
            btn.parentNode.remove();

        })
    })

}



function addTextContent(shoppingList) {
    let displayShoppingList = shoppingList.map(function (item) {
        return `
        <div class="list-item">
                <span class="list-item-text">
                ${item.value}
                </span>
                <button id=${item.id} class="delete-btn">
                    <a class"delete-text">Borrar<i class="fas fa-trash"></i>
                    </a>
                </button> 
        </div>
        `
    });

    displayShoppingList = displayShoppingList.join("");
    listContent.innerHTML = displayShoppingList;

    let btnsArray = document.querySelectorAll(".delete-btn")
    deleteOnShoppingListArray(btnsArray);

}



function setObjectsShoppingList() {
    let itemProperties = {
        value: listElement.value,
        category: typeItem.options[typeItem.selectedIndex].value,
        id: counter++

    }
    shoopingList.push(itemProperties);
    listElement.value = "";
}

function setCategoryValue() {
    let addOption = document.createElement("option");
    typeItem.appendChild(addOption)
    addOption.value = typeItem.options[typeItem.selectedIndex].value
    addOption.text = typeItem.options[typeItem.selectedIndex].text

    typeItem.options[typeItem.selectedIndex] = addOption
}

const filterOnClick = () => {
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const category = event.currentTarget.dataset.id;
            sortByCategory = shoopingList.filter(function (item) {
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
}




const addOnClick = () => {
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
                setCategoryValue();

            }

        }
    });
}


const addOnEnter = () => {
    listElement.addEventListener("keyup", (e) => {
        if (listElement.value != "" && e.key === "Enter") {
            if (typeItem.options[typeItem.selectedIndex].value === "type") {
                alert("Por favor selecciona una categoría")
            } else {
                setObjectsShoppingList()
                addTextContent(shoopingList)
                listElement.value = "";
                setCategoryValue();

            }
        }
        else if (listElement.value === "" && e.key === "Enter") {
            alert("Ingrese Texto Por favor");
        }
    });
}


addOnClick();
addOnEnter();
filterOnClick();

