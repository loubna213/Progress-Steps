
const btns = document.querySelectorAll('.btn');
const li = document.querySelectorAll('li');
const spanElement = document.querySelector('.span');

let index = 0;
let width = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('prev')) {
            console.log(index)
            if(index <= 0) {
                li[0].classList.add('active');
                index = 0;
            } else {
                li[index].classList.remove('active');
                width -= 25;
                spanElement.style.width = `${width}%`;
                index--;
            }
        } else if(target.classList.contains('next')) {
            console.log(index)
            if(index >= li.length - 1) {
                li[li.length - 1].classList.add('active');
                index = li.length - 1;
            } else {
                index++;
                li[index].classList.add('active');
                width += 25;
                spanElement.style.width = `${width}%`;
            }
        }
    })
})




