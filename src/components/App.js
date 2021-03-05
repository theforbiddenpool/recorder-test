import '../styles/styles.css'
import VideoRecorder from './VideoRecorder'

const constraints = { audio: true, video: true, width: 640, height: 480 }

function App() {
  return (
    <div>
      <h1>Record Your Video!</h1>
      <VideoRecorder maxRecordingMS={7000} constraints={constraints} />
    </div>
  );
}

export default App;
