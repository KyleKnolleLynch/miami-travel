import React, { useState, useRef, useEffect } from 'react'
import TitleTag from '../utils/TitleTag'
import imgBg from '../../images/livecam_bg.webp'

const Section6 = () => {
  const ref = useRef()
  const [opacity, setOpacity] = useState(0)
  const [node, setNode] = useState(null)
  const [camData, setCamData] = useState([])
  const [camTitle, setCamTitle] = useState('')
  const [staticAlert, setStaticAlert] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setOpacity(0.6) : setOpacity(0)
      },
      {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: 0.7,
      }
    )
    setNode(ref.current)
    if (node) {
      observer.observe(node)
      return () => observer.unobserve(node)
    }
  }, [node])

  const getLivecams = async () => {
    try {
      const res = await fetch(
        'https://api.windy.com/api/webcams/v2/list/bbox=26.500,-80.000,25.500,-80.500?show=webcams:player',
        {
          statusCode: 200,
          headers: {
            'x-windy-key': process.env.REACT_APP_WEBCAMS_KEY,
          },
        }
      )

      const resData = await res.json()

      resData.result.webcams.forEach(cam => {
        cam.player.live.available ? setStaticAlert(false) : setStaticAlert(true)
      })

      setCamData(resData.result.webcams)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getLivecams()
  }, [])

  return (
    <section id='section6'>
      <div className='livecam-overlay'>
        <img
          src={imgBg}
          alt='livecam_background'
          loading='lazy'
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div
        className='livecam-overlay livecam-blended'
        ref={ref}
        style={{ opacity }}
      ></div>
      <TitleTag title='Livecams' bgColor='rgba(0, 174, 255, 0.7)' />
      <div className='livecam-content grid-2'>
        <ul>
          {camData.map(cam => (
            <li key={cam.id}>
              <a
                href={
                  cam.player.live.available
                    ? cam.player.live.embed
                    : cam.player.day.embed
                }
                target='frame1'
                onClick={() => setCamTitle(cam.title)}
              >
                {cam.title}
              </a>
            </li>
          ))}
        </ul>
        {camData[0] && (
          <iframe
            title={camTitle || 'windy.com_livecam'}
            src={
              camData[0].player.live.available
                ? camData[0].player.live.embed
                : camData[0].player.day.embed
            }
            name='frame1'
            frameBorder='0'
            allow='fullscreen; autoplay; picture-in-picture; xr-spatial-tracking; encrypted-media'
            allowFullScreen
            sandbox='allow-scripts allow-presentation allow-same-origin allow-popups'
            loading='lazy'
          ></iframe>
        )}

        <div className='livecam-attr'>
          {staticAlert ? (
            <div className='static-alert'>
              All livecams currently offline, please enjoy some daytime
              timelapse cams
            </div>
          ) : (
            ''
          )}
          Webcams provided by{' '}
          <a
            href='https://www.windy.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            windy.com
          </a>{' '}
          &mdash;{' '}
          <a
            href='https://www.windy.com/webcams/add'
            target='_blank'
            rel='noopener noreferrer'
          >
            add a webcam
          </a>
        </div>
      </div>
    </section>
  )
}

export default Section6
