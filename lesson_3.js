function onClickHandler1(e) {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        alert(e.target.id)
    } else {
        alert(e.currentTarget.id)
    }
}

/*function onClickHandler2(e) {
    if (e.currentTarget.id === 'medium') {
        console.log(e.currentTarget.id)
    }
}

function onClickHandler3(e) {
    if (e.currentTarget.id === 'big') {
        console.log(e.currentTarget.id)
    }
}*/

const small = document.getElementById('small')
const medium = document.getElementById('medium')
const big = document.getElementById('big')

/*small.onclick = onClickHandler1
medium.onclick = onClickHandler1
big.onclick = onClickHandler1*/

small.addEventListener("click", onClickHandler1)
small.addEventListener("click", () => {alert("Yo")})