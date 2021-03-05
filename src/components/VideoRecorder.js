import { useState, useRef, useEffect } from 'react'
import { getUserMedia, wait } from '../utils'

function VideoRecorder({ constraints }) {
  const [error, setError] = useState('')
  const videoEl = useRef()
  const recordingEl = useRef()
  const recorder = useRecorder(constraints, videoEl)
  
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

function useRecorder(constraints, vdRef) {
  const [isRecording, setIsRecording] = useState(false)
  const [isRecordingFinished, setIsRecordingFinished] = useState(true)
  const [stream, setStream] = useState()
  const [recordedChunks, setRecordedChunks] = useState([])
  const recorder = useRef()

  useEffect(() => {
    if(isRecordingFinished) {
      console.log('stopped recording')
      recorder.current?.stop()
    } else {
      console.log('started recording')
      ;(async () => {
        if(!stream) return

        await setSrcPreview(stream, vdRef.current)
        record(vdRef.current.captureStream())
      })()
    }
  }, [isRecordingFinished, stream, vdRef])

  useEffect(() => {
    let isActive = true
    if(isRecording) {
      (async () => {
        const userMedia = await getUserMedia(constraints)
        if(isActive) {
          setStream(userMedia)
        }
      })()
    }
    
    return () => { isActive = false }
  }, [constraints, isRecording])

  const start = async () => {
    setIsRecording(true)
    setIsRecordingFinished(false)
  }
  
  const stop = async () => {
    setIsRecording(false)
    setIsRecordingFinished(true)
  }
  
  const setSrcPreview = (stream, vdEl) => {
    vdEl.srcObject = stream
    vdEl.captureStream = vdEl.captureStream || vdEl.mozCaptureStream
    return new Promise((resolve) => vdEl.onplaying = resolve)
  }

  const record = (capture) => {
    recorder.current = new MediaRecorder(capture)
    setRecordedChunks([])

    recorder.current.ondataavailable = ({data}) => {
      setRecordedChunks((chunks) => [...chunks, data])
    }
    recorder.current.start()
    console.log(recorder.current.state)

    const stopped = new Promise((resolve, reject) => {
      recorder.current.onstop = resolve
      recorder.current.onerror = reject
    })

    const recorded = wait(5000)
      .then(() => {
        if(isRecording) {
          setIsRecordingFinished(true)
          setIsRecording(false)
        }
      })
    
      
    return Promise.all([stopped, recorded])
  }

  return { start, stop, chunks: recordedChunks, isFinished: isRecordingFinished, isRecording }
}

export default VideoRecorder
