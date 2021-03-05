import { useState, useRef, useEffect } from 'react'
import { useRecorder } from './useRecorder'

function VideoRecorder({ constraints, maxRecordingMS = 5000 }) {
  const [error, setError] = useState('')
  const videoEl = useRef()
  const recordingEl = useRef()
  const recorder = useRecorder(constraints, maxRecordingMS, videoEl)
  
  const handleStart = async () => {
    try {
      recorder.start()
    } catch(err) {
      console.error(err)
      setError(err.message || err)
    }
  }

  const handleStop = async () => {
    recorder.stop()
  }

  useEffect(() => {
    if(recorder.isFinished && recorder.chunks.length !== 0) {
      const recordedBlob = new Blob(recorder.chunks, { type: 'video/webm' })
      recordingEl.current.src = URL.createObjectURL(recordedBlob)
    }
  }, [recorder.isFinished, recorder.chunks])

  return (
    <main>
      {error && <div className="error">{error}</div>}
      <video ref={videoEl} muted autoPlay style={{ display: !recorder.isFinished || recorder.chunks.length === 0 ? 'block' : 'none'}}></video>
      <video ref={recordingEl} controls style={{ display: recorder.isFinished && recorder.chunks.length !== 0 ? 'block' : 'none'}}></video>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop} disabled={!recorder.isRecording && recorder.isFinished}>Stop</button>
      </div>
    </main>
  )
}

export default VideoRecorder
