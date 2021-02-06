// getAttribute, setAttribute, hasAttribute, removeAtrribute

const addresses = document.querySelectorAll("input[name='address']")
addresses.forEach((element) => {
    const inputElement = element;
    const id = inputElement.getAttribute("id");
    const type = inputElement.getAttribute("type");
    inputElement.setAttribute("data-read", "yes");
    inputElement.setAttribute("data-selected", "no");
    let hasElementId = inputElement.hasAttribute("id");
    console.log(id, type, hasElementId, inputElement.dataset)
    inputElement.getAttribute("data-read");
})