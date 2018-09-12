const mimeType = document.getElementById('mime-type');
const message = document.getElementById('message');
const validMimeTypes = {
  '0001c': 'video/mp4',
  '00014': 'video/quicktime',
  '52494': 'video/x-msvideo',
  '3026b': 'video/x-ms-wmv',
  '1a45d': 'video/webm',
  '4f676': 'video/ogg',
  '001ba': 'video/mpeg',
};

document.getElementById('upload-form').addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault()
  const blob = document.getElementById("file").files[0];
  const fileReader = new FileReader();

  fileReader.onloadend = function(e) {
    const arr = (new Uint8Array(e.target.result)).subarray(0, 4);
    let header = "";
    for(let i = 0; i < arr.length; i++) {
       header += arr[i].toString(16);
    }
    header = header.slice(0, 5)
    if(header in validMimeTypes) {
      mimeType.innerHTML = `MIME Type: ${validMimeTypes[header]}`;
      message.innerHTML = 'Valid file type!';
      message.style.color = 'green';
    }
    else {
      mimeType.innerHTML = '';
      message.innerHTML = 'Error: file type not valid. Please select another file.';
      message.style.color = 'red';
    }
  };

  fileReader.readAsArrayBuffer(blob);
}


