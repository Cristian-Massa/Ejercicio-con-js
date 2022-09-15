// declarar indice de la columna activa

let columnActive = 1

// seleccionar columnas

const columns = document.querySelectorAll(".column")

// escuchar click en cada una de ellas

columns.forEach((columns, indice) =>{
    columns.addEventListener("click", function(){
        stateChange(indice)
    })
})

// cambiar estados de las columnas

function stateChange(indice){
    columns[columnActive].classList.remove("active")
    columns[indice].classList.add("active")
    columnActive = indice
}