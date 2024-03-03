function uploadFile() {
    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    formData.append('file', fileInput.files[0]);

    fetch('https://file.io', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('File uploaded! Link: ' + data.link);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Oops! Something went wrong.');
    });
}
