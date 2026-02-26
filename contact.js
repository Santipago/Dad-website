const finalGrad = document.getElementById("finalGrad")
const sod = document.getElementById("sod")
const fence = document.getElementById("fence")
const deck = document.getElementById("deck")
const submit = document.getElementById("submit")
const servResult = document.getElementById("servResult")

submit.onclick = function()
{
    if(finalGrad.checked)
    {
        servResult.textContent = "You chose the final grading service";
    }
    if(sod.checked)
    {
        servResult.textContent = "You chose the sod service";
    }
    if(fence.checked)
    {
        servResult.textContent = "You chose the fence service";
    }
    if(deck.checked)
    {
        servResult.textContent = "You chose the deck service";
    }
    else
    {
        servResult.textConent = "You must select a service";
    }
}