const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const message = document.querySelector("#error-message");
const Notes = [2000, 500, 100, 20, 10, 5, 1];
const NumofNotes = document.querySelectorAll(".NumofNotes");

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none";
    const billAmountValue = billAmount.value ;
    const cashAmountValue = cashGiven.value;
    if(billAmountValue === cashAmountValue){
        showMessage("There is no change to return!!!");
    }
    if (billAmountValue > 0) {
        console.log(billAmountValue)
        if (Number(cashAmountValue) >= Number(billAmountValue)) {
            const amountToBeReturned = cashAmountValue - billAmountValue;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("The cash provided should be atleast be equal to the bill amount!!!");
        }
    } else{
        showMessage("Invalid bill amount");
    }
} );

function calculateChange(amountToBeReturned) {
    console.log(amountToBeReturned)
    for (let i = 0; i < Notes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / Notes[i])
        console.log(numberOfNotes, Notes[i])
        amountToBeReturned = amountToBeReturned % Notes[i]
        NumofNotes[i].innerText = numberOfNotes

    }

}
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}