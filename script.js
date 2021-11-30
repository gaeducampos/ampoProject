// Referecias de botones y contenido del HTML

const btnInsert = document.querySelector(".insert-content");
const inputText = document.getElementById("content");
const shoppingListContent = document.querySelector(".list-content");
const categoryValue = document.getElementById("elements")
const filterBtns = document.querySelectorAll(".filter-content");



// Creación de estructas arrays, para la lógica del programa

let shoopingList = []
let shoppingListByCategory = []



let counter = 1;


// Declaración de función que crea los objetos
function setObjectsShoppingList() {
    // cración de objeto y donde se le adjunta los valores de sus propiedades
    let itemProperties = {
        value: inputText.value,
        category: categoryValue.options[categoryValue.selectedIndex].value,
        id: counter++

    }
    // insertar objetos dentro del arreglo
    shoopingList.push(itemProperties);
}

// Función para agregar Elementos de la lista de compras de manera dinamica (Estructura HTML)
function addTextContent(shoppingList) {
    let displayShoppingList = shoppingList.map(function (item) {
        return `
        <div class="list-item">
                <span class="list-item-text">
                ${item.value}
                </span>
                <button id=${item.id} class="delete-btn">
                    <a class"delete-text"><i class="fas fa-trash"></i>
                    </a>
                </button> 
        </div>
        `
    });

    displayShoppingList = displayShoppingList.join("");
    shoppingListContent.innerHTML = displayShoppingList;

    // declarión el arraglo que contiene los btns de eleminar

    let btnsArray = document.querySelectorAll(".delete-btn")

    //Ejecución de la funcion eleminar al precionar (btn Eliminar)
    deleteOnShoppingListArray(btnsArray);

    console.log(shoopingList);

}


// Declaración de función que solicita su categoria cuando se ejecuta
function setCategoryValue() {
    let addOption = document.createElement("option");
    categoryValue.appendChild(addOption)
    addOption.value = categoryValue.options[categoryValue.selectedIndex].value
    addOption.text = categoryValue.options[categoryValue.selectedIndex].text

    categoryValue.options[categoryValue.selectedIndex] = addOption
}



// Delclaración de función que filtra la categoria, dado los bnts especifícos
const filterOnClick = () => {
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const category = event.currentTarget.dataset.id;
            shoppingListByCategory = shoopingList.filter(function (item) {
                if (item.category === category) {
                    return item
                }
            });
            if (category === "todos") {
                // Ejecución de la función para agregar el contenido de "Lista Completa" visual (HTML)
                addTextContent(shoopingList);

            } else {
                // Ejecución de la función para agregar el contenido visual filtrado de lista (HTML)
                addTextContent(shoppingListByCategory);
            }
        })
    })
}


// function para eleminar cuando se preociona el btn 
function deleteOnShoppingListArray(deleteBtns) {
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {

            const identifier = parseInt(btn.id)
            shoopingList.splice(shoopingList.findIndex(item => item.id === identifier), 1)
            shoppingListByCategory.splice(shoppingListByCategory.findIndex(item => item.id === identifier), 1)
            btn.parentNode.remove();

        })
    })

}


// Declaración de función que agrega elementos a la lista de manera visual y al arreglo cuando se da click
const addElementOnClick = () => {
    btnInsert.addEventListener("click", function () {
        if (inputText.value === "") {
            alert("Ingrese texto por favor!")
        } else {
            if (categoryValue.options[categoryValue.selectedIndex].value === "type") {
                alert("Por favor selecciona una categoría")
            } else {
                // Ejecución de la función que colocá propiedades a los objetos
                setObjectsShoppingList()
                // Ejecución de la función para agregar el contenido de incial visual y en el arreglo de la lista (HTML)
                addTextContent(shoopingList)
                setCategoryValue();
                inputText.value = "";
                // Ejecución de la función que solicita que se seleccione una categoria por cada elemento


            }

        }
    });
}


// Declaración de función que agrega elementos a la lista de manera visual y al arreglo cuando se da enter
const addElementOnEnter = () => {
    document.addEventListener("keyup", (e) => {
        if (inputText.value != "" && e.key === "Enter") {
            if (categoryValue.options[categoryValue.selectedIndex].value === "type") {
                alert("Por favor selecciona una categoría")
            } else {
                setObjectsShoppingList()
                addTextContent(shoopingList)
                inputText.value = "";
                setCategoryValue();

            }
        }
        else if (inputText.value === "" && e.key === "Enter") {
            alert("Ingrese Texto Por favor");
        }
    });
}

// Ejecución de la función para agregar contenido visual (HTML) cuando se de click
addElementOnClick();
// Ejecución de la función para agregar contenido visual (HTML) cuando se de Enter
addElementOnEnter();
// Ejecución de la función para mostrar los elementos en los botones de filtro
filterOnClick();

