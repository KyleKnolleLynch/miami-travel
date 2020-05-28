import React, { useState, useRef, useEffect } from 'react';
import TitleTag from '../utils/TitleTag';
import VideoModal from '../utils/VideoModal';

const Section6 = () => {
  const ref = useRef();
  const [opacity, setOpacity] = useState(0);
  const [node, setNode] = useState(null);
  const [camData, setCamData] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setOpacity(0.6) : setOpacity(0);
      },
      {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: 0.7,
      }
    );
    setNode(ref.current);
    if (node) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, [node]);

  const getLivecams = async () => {
    const res = await fetch(`https://api.windy.com/api/webcams/v2/list/nearby=25.77,-80.19,20?key=${process.env.REACT_APP_WEBCAMS_KEY}
    `);
    const resData = await res.json();
    // console.log(resData.result.webcams);
    setCamData(resData.result.webcams);
  };

  console.log(camData);

  useEffect(() => {
    getLivecams();
  }, []);

  return (
    <section id='section6'>
      <div className='livecam-overlay'></div>
      <div
        className='livecam-overlay livecam-blended'
        ref={ref}
        style={{ opacity }}
      ></div>
      <TitleTag title='Livecams' bgColor='rgb(0, 174, 255)' />
      <div className='livecam-content'>
        {camData.map((cam) => (
          <div className='livecam-container' key={cam.id}>
            <VideoModal title={cam.title} name={cam.title} />
            <span>{cam.title}</span>
          </div>
         
        ))}
      </div>
    </section>
  );
};

export default Section6;
