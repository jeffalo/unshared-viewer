var see = document.getElementById('see')
var idInput = document.getElementById('projectid')
see.addEventListener('submit', function(e){
    e.preventDefault()
    document.location.href = './view.html?id='+e.target[0].value+'&title=my%20cool%20project&description=epic'
})