import { forwardRef } from 'react'

const VideoPlayer = forwardRef(({isRecordingFinished}, ref) => (
  <video
    width="480"
    height="360"
    ref={ref}
    controls={isRecordingFinished}
    autoPlay={!isRecordingFinished}
    muted={!isRecordingFinished}
  ></video>
))


export default  VideoPlayer
