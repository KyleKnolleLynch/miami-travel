import React, { useState, useRef, useEffect } from 'react';
import TitleTag from '../utils/TitleTag';

const Section6 = () => {
  const ref = useRef();
  const refCam = useRef();
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
    const res = await fetch(
      `https://api.windy.com/api/webcams/v2/list/bbox=25.940,-80.000,25.500,-80.400?show=webcams:player,image
    `,
      {
        statusCode: 200,
        headers: {
          'x-windy-key': process.env.REACT_APP_WEBCAMS_KEY,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
      }
    );

    const resData = await res.json();
    // console.log(resData);
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
      <div className='livecam-content grid-2'>
        <ul>
          {camData.map((cam) => (
            <a href={cam.player.live.embed || cam.player.day.embed} target='frame3' key={cam.id}>
              <li ref={refCam}>{cam.title}</li>
            </a>
          ))}
        </ul>
        <div className='livecam-container'>
          <iframe
            title={refCam.current}
            name='frame3'
            width='100%'
            height='100%'
            fullscreen='true'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Section6;
