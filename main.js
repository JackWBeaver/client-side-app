const area = (base,hieght) => {
    return (base * hieght) / 2;
}

document.querySelector('#button').addEventListener('click', () => {
    const j = parseInt(document.querySelector('#base').value)
    const b = parseInt(document.querySelector('#height').value)
    const ans = 'The area is ' + area(j,b) + '.'
    document.querySelector('#answer-button').innerHTML = ans
})
