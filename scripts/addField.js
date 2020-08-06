document.querySelector('#add-time').addEventListener('click', cloneField);

// Node = Structure of HTML.
function cloneField() {
    // cloneNode = true(copy all children insine the note).
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    // Cleaning all fields of the cloned node.
    const fields = newFieldContainer.querySelectorAll('input');
    
    fields.forEach(function(field) {
        field.value = "";
    });

    // Finding the location that the clone node will be placed.
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}