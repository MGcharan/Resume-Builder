// eslint-disable-next-line no-unused-vars
import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import  templateimg from '../templtes/template1.png'
import  template2img from '../templtes/template2.png'
import  template3img from '../templtes/template3.png'
import '../Resources/templateStyle.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  
  const template=[
    {
      title:'Simple Resume', 
      imgPath:templateimg
    },

    {
      title:`General Resume & 
              Skill-Based Resume`, 
      imgPath:template2img
    },
    {
      title:"Modern Resume", 
      imgPath:template3img
    },
  ]
  

  return (
   <DefaultLayout>
       <div className="row home">
        {template.map((template,index)=>{
          return <div className="col-md-4 " key={index} >
             <div className='template'>
             <img src={template.imgPath}  height="300"  alt=""  style={{width:"100%"}}/>
              <div className="text">
              <p>{template.title}</p>
              <button className='button ms-2' onClick={()=>navigate(`/templates/${index+1}`)}>Try</button>
              </div>
             </div>
          </div>
        })}
       </div>
   </DefaultLayout>
  )
}

export default Home