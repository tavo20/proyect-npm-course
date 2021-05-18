const messages = [
    "Tavo",
    "Gi",
    "Dennis",
    "Oscar"
];

const randomMSG = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message)

}

randomMSG()

module.exports = { randomMSG }