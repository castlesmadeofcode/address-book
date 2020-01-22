//collecting user input
const addressContainer = document.getElementById("addressList")

const captureUserInfo = () => {
    const enteredName = document.getElementById("fullName")
    const enteredAddress = document.getElementById("address")

    console.log(enteredName)
    console.log(enteredAddress)

    addressContainer.innerHTML += `
        <section>
            <p>Name: ${enteredName.value}</p>
            <p>Adress: ${enteredAddress.value}</p>
        </section>
    `
    enteredName.value = "";
    enteredAddress.value = "";
}



document.getElementById("saveEntry").addEventListener("click", captureUserInfo);