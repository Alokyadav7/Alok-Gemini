import './Main.css';
import {assets} from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/Context';

function Main() {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Alok Gemini</p>
            <img src={assets.user_icon} alt='' />
        </div>

        <div className="main-container">

        {!showResult
        ? 
        <>
        <div className="greet">
            <p><span>Hello, User.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>What is Full Stack Developer and how to became an Full Stack Developer.</p>
              <img src={assets.compass_icon} alt='' />
            </div>
            <div className="card">
              <p>What is the salary of an Full Stack Web Developer for an fresher and an Experience.</p>
              <img src={assets.bulb_icon} alt='' />
            </div>
            <div className="card">
              <p>Which football team was the first team who played total football and shocked the whole europe after playing this level of football game.</p>
              <img src={assets.message_icon} alt='' />
            </div>
            <div className="card">
              <p>Why and when did messi left Barcelona and in which year did messi left the club? Why did barca not stop there best</p>
              <img src={assets.code_icon} alt='' />
            </div>
          </div>
        
        </>
        :<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt=' ' />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt='' />
            {loading
            ? <div className='loader'>
              <hr />
              <hr />
              <hr />

            </div>
          : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
          </div>
        </div>
        }

          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter your prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
              </div>
            </div>
            <p className='bottom-info'>
            Alok Gemini may display inaccurate info, including about people,
          so double - check before running or searching your text.
          Your privacy and Gemini Apps.
            </p>
          </div>
        </div>

    </div>
  )
}

export default Main
