
const sendButton = document.getElementById('send')
const messagesWrapper = document.getElementById('messages-wrapper')
const messages = document.getElementById('messages')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const botMessages = ['Yes', 'No', 'Idk']
const forbiddenWords = ['flower', 'butterfly', 'car']
const botCommands = ['/version', '/date']
let userMessages = []

window.addEventListener("DOMContentLoaded", () => {
    insertInstructions()
    botWritingAnimation('Hello!', 1000)
})

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        sendButton.click()
    }
})

sendButton.addEventListener('click', function (event) {
    event.preventDefault()
    handleSendMessage()
})

function handleSendMessage() {
    const inputVal = input.value
    if (inputVal) {
        if (!forbiddenWords.every(bannedWord => !inputVal.toLowerCase().includes(bannedWord))) {
            alert("Please don't use such words")
            botWritingAnimation("Please don't use such words", 1000)
        } else {
            const userMessage = createMessage(inputVal, 'user')
            messages.appendChild(userMessage)
            messagesWrapper.scrollTop = messages.scrollHeight
            botWritingAnimation(botAnswer(inputVal), 1000)
        }

        input.value = ''
    }
}

function createMessage(text, owner, isAnimation = false) {
    const message = document.createElement('div')
    message.classList.add('message', owner)
    isAnimation && message.classList.add('animation')

    const messageItem = document.createElement('div')
    messageItem.classList.add('message-item')
    messageItem.textContent = text

    message.appendChild(messageItem)
    return message
}

function botAnswer(userMess) {
    const findMessage = userMessages.find(m => userMessages.length > 1 && m.user === userMess.toLowerCase())
    const isCommand = botCommands.includes(userMess)
    if (isCommand) {
        switch (userMess) {
            case '/date':
                return `Today's date is: ${new Date().toLocaleDateString()}`
            case '/version':
                return `Program version: v1.2.3`
            default:
                return
        }
    }
    if (!findMessage && !isCommand) {
        userMessages.push({
            user: userMess.toLowerCase(),
            bot: botMessages[Math.floor(Math.random() * botMessages.length)]
        })
    }
    return findMessage ? findMessage.bot : userMessages[userMessages.length - 1].bot
}

function botWritingAnimation(text, time) {
    sendButton.disabled = true
    input.disabled = true
    const loader = createMessage('...', 'bot', true)

    setTimeout(function () {
        messages.appendChild(loader)
        messagesWrapper.scrollTop = messages.scrollHeight
    }, 500)

    setTimeout(function () {
        const botMessage = createMessage(text, 'bot')
        messages.appendChild(botMessage)
        sendButton.disabled = false
        input.disabled = false
        input.focus()
        messages.removeChild(loader)
    }, time + 500)
}

function insertInstructions() {
    const instruction1 = document.createElement('p')
    instruction1.textContent = `You can use the Enter button.`

    const instruction2 = document.createElement('p')
    instruction2.textContent = `Command list: ${botCommands}`

    const instruction3 = document.createElement('p')
    instruction3.textContent = `Forbidden words: ${forbiddenWords}`


    inputWrapper.appendChild(instruction1)
    inputWrapper.appendChild(instruction2)
    inputWrapper.appendChild(instruction3)
}