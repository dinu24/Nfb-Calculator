var txt = document.querySelector('#txt');
var btn = document.querySelectorAll('.btn');


for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        txt.value += btntext;
    });
}

function sin() {
    txt.value = Math.sin(txt.value);
}

function cos() {
    txt.value = Math.cos(txt.value);
}

function tan() {
    txt.value = Math.tan(txt.value);
}

function pow() {
    txt.value = Math.pow(txt.value, 2);
}

function sqrt() {
    txt.value = Math.sqrt(txt.value, 2);
}

function log() {
    txt.value = Math.log(txt.value);
}

function pi() {
    txt.value = 3.14159265359;
}

function e() {
    txt.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = txt.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    txt.value = f;
}

function backspc() {
    txt.value = txt.value.substr(0, txt.value.length - 1);
}

function result() {
    try {
        txt.value=eval(txt.value)
    } catch (e) {
        if (e instanceof SyntaxError) {
            
              setTimeout(() => {
                window.swal({
                    title: 'Syntax Error',
                    text:'Try again',
                    buttons: false,
                    allowOutsideClick: false,
                  timer: 1000
                });
              });
        }
    }
}

