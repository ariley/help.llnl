function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    for (let i = 0; i < files.length; i++) {
        let formData = new FormData();
        formData.append('file', files[i]);

        fetch('https://file.io', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert(`File ${i+1} uploaded! Link: ` + data.link);
			const link = data.link;
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(`Oops! Something went wrong with file ${i+1}.`);
        });
    }
}