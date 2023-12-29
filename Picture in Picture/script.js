const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); 
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
           videoElement.play();
        }
    } catch (error) {
        console.log('thats a big error', error);
    }
}

button.addEventListener('click', async ()=>{
    //disable button
button.disabled=true;
    //Start Picture in picture
    await videoElement.requestPictureInPicture();
    //reset the button
button.disabled = false;
})

//on load
selectMediaStream();