let localUserStream;
let remoteUserStream;
let peerConnection;

async function initVideo() {
  localUserStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  document.getElementById("user-1").srcObject = localUserStream;

  createOffer();
}

async function createOffer() {
  peerConnection = new RTCPeerConnection();
  remoteUserStream = new MediaStream();

  document.getElementById("user-2").srcObject = remoteUserStream;
  let offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  console.log(offer);
}
initVideo();
