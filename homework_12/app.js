function switching() {
    switch(location.hash) {
        case '#Object-140':
            tank('Object 140');
            break;
        case '#t-62a':
            tank('t-62a');
            break;
        case '#e-100':
            tank('e 100');
            break;
        case '#maus':
            tank('maus');
            break;
        case '#t110e5':
            tank('t110e5');
            break;
        case '#t57-heavy-tank':
            tank('t57 heavy tank');
            break;
        case '#fv215b':
            tank('fv215b');
            break;
        case '#conqueror-gun-carriage':
            tank('conqueror gun carriage');
            break;
        default:
            start(tanks);
    }
}

function start(tanks) {
    root.innerHTML = '';
    let header = document.createElement('p');
    header.innerHTML = 'Most popular tanks';
    root.appendChild(header);
    for (let i=0; i<tanks.length; i++) {
        let block = document.createElement('div'),
            name = document.createElement('p'),
            img = document.createElement('img'),
            country = document.createElement('img'),
            sub = document.createElement('div'),
            lvl = document.createElement('span');
        block.setAttribute('class', 'block');
        block.setAttribute('name', tanks[i].model);
        img.src = tanks[i].preview;
        country.src = tanks[i].country_image;
        name.innerHTML = tanks[i].model;
        lvl.innerHTML = tanks[i].level;
        block.appendChild(img);
        sub.appendChild(country);
        sub.appendChild(lvl);
        sub.appendChild(name);
        block.appendChild(sub);
        root.appendChild(block);
    }
    let classes = document.getElementsByClassName('block');
    for (let i=0; i<classes.length;i++) {
        classes[i].addEventListener('click', press);
    }
}

function press() {
    root.innerHTML = '';
    let src = this.getAttribute('name');
    let new_src = src.replace(/\s/ig, '-');
    location.hash = new_src;
}

function tank(index) {
    root.innerHTML = '';
    for (let i = 0; i<tanks.length; i++) {
        if (index === tanks[i].model) {
            let country = document.createElement('img'),
                name = document.createElement('p'),
                img = document.createElement('img'),
                lvl = tanks[i].level,
                level_node = document.createElement('p'),
                preview = document.createElement('div'),
                characteristic = document.createElement('div'),
                back = document.createElement('a'),
                main_header = document.createElement('div'),
                content = document.createElement('div'),
                table = document.createElement('table'),
                tbody = document.createElement('tbody'),
                details_val = Object.values(tanks[i].details),
                details_key = Object.keys(tanks[i].details),
                header_c = document.createElement('p'),
                header_p = document.createElement('p');
            for (let j=0; j<details_key.length; j++) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td'),
                    td2 = document.createElement('td'),
                    key = document.createTextNode(details_key[j].replace(/\_/g, " ")),
                    param = document.createTextNode(details_val[j])
                td1.appendChild(key);
                td2.appendChild(param);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
            }
            img.src = tanks[i].preview;
            country.src = tanks[i].country_image;
            name.textContent = tanks[i].model;
            name.setAttribute('class', 'name');
            lvl = '(level ' + lvl + ')';
            level_node.textContent = lvl;
            main_header.appendChild(country);
            main_header.appendChild(name);
            main_header.appendChild(level_node);
            main_header.setAttribute('class', 'main_header');

            header_p.textContent = 'Preview';
            preview.appendChild(header_p);
            preview.appendChild(img);
            content.appendChild(preview);
            preview.setAttribute('class', 'preview');

            header_c.textContent = 'Characteristic';
            characteristic.appendChild(header_c);
            characteristic.appendChild(table);
            characteristic.setAttribute('class', 'characteristic');
            back.textContent = 'Back to list view';
            back.href = '#';
            content.setAttribute('class', 'content');
            content.appendChild(characteristic);
            root.appendChild(main_header);
            root.appendChild(content);
            root.appendChild(back);
        }
    }
}

window.onload = switching(location.hash);
window.onhashchange = switching;
