window.onload = () => {
    let resDivExist = false;
    let loadingComplete = false;

    let svg = document.querySelector('svg');
    let svgTail = document.querySelector('#Combined-Shape_1_tail');
    svg.parentElement.classList.add('justify-content-center', 'align-items-center', 'flex-column');

    let s = Snap(svgTail).attr({ viewBox: "0 0 210 170" });

    let openResBtn = document.querySelector('.openResBtn');

    const move1 = () => {
        return new Promise((resolve, reject) => {
            s.animate({
                d: 'M 137.363 69.109 C 158.663 62.511 182.093 51.746 189.822 18.328 C 193.811 14.756 197.818 15.355 197.082 20.274 C 192.811 48.838 186.805 62.076 161.55 76.045 C 161.421 76.117 155.615 80.754 155.553 80.886 C 154.573 79.273 153.386 77.747 151.996 76.312 C 147.875 72.057 142.959 69.636 137.363 69.109 Z'
            }, 120);
            setTimeout(() => {
                resolve(true)
            }, 120)
        })
    }

    const move2 = () => {
        return new Promise((resolve, reject) => {
            s.animate({
                d: 'M 137.363 69.109 C 136.564 53.152 150.952 32.852 191.266 18.906 C 195.255 15.334 201.16 20.407 197.424 23.691 C 184.02 35.473 153.848 36.86 156.039 77.07 C 156.047 77.217 155.615 80.754 155.553 80.886 C 154.573 79.273 153.386 77.747 151.996 76.312 C 147.875 72.057 142.959 69.636 137.363 69.109 Z'
            }, 90);
            setTimeout(() => {
                resolve(true)
            }, 90)
        })
    }

    const move3 = () => {
        return new Promise((resolve, reject) => {
            s.animate({
                d: 'M 137.363 69.109 C 135.575 70.591 100.277 53.468 116.785 14.123 C 121.371 6.966 124.985 12.247 123.968 18.908 C 118.347 55.711 147.089 41.257 156.039 77.07 C 156.074 77.212 155.615 80.754 155.553 80.886 C 154.573 79.273 153.386 77.747 151.996 76.312 C 147.875 72.057 142.959 69.636 137.363 69.109 Z'
            }, 90)
            setTimeout(() => {
                resolve(true)
            }, 90)
        })
    }

    const move4 = () => {
        return new Promise((resolve, reject) => {
            s.animate({
                d: 'M 137.363 69.109 C 138.156 53.186 123.377 26.02 106.64 19.037 C 107.436 16.253 108.188 12.056 115.083 14.808 C 136.469 23.343 158.511 54.289 155.741 80.486 C 155.725 80.633 155.615 80.754 155.553 80.886 C 154.573 79.273 153.386 77.747 151.996 76.312 C 147.875 72.057 142.959 69.636 137.363 69.109 Z'
            }, 90)
            setTimeout(() => {
                resolve(true)
            }, 90)
        })
    }

    const move5 = () => {
        return new Promise((resolve, reject) => {
            s.animate({
                d: 'M 137.363 69.109 C 155.789 56.353 157.289 28.291 145.484 3.191 C 149.473 -0.381 150.526 -0.904 153.349 3.191 C 166.587 21.734 168.406 53.528 155.741 80.486 C 155.678 80.62 155.615 80.754 155.553 80.886 C 154.573 79.273 153.386 77.747 151.996 76.312 C 147.875 72.057 142.959 69.636 137.363 69.109 Z'
            }, 120)
            setTimeout(() => {
                resolve(true)
            }, 120)
        })
    }

    async function tailMove() {
        let move11 = await move1();
        if (move1) { let move22 = await move2() };
        if (move2) { let move33 = await move3() };
        if (move4) { let move44 = await move4() };
        if (move5) { let move55 = await move5() };
    }

    async function getData() {
        let response = await fetch('https://dog.ceo/api/breeds/list/all');
        let data = await response.json();
        let dataArr = Object.entries(data.message);
        return dataArr;
    }

    async function getImg(text) {
        let img = '';
        if (!/ /.test(text)) {
            img = await fetch(`https://dog.ceo/api/breed/${text}/images/random`);
        }
        else {
            img = await fetch(`https://dog.ceo/api/breed/${text.split(' ')[0]}/${text.split(' ')[1]}/images/random`);
        }
        let result = await img.json();
        let imgArr = Object.entries(result);
        return imgArr[0][1];
    }

    function separator(letter, parentElem) {
        let div = createDiv('d-flex,col-12,m-0,p-0,align-items-baseline,justify-content-around');
        parentElem.before(div);

        let ltrSeparator = document.createElement('p');
        div.appendChild(ltrSeparator);
        ltrSeparator.innerText = letter;

        let hr = document.createElement('hr');
        div.appendChild(hr);
        hr.classList.add('col-11', 'm-0', 'ms-3');
        hr.style.border = "2px solid black";
    }

    function capitalizer(initText) {
        let text = initText;
        let firstLetter = text.charAt(0);
        let firstLetterCap = firstLetter.toUpperCase();
        let remLetters = text.slice(1)
        let capText = firstLetterCap + remLetters;
        return capText;
    }

    async function printData(fn) {
        await fn.then((data) => {
            data.forEach((element, i) => {
                if (element[1].length > 0) {
                    element[1].forEach((subElement, j) => {
                        fillDataDiv(`${element[0]} ${subElement}`, i);
                    })
                }
                else { fillDataDiv(element[0], i) }
            })
        })
    }

    let firstLetterRef = '';

    function fillDataDiv(name, index) {
        let parentElem = document.querySelector('.resDiv')

        let div = createDiv('d-flex,w-auto,m-1,p-2,resElements', parentElem, 'appendChild');

        div.innerText = capitalizer(name);

        if (firstLetterRef != div.innerText.charAt(0)) {
            div.classList.add(`newLetter${div.innerText.charAt(0)}`);
            firstLetterRef = div.innerText.charAt(0);
            separator(firstLetterRef, document.querySelector(`.newLetter${div.innerText.charAt(0)}`));
        }

        div.style.borderRadius = '1.5rem';
        animateFadeIn(div, 50 * index * Math.random());
        let colorIndex = index;
        if (colorIndex > 9) { colorIndex = index % 10 };
        switch (colorIndex) {
            case 0:
            case 5:
                div.classList.add('bg-c-coral');
                break;
            case 1:
            case 6:
                div.classList.add('bg-c-yellow');
                break;
            case 2:
            case 7:
                div.classList.add('bg-c-red');
                break;
            case 3:
            case 8:
                div.classList.add('bg-c-darkblue');
                break;
            case 4:
            case 9:
                div.classList.add('bg-c-green');
                break;
        }
        div.parentElement.scrollIntoView(true);
        div.style.cursor = 'pointer';

        div.addEventListener('click', async function () {
            let imgDiv = createDiv('imgDiv,d-flex,justify-content-center,align-items-center', parentElem, 'appendChild');
            imgDiv.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
            imgDiv.style.position = 'fixed';
            imgDiv.style.width = '100vw';
            imgDiv.style.height = '100vh'
            imgDiv.style.top = '0';
            imgDiv.style.zIndex = '222';

            await getImg(name).then((data) => {
                let img = document.createElement('img');
                img.src = `${data}`;
                img.classList.add('dogImg');
                img.style.maxWidth = '75%';
                img.style.maxHeight = '75%';
                img.style.margin = "3rem";
                img.style.borderRadius = '25px'
                imgDiv.appendChild(img);
            })

            imgDiv.addEventListener('click', function () { imgDiv.remove(imgDiv) })
        })
    }

    function createDiv(divClasses, parentElem, addMode) {
        let div = document.createElement('div');
        divClassesArr = [...divClasses.split(',')];
        if (divClasses != "") {
            [...divClasses.split(',')].forEach(element => {
                div.classList.add(element);
            })
        }
        if (addMode == 'after') {
            parentElem.after(div);
        }
        else if (addMode == 'appendChild') {
            parentElem.appendChild(div);
        }
        else if (addMode == "before") {
            parentElem.appendChild(div);
        }
        return div;
    }

    function delElem(className) {
        let element = document.querySelector(`.${className}`);
        element.remove(element);
        resDivExist = false;
        loadingComplete = false;
    }

    function addBtn(btnClassList, parentElem, appendMode) {
        let btn = document.createElement('button');
        if (btnClassList != "") {
            [...btnClassList.split(',')].forEach(element => {
                btn.classList.add(element);
            })
        }
        if (appendMode == 'after') {
            parentElem.after(btn);
        }
        else if (appendMode == 'appendChild') {
            parentElem.appendChild(btn);
        }
        else if (appendMode == 'before') { parentElem.before(btn); }
        return btn;
    }

    openResBtn.addEventListener('click', () => {
        if (!resDivExist) {
            resDivExist = true;
            openResBtn.innerText = 'Close results';

            createDiv('d-flex,w-100,justify-content-center,align-items-center,resDiv,flex-wrap', openResBtn, 'after');

            addBtn('btn,btn-success,m-auto,mt-3,mb-3,getDataBtn', openResBtn, 'after');
            let getDataBtn = document.querySelector('.getDataBtn');
            getDataBtn.innerText = 'Отримати данні про собак'
            getDataBtn.addEventListener('click', function () {
                if (!loadingComplete) {
                    loadingComplete = true;
                    printData(getData());
                    svg.parentElement.classList.add('d-flex');
                    tailMove();
                    let intervalID = window.setInterval(tailMove, 510);
                    setTimeout(function () {
                        svg.parentElement.classList.remove('d-flex');
                        clearInterval(intervalID);
                    }, 3000);
                }
                else {
                    svg.parentElement.classList.add('d-flex');
                    tailMove();
                    let intervalID = window.setInterval(tailMove, 510);
                    setTimeout(function () {
                        svg.parentElement.classList.remove('d-flex');
                        clearInterval(intervalID);
                    }, 3000);
                }
            })

        }
        else {
            openResBtn.innerText = 'Result'
            delElem('resDiv');
            delElem('getDataBtn');
        }
    })

    function animateFadeIn(element, interval) {
        element.animate([{ opacity: 0 },
        { opacity: 1 }], interval)
    }
}