var rootNode = document.getElementById("root");

// Your code goes here

//creating new elements
function createElement (elem, className, text) {
    var element = document.createElement(elem);

    if (className) {
        element.setAttribute('class', className);
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

//opening uuuuuuuuhhhhhhhhhhhhhhhhhh


function isOpen() {
//    let opened = false;
    if (!this.isOpened) {
        opened = true;
        this.isOpened = true;
        this.classList.add('open');
    }
//    if (opened) {
//        opened = false;
//        this.classList.remove('open');
//    }
}
//parsing
function parse(struct) {
    var ul = document.createElement('ul');
    for (let i=0; i<struct.length; i++) {
        if (struct[i].folder) {
            var li = createElement('li', 'folder');
            var name = createElement('p', 'name', struct[i].title);
            let isOpened = false;
            li.addEventListener('click', isOpen);
            li.appendChild(name);
        } else {
            if (struct[i].title) {
                var li = createElement('li', 'file', struct[i].title);
            }
        }

        if (struct[i].children) {
            var newUl = parse(struct[i].children);
            if (newUl) {
                newUl.setAttribute('class', 'newUl');
                li.appendChild(newUl);
            }
        }
        if (struct[i].children !== undefined && !struct[i].children) {
            var empty_fol = document.createElement('p');
            empty_fol.textContent = 'Folder is empty';
            empty_fol.setAttribute('class', 'empty');
            li.appendChild(empty_fol);
        }
        ul.appendChild(li);
    }
    return ul;
}




rootNode.appendChild(parse(structure));

