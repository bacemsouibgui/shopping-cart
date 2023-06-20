let list1= Array.from(document.getElementsByClassName('list1'));
let lists= Array.from(document.getElementsByClassName('lists'));
let mylist= Array.from(document.getElementsByClassName('mylist'));
let price= Array.from(document.getElementsByClassName('price'));
let counter= Array.from(document.getElementsByClassName('counter'));
let totalfin= document.getElementById('totalfin');

// function plus
let plus= Array.from(document.getElementsByClassName('add'));
for (let i = 0; i < mylist.length; i++) {

    plus[i].addEventListener('click', function() {

        counter[i].innerText++
    })
}

// function minus