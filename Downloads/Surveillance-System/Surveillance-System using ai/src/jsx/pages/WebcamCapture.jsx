import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const recordRTCRef = useRef(null);
    const recordedVideoRef = useRef(null);
    const [recording, setRecording] = useState(false);

    useEffect(() => {
        if (recordRTCRef.current && recordedVideoRef.current) {
            recordedVideoRef.current.srcObject = recordRTCRef.current.getBlob();
        }
    }, [recording]);

    const handleStartCapture = () => {
        setRecording(true);
        const videoStream = webcamRef.current.stream;
        recordRTCRef.current = new RecordRTC(videoStream, {
            type: 'video',
            mimeType: 'video/webm'
        });
        recordRTCRef.current.startRecording();
    };

    const handleStopCapture = () => {
        recordRTCRef.current.stopRecording(() => {
            setRecording(false);
            let blob = recordRTCRef.current.getBlob();
            downloadVideo(blob);
            recordRTCRef.current.reset();
            recordRTCRef.current.destroy();
            recordRTCRef.current = null;
        });
    };

    const downloadVideo = (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = url;
        a.download = 'recorded-video.mp4'; // Changed to .mp4
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <Webcam
                audio={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ border: '5px solid #333', borderRadius: '10px', marginBottom: '20px' }}
                videoConstraints={{
                    width: 1280,
                    height: 720,
                    facingMode: "user"
                }}
            />
            <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: recording ? '#f44336' : '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={recording ? handleStopCapture : handleStartCapture}>
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {recording && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <p style={{ fontSize: '18px', marginBottom: '10px' }}>Live Recording:</p>
                    <video
                        ref={recordedVideoRef}
                        style={{ width: '100%', border: '2px solid #333', borderRadius: '5px' }}
                        autoPlay
                        controls
                    />
                </div>
            )}
        </div>
    );
};

export default WebcamCapture;


// import React, { useRef, useState, useEffect } from 'react';
// // import Webcam from 'react-webcam';
// import RecordRTC from 'recordrtc';
// import * as tf from '@tensorflow/tfjs';
// import model from '../../model.json';
// import Webcam from 'react-webcam';
// const WebcamCapture = () => {
//     const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   const classes = ["Abuse", "Arrest", "Shoplifting", "Assault", "Burglary", "Explosion", "Fighting", "Normal", "RoadAccident", "RoadAccidents", "Robbery", "Shooting", "Stealing", "Arson"]; // Replace with your actual class names

//   useEffect(() => {
//     const runModel = async () => {
//       const model = await tf.loadLayersModel('../../model.json'); // Make sure the model is in the public directory

//       const predict = async () => {
//         if (webcamRef.current && webcamRef.current.video.readyState === 4) {
//           const video = webcamRef.current.video;
//           const { videoWidth, videoHeight } = video;
//           const canvas = canvasRef.current;
//           canvas.width = videoWidth;
//           canvas.height = videoHeight;
//           const context = canvas.getContext('2d');
//           context.drawImage(video, 0, 0, videoWidth, videoHeight);
//           const img = tf.browser.fromPixels(canvas).toFloat();
//           const imgResized = tf.image.resizeBilinear(img, [224, 224]).div(tf.scalar(255));
//           const imgExp = imgResized.expandDims();
//           const predictions = await model.predict(imgExp).data();
//           const maxIndex = predictions.indexOf(Math.max(...predictions));
//           const out = classes[maxIndex];
//           context.font = '16px Arial';
//           context.fillStyle = '#ffffff';
//           context.fillText(out, 10, 20);
//         }
//       };

//       setInterval(() => {
//         predict();
//       }, 100);
//     };

//     runModel();
//   }, [classes]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           audio={false}
//           width={640}
//           height={480}
//           style={{ border: '5px solid #333', borderRadius: '10px' }}
//         />
//         <canvas
//           ref={canvasRef}
//           style={{ display: 'none' }}
//         />
//       </header>
//     </div>
//   );
// };

// export default WebcamCapture;


