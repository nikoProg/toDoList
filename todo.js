
let myDiv = document.createElement("div");
let text = document.createTextNode(" ");
myDiv.appendChild(text);
let list = document.querySelector(".list");
list.appendChild(myDiv);

myDiv.className = 'newItem';
myDiv.classList = 'neMozeTakoHaha item';//resetting classes!

let adderBtn = document.getElementById('adderBtn');
let adderInput = document.querySelector("#adderInput");

adderBtn.addEventListener('click', function(){
    myDiv = document.createElement("div");
    text = document.createTextNode(adderInput.value);                         
    if(text.length > 10) {
        adderInput.classList.add('error');
        let errorSpan = document.createElement("span");
        errorSpan = document.createTextNode("more than 10 characters");
        list.prepend(errorSpan);
        throw {error: 'more than 10 characters!'};
    }

    myDiv.appendChild(text);                                                  
    myDiv.className = 'newItem';
    list.appendChild(myDiv);
    let newBtn = document.createElement("button");
    text = document.createTextNode('-');
    newBtn.className = 'vaspitac';
    newBtn.addEventListener('click', function(){
        newBtn.parentNode.remove();
        console.log(newBtn.parentNode, ' removed!');
    });
    newBtn.appendChild(text);
    myDiv.appendChild(newBtn);
});
//vaspitac.addEventListener('click');

let vaspitaci = document.getElementsByClassName('vaspitac');
console.log(vaspitaci);
for(i=0; i<5; i++){
    //let vaspitac = document.querySelector('.vaspitac');
    let vaspitac = vaspitaci[i];
    vaspitac.addEventListener('click', function(){
        vaspitac.parentNode.remove();
        console.log(vaspitac.parentNode, " removed!");
    });
    console.log(vaspitac, ' is listened to!');
}
