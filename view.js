const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

const title = urlParams.get('title')

const description = urlParams.get('description')

document.getElementById('player').src = 'https://llk.github.io/scratch-gui/master/player#'+id
if(title){
    document.getElementById('title').innerText = title
} else {
    document.getElementById('title').remove()
}

if(description){
    document.getElementById('description').innerText = description
} else {
    document.getElementById('description').remove()
}

