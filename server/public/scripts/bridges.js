const renderBridges = async () => {
    
    const response = await fetch('/bridges')
    const data = await response.json()

    const bridgeContent = document.getElementById('bridge-content')

    if (data) {

        data.map(bridge => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${bridge.image})`

            const name = document.createElement('h3')
            name.textContent = bridge.name
            bottomContainer.appendChild(name)

            const cost = document.createElement('p')
            cost.textContent = 'Cost: ' + bridge.cost
            bottomContainer.appendChild(cost)

            const city = document.createElement('p')
            city.textContent = 'City: ' + bridge.city
            bottomContainer.appendChild(city)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/bridges/${bridge.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            bridgeContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No image Available 😞'
        bridgeContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()


if (requestedUrl) {
    window.location.href = '../404.html'

}
else {
    renderBridges()
}