console.log('HEY AGAIN')

document.getElementById('upload-form').addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    var formData = new FormData();
    formData.append("upload[file]", document.getElementById("file").files[0]);

    fetch('/api/upload', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({formData}),
    })
    .then(response => {
    })

}


function onUploadProgress(event) {
    if (event.lengthComputable) {
        var percentComplete = event.loaded / event.total;
        document.getElementById('progress-value').textContent = parseFloat(percentComplete*100).toFixed(2);
    }
}

function onRequestComplete() {
  console.log('request complete!')
}

function onUploadComplete() {
  console.log('upload complete!')
}
