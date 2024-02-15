const txtinput = document.querySelector(".palindrome-input");
const checkbtn = document.getElementById("check-btn");
const infotext = document.querySelector(".user-input");
let filterinput;
let reverseinput;



checkbtn.addEventListener("click", () => {
    if(!filterinput) { alert("Please input a value")}
    let holder = filterinput;
    const yes = holder.join('');
    reverseinput = filterinput.reverse().join('');

    console.log(reverseinput)
    console.log(filterinput.join(''))
    console.log(yes)

    if(yes == reverseinput){
        return infotext.innerHTML = `<strong> ${txtinput.value}</strong> is a palindrome.`
    }else {
    infotext.innerHTML = `<strong> ${txtinput.value}</strong> is a not palindrome.`
    }

});


txtinput.addEventListener('keyup',(e) =>{
    e.preventDefault();
    let g = e.target.value;
    filterinput = g.toLowerCase().match(/[a-z0-9]/g);
});

