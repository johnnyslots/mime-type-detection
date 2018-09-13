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

// Add event listener with an 'on submit' callback, for the "verify" button
document.getElementById('upload-form').addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault()
  const blob = document.getElementById("file").files[0];
  // Create a new instance of FileReader, which allows to asynchronously read the contents of files. More info here https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  const fileReader = new FileReader();

  // When file finishes loading, create a new instance of Uint8Array and assign it the first few bytes from the payload
  fileReader.onloadend = function(e) {
    const arr = (new Uint8Array(e.target.result)).subarray(0, 4);
    // Convert each element of arr to it's string format
    let header = "";
    for(let i = 0; i < arr.length; i++) {
       header += arr[i].toString(16);
    }
    header = header.slice(0, 5)
    // Conditionally render HTML based on whether header is found in the validMimeTypes object
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
  // Read the contents of blob to get the file's data
  fileReader.readAsArrayBuffer(blob);
}


