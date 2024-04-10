const items = [
    {
        "id": 1,
        "category_id": "0",
        "name": "Tenavan Pizza",
        "norm": "7",
        "big": "12.5",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": ["salami","mincemeat"]
    },
    {
        "id": 2,
        "category_id": "0",
        "name": "Margareta",
        "norm": "7",
        "big": "12.5",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "ham","mincemeat","salami"
        ]
    },
    {
        "id": 3,
        "category_id": "0",
        "name": "Al Tonno",
        "norm": "7",
        "big": "12.5",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "mincemeat"
        ]
    },
    {
        "id": 4,
        "category_id": "0",
        "name": "Bolognese",
        "norm": "7",
        "big": "12.5",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "ham","salami","ham"
        ]
    },
    {
        "id": 5,
        "category_id": "0",
        "name": "Milano",
        "norm": "7.5",
        "big": "13",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "salami",
            "ham",
            "salami"
        ]
    },
    {
        "id": 6,
        "category_id": "0",
        "name": "Hawai",
        "norm": "7.5",
        "big": "13",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "mincemeat",
            "ham",
            "ham"
        ]
    },
    {
        "id": 7,
        "category_id": "0",
        "name": "Opera",
        "norm": "7.5",
        "big": "14",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "mincemeat",
            "mincemeat",
            "ham"
        ]
    },
    {
        "id": 8,
        "category_id": "0",
        "name": "Vegetariana",
        "norm": "7.5",
        "big": "14",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "salami"
        ]
    },
    {
        "id": 9,
        "category_id": "0",
        "name": "Camorra",
        "norm": "8",
        "big": "15",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "mincemeat",
            "salami",
            "ham"
        ]
    },
    {
        "id": 10,
        "category_id": "0",
        "name": "Corgonzolo",
        "norm": "8",
        "big": "15",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "salami",
            "ham",
            "ham"
        ]
    },
    {
        "id": 11,
        "category_id": "0",
        "name": "Riviera",
        "norm": "8",
        "big": "15",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "ham",
            "ham"
        ]
    },
    {
        "id": 12,
        "category_id": "0",
        "name": "America",
        "norm": "8",
        "big": "15",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "salami",
            "mincemeat",
            "salami"
        ]
    },
    {
        "id": 13,
        "category_id": "0",
        "name": "Istanbul",
        "norm": "8.5",
        "big": "15.5",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "ham",
            "mincemeat",
            "ham"
        ]
    },
    {
        "id": 14,
        "category_id": "0",
        "name": "Frutti di Mare",
        "norm": "8.5",
        "big": "15.5",
        "edit": "1",
        "info": null,
        "available": "1",
        "toppings": [
            "salami"
            ,
            "mincemeat"

        ]
    }
]

const toppings = [
    "ham",
    "mincemeat",
    "salami",
    "pepperoni",
    "mozarella",
    "tomato",
    "paprika",
    "jalapeno",
    "chili",
    "ananas",
    "kebab",
    "chicken",
    "pickles",
    "tuna",
    "bacon",
    "feta cheese",
    "olives"
]


// open modal by id
function openModal(id) {
    let modalElement = document.getElementById('modal-1')
    modalElement.classList.add('open')
    modalElement.querySelector('h2').innerHTML = items[id].name
    modalElement.querySelector('p').innerHTML = items[id].info || ''
    modalElement.querySelector('#normLabel').innerHTML = `normal ${items[id].norm}`
    modalElement.querySelector('#bigLabel').innerHTML = `big ${items[id].big}`

    let options = modalElement.querySelectorAll('.toppings input[type=checkbox]').values()
    options.forEach(option => {
        if (Object.values(items[id].toppings).includes(option.id)) {
            option.setAttribute('checked', true)
        }
    })
    document.body.classList.add('jw-modal-open')
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open')
    document.body.classList.remove('jw-modal-open')
    document.getElementById('modal-1').querySelector('form').reset()
    document.getElementById('modal-1').querySelectorAll('input[type=checkbox]').forEach(option => {
        option.removeAttribute('checked')
    })

}

window.addEventListener('load', function () {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal()
        }
    });
})

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}

const ul = document.querySelector('#listContainer')
const listTemplate = document.querySelector('#listTemplate')

function getItems() {

    items.forEach(item => {
        let listClone = listTemplate.content.cloneNode(true)
        listClone.querySelector('b').textContent = `${item.id} ${item.name}`
        item.toppings.forEach(item => {
            listClone.querySelector('i').textContent += item + ', '
        })
        listClone.querySelector('u').textContent = `${item.norm}€`
        setAttributes(listClone.querySelector('a'), {
            'onclick': `openModal(${item.id - 1})`
        })

        ul.appendChild(listClone)
    })

}


function addItem(event) {
    event.preventDefault()
    let form = document.querySelector('#itemForm')
    let formData = new FormData(form)

    let inputs = form.querySelectorAll('.toppings input[type=checkbox]').values()
    let checks = []
    inputs.forEach(i => (i.checked) ? checks.push(i.value): null)
    formData.append('toppings', checks)

    //const response = await fetch("stash.php", {
    //  method: "POST",
    //  body: formData,
    //})
    const values = [...formData.entries()]
    cart.push(values)
    document.querySelector('#numItems').innerHTML = cart.length
    //const data = Object.fromEntries(formData.entries())
    console.log(cart)
}


let formElement = document.getElementById('itemForm')
// create options for toppings
toppings.forEach(item => {
    let span = document.createElement('span')
    let option = document.createElement('input')
    setAttributes(option, {
        'type':     'checkbox',
        'value':    item,
        'id':       item
    })

    let label = document.createElement('label')
    setAttributes(label, {
        'for':      item
    })

    label.innerHTML = item
    span.appendChild(option)
    span.appendChild(label)

    formElement.querySelector('#toppings').appendChild(span)
})

let cart = []
