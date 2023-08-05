import React from 'react'
import '../App.css';
import { MdEdit } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const MyBio = () => {

  const navigate = useNavigate();

  const handleAboutMe = () => {
    navigate('/editbio');
  }

  const handleResume = () => {
    navigate('/resumedata');
  }
  return (
    <div className='about-me'>
      <div className='cursor-pointer'>
        <IoIosArrowBack />
        <h2>
          About me
          <MdEdit onClick={handleAboutMe} />
        </h2>
      </div>
      <h2>Blood group </h2>
      <div className='resume'>
        <h2>Resume <IoIosArrowForward onClick={handleResume} />

        </h2>
      </div>
    </div>
  )
}

export default MyBio