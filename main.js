document.addEventListener('DOMContentLoaded', function() {
    const goToSecondPageButton = document.getElementById('goToSecondPage');

    goToSecondPageButton.addEventListener('click', function() {
        window.location.href = 'second.html';
    });

    document.getElementById('uploadButton').addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'video/*';
        
        input.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const videoPlayer = document.getElementById('videoPlayer');
                videoPlayer.src = URL.createObjectURL(file);
                videoPlayer.load();
            }
        });

        input.click();
    });
});
