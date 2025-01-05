// vars fixeds
const input = document.getElementById("inputText")
const btnAdd = document.getElementById("btnAdd")
const listArea = document.getElementById("list_area")

// function to remove element
function removeItem(item) {
  item.remove()
}

// function to checked element class list
function checkItem(item) {
  if (item.classList.contains("checked_item")) {
    item.classList.remove("checked_item")
  } else {
    item.classList.add("checked_item")
  }
}

// function to ad itens to list 
btnAdd.addEventListener("click", () => {
  // Captura o valor do input
  const inputValue = input.value

  // Validação
  if (inputValue !== "") {
    // Cria um parágrafo <p>
    const p = document.createElement("p")
    p.textContent = inputValue

    // Cria a div principal
    const divMain = document.createElement("div")
    divMain.className = "list_item"

    // Adiciona o parágrafo à div principal
    divMain.appendChild(p)

    // Cria os botões
    const btnCheck = document.createElement("button")
    btnCheck.className = "btn_check"
    btnCheck.innerHTML = `<i class="bi bi-check-lg"></i>`
    btnCheck.onclick = () => checkItem(divMain)

    const btnTrash = document.createElement("button")
    btnTrash.className = "btn_x"
    btnTrash.innerHTML = `<i class="bi bi-trash-fill"></i>`
    btnTrash.onclick = () => removeItem(divMain)

    // Cria um contêiner para os botões e adiciona os botões nele
    const buttonContainer = document.createElement("div")
    buttonContainer.appendChild(btnCheck)
    buttonContainer.appendChild(btnTrash)

    // Adiciona o contêiner de botões à div principal
    divMain.appendChild(buttonContainer)

    listArea.appendChild(divMain)

    // Limpa o valor do input
    input.value = ""
  } else {
    alert("Precisa digitar algo!")
  }
})


// function the enter in input
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    btnAdd.click()
  }
})