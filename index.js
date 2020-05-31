var see = document.getElementById('see')
var idInput = document.getElementById('projectid')
see.addEventListener('submit', function(e){
    e.preventDefault()
    const id = e.target[0].value
    
    const title = e.target[1].value

    const description = e.target[2].value

    document.location.href = './view.html?id='+id+'&title='+title+'&description='+description
})