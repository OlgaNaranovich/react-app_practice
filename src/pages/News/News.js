import React, {useRef, useState} from 'react';
import { VideoWrapper, Video } from './News.styled';
import { Button } from '../../UI/Button.styled';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const News = () => {
  const videoFrame = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const streamStartVideo = () => {
    const constraints = { video: { width: 400, height: 300 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
          videoFrame.current.srcObject = mediaStream;
          videoFrame.current.onloadedmetadata = (e) => {
          videoFrame.current.play();
          setIsButtonDisabled(false);
        };
      })
      .catch((err) => {
        console.log(err.name + ": " + err.message);
      });
  }

  const streamStopVideo = () => {
    videoFrame.current.pause();
  }

  return (
    <React.Fragment>
      <h1>News</h1>
      <VideoWrapper>
        <Video autoPlay={true} ref={videoFrame} />
      </VideoWrapper>
      <Button onClick={streamStartVideo} activeColor={'#298a29'}>
        <FontAwesomeIcon icon={faPlayCircle} />
        Start streaming</Button>
      <Button disabled={isButtonDisabled} onClick={streamStopVideo} activeColor={'#3d5bff'}>
        <FontAwesomeIcon icon={faPauseCircle} />
        Stop streaming</Button>
    </React.Fragment>

  )
};

export default News;