import React, { useState, useRef, useEffect } from 'react';
import TitleTag from '../utils/TitleTag';

const Section6 = () => {
  const ref = useRef();
  const [opacity, setOpacity] = useState(0);
  const [node, setNode] = useState(null);
  const [camData, setCamData] = useState([]);
  const [camTitle, setCamTitle] = useState('');

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
      'https://api.windy.com/api/webcams/v2/list/bbox=25.940,-80.000,25.500,-80.400?show=webcams:player,image',
      {
        statusCode: 200,
        headers: {
          'x-windy-key': process.env.REACT_APP_WEBCAMS_KEY,
        },
      }
    );

    const resData = await res.json();
    const filteredCams = resData.result.webcams.filter(
      (webcam) => webcam.player.live.available
    );
    setCamData(filteredCams);
  };

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
            <a
              href={cam.player.live.embed}
              target='frame1'
              key={cam.id}
              onClick={() => setCamTitle(cam.title)}
            >
              <li>{cam.title}</li>
            </a>
          ))}
        </ul>
        {camData[0] && (
          <div className='livecam-container'>
            <iframe
              title={camTitle}
              src={camData[0].player.live.embed}
              name='frame1'
              width='100%'
              height='100%'
              frameBorder='0'
              allow='fullscreen; autoplay; picture-in-picture; xr-spatial-tracking; encrypted-media'
              allowFullScreen
              sandbox='allow-scripts allow-presentation allow-same-origin allow-popups'
              style={{ border: 'none' }}
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section6;
