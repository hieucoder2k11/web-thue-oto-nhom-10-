function loadScript(component, elementId, callback) {
    fetch(component)
        .then( Response => Response.text())
        .then( data => {
            document.getElementById(elementId).innerHTML = data
            callback()
        })
}

