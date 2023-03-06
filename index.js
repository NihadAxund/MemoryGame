
var ImageList = ["img1.avif", "img2.avif", "img3.avif", "img4.avif", "img6.avif", "img7.avif", "img8.avif", "img9.jpg"];
const array_Count = 4;
var Click_Items = [];
//' style="background-image:url(images/${ImageList[number]});"'
var IndexList = [];
function main() {
    let mytable = document.getElementById("myTable");
    let content = "";

    //alert(ImageList.length/2)
    let num = 0;
    for (let i = 0; i < array_Count; i++) {
        content += "<tr>";
        for (let k = 0; k < array_Count; k++) {

            let id = `${num}`;
            num++;
            content += `
            <td id='${id}' ' class = "animate__animated"' >
            </td>
            `;
        }
        content += "</tr>";
    }
    mytable.innerHTML = content;

    main2();
}

function click1(event) {
    let value = event.target;


    Click_Items.push(value);

    value.classList.remove("kapali");
    value.classList.remove("kapali2");
    //alert(value.classList);
    value.classList.add("animate__flipInY");
    value.removeEventListener("click", click1);
    Click_Index_Check();

}

function Click_Index_Check() {
    if (Click_Items.length > 1) {
        if (Click_Items[0].style.backgroundImage == Click_Items[1].style.backgroundImage) {
            var audio = new Audio('sounds/win.mp3');
            audio.play();
            setTimeout(() => {
                Click_Items[0].classList.add("animate__hinge");
                Click_Items[1].classList.add("animate__hinge");
                Click_Items = [];
            }, 1000);

        }
        else {
            Click_Items.forEach(element => {
                var audio = new Audio('sounds/neq.mp3');
                audio.play();
                setTimeout(() => {

                    element.classList.remove("animate__flipInY")
                    element.classList.add("kapali2");
                }, 1000);
                setTimeout(() => {
                    // alert(element.classList)
                    element.classList.add("animate__flipInY")
                }, 1090);
                element.addEventListener("click", click1);
                setTimeout(() => {

                    element.classList.remove("animate__flipInY");
                }, 1500);
            });
            Click_Items = [];
            // alert("false");
        }
    }

}


function mathod2(kart) {
    kart.classList.add("animate__flipInY")
    kart.classList.add("kapali");
}

function tumunuKapat() {
    let cards = document.querySelectorAll('td');
    let currentIndex = 0;
    let delay = 100;
    function flipNextCard() {
        if (currentIndex < cards.length) {
            cards[currentIndex].classList.add('kapali');
            currentIndex++;
            setTimeout(flipNextCard, delay);
        }
    }
    flipNextCard();
}

function main2() {
    let randomnum = null;
    let Url_Value = ImageList[0];
    for (let index1 = 0; index1 < 8; index1++) {
        Url_Value = ImageList[index1]
        for (let l = 0; l < 2; l++) {
            randomnum = getRandom(16)
            let item = document.getElementById(randomnum);
            IndexList.push(randomnum);
            item.style.backgroundImage = `url('images/${Url_Value}')`
            item.addEventListener("click", click1);
        }
    }
    setTimeout(tumunuKapat, 1000);

}
function getRandom(max) {

    while (true) {
        let boolen = true;
        let n = Math.floor(Math.random() * max);
        for (let index = 0; index < IndexList.length; index++) {

            if (IndexList[index] == n) {
                boolen = false;
            }
        }
        if (boolen) {
            return n;
        }

    }
}

main();
