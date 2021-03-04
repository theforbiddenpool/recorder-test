import VideoRecorder from './VideoRecorder'

const constraints = { audio: true, video: true }

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <VideoRecorder maxRecordingMS={5000} constraints={constraints} />
    </div>
  );
}

export default App;
