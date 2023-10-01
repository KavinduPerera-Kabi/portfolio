import React from 'react';
import './intro.css'
import bg from '../../assests/image.png';
import btnImg from '../../assests/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Kavindu</span><br />Website Designer</span>
            <p className='introPara'>I am a skilled and passionate web designer with experience in creating visually appearing and user-friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro;