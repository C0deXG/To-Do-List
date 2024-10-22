const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector('.list');


function todo(){
    if(input.value.length < 3){
        return alert('has to be more then 3 charaters long')
    };

    const li = document.createElement('li');
    const span = document.createElement('span')
    const text = document.createTextNode(input.value);
    const spanText = document.createTextNode('Delete')
    const space = document.createTextNode('. ')
    span.className = 'Delete'
    input.value = ''
    span.append(spanText)
    li.appendChild(text);
    li.appendChild(space)
    li.appendChild(span)
    list.prepend(li)

}

function deleteElement(){
    const span = document.querySelector('.Delete');

    span.addEventListener('click', (e)=>{
        const target = e.target;
        target.parentNode.remove()
    })

}



button.addEventListener('click', (e)=>{
    todo()
    deleteElement()
})
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission if the input is in a form
        todo(); // Call your todo function
        deleteElement()
    }
});