import { useState, useRef, useEffect } from 'react'
import { wait, getUserMedia } from '../../utils'

function useRecorder(constraints, lengthMs, vdRef) {
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

    const recorded = wait(lengthMs)
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

export { useRecorder }
