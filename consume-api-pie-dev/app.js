const endpoint = 'https://pie.dev/post'
const form = document.querySelector('#form')
const output = document.querySelector('tbody')

const name = document.querySelector('[name="name"]')
const address = document.querySelector('[name="address"]')
const photo = document.querySelector('[name="photo"]')
const sendToServer = async (data) => {
    try {
        const api = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await api.json()
        console.log(result)
        output.innerHTML +=
            `
            <tr>
                <td>${result.json.name}</td>
                <td>${result.json.address}</td>
            </tr>
            `

    } catch (err) {
        console.log(`There is an error: ${err}`)
    }
}
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = {
        name: name.value,
        address: address.value,
    }

    sendToServer(data)
    // console.log('its working')
})