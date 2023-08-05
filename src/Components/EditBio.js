import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';

const EditBio = () => {
  const [aboutData, setAboutData] = useState('');
  const [blood, setBlood] = useState('');
  const [resume, setResume] = useState(null);

  const handleResumeData = (e) => {
    e.preventDefault();

  }

  return (
    <div className='p-44 border-solid'>
      <form onSubmit={handleResumeData} >
        <div>
          <h3>Write something about yourself?</h3>
          <textarea
            className='bg-slate-200 rounded-md w-80 h-20'
            type='text'
            minLength={0}
            maxLength={500}
            value={aboutData}
            onChange={(e) => {
              setAboutData(e.target.value)
            }} /> 0/500

        </div>
        <div className='bg-slate-100 w-80'>
          <input type='file' value={resume} onChange={(e) => {
            setResume(e.target.value)
          }} />
          <MdDelete className='text-red-600' />
        </div>
        <div>
          <h3>Blood Group</h3>
          <select className='bg-slate-200 w-80 rounded-md' name='bloodGroup'>
            <option value={blood} onChange={(e) => setBlood(e.target.value)}>Select blood</option>
            <option>O positive(O+)</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
          </select>
        </div>
        <div className='p-10'>
          <button
            type='submit'
            className='bg-red-500 w-64 rounded-full p-1 text-white'
          >Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditBio