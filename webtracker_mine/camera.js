const video = document.getElementById('video');
const switchCamera = document.getElementById('switchCamera');
let devices = [];
let currentDeviceIndex = 0;

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    navigator.mediaDevices.enumerateDevices()
        .then(deviceList => {
            devices = deviceList.filter(device => device.kind === 'videoinput');
            if (devices.length > 1) {
                switchCamera.style.display = 'block';
            }
            startVideoStream(devices[currentDeviceIndex].deviceId);
        })
        .catch(error => {
            console.error('Error enumerating devices:', error);
        });

    switchCamera.addEventListener('click', () => {
        currentDeviceIndex = (currentDeviceIndex + 1) % devices.length;
        startVideoStream(devices[currentDeviceIndex].deviceId);
    });
} else {
    alert('Your browser does not support camera access.');
}

function startVideoStream(deviceId) {
    const constraints = {
        video: {
            deviceId: deviceId,
            width: { ideal: 640 },
            height: { ideal: 480 }
        }
    };

    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }

    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                video.play();
            };
            video.addEventListener('click', () => {
                video.play(); // Try playing the video when the user clicks on it
            });
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
        });
}

// iOS may require user interaction to play the video
video.addEventListener('touchstart', () => {
    video.play();
});
