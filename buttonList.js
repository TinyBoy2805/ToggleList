
// button12
let circle12 = document.getElementById("circle");
let check12 = document.getElementById("check12");
let cnt = 0;
circle12.addEventListener("click", ()=>
{
    if(cnt==0)
    {
        check12.checked = true;
    }
    cnt++;
    if(cnt==2)
    {
        check12.checked = false;
        cnt=0;
    }
})

// button14

let check14 = document.getElementById("check14");
let yesa = document.getElementById("yesa");
let noa = document.getElementById("noa");

yesa.addEventListener("click", ()=>
{
    check14.checked = true;
})

noa.addEventListener("click", ()=>
{
    check14.checked = false;
})