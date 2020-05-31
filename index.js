var see = document.getElementById('see')
var idInput = document.getElementById('projectid')
see.addEventListener('submit', function(e){
    e.preventDefault()
    document.location.href = './view?'+e.target[0].value
})