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
    console.log('Uinttarget!', e.target)
    const arr = (new Uint8Array(e.target.result)).subarray(0, 4);
    let header = "";
    for(let i = 0; i < arr.length; i++) {
       header += arr[i].toString(16);
    }

    header = header.slice(0, 5)
    if(header in validMimeTypes) {
      document.getElementById('mime-type').innerHTML = `MIME Type: ${validMimeTypes[header]}`
      document.getElementById('valid-type').innerHTML = 'Valid file type!'
      document.getElementById('error').innerHTML = ''
    }
    else {
      document.getElementById('error').innerHTML = 'Error: file type not valid.'
      document.getElementById('mime-type').innerHTML = ''
      document.getElementById('valid-type').innerHTML = ''
    }
  };

  fileReader.readAsArrayBuffer(blob);
}


