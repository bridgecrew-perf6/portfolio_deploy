import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
     
     <div className=" container services_container">
    <article className="service">
      <div className="service_head">
        <h3>
          c/c++ Tutorial
        </h3>
      </div>
      <ul className='service_list'>
        <li>
          <BiCheck className='service_list_icon'/>
          <p>Basic of c/c++</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Basic problems</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Advance problems</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>complete all syllabus</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>With proper Notes</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>weekly mock test are provided</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>implement mini project</p>
          </li>
        
      </ul>
    </article>


    <article className="service">
      <div className="service_head">
        <h3>
          Web Dev
        </h3>
      </div>
      <ul className='service_list'>
        <li>
          <BiCheck className='service_list_icon'/>
          <p> HTML Basic to advance</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>css Basic to advance</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>complete Javascript Basic to advance</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Node js Basic to advance</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>MongoDB Basic to advance</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>weekly mock test are provided</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>implements a full fetch mern stack project</p>
          </li>
        
      </ul>
    </article>

    <article className="service">
      <div className="service_head">
        <h3>
          DSA with placement preperation
        </h3>
      </div>
      <ul className='service_list'>
        <li>
          <BiCheck className='service_list_icon'/>
          <p>Love Babbar 450 question</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Complete DBMS roadmap with Handwritten Notes</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Complete os roadmap with Handwritten Notes</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Complete CN roadmap with Handwritten Notes</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Complete OOP roadmap with Handwritten Notes</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Aptitude & mock interviews</p>
          </li>
          <li>
          <BiCheck className='service_list_icon'/>
          <p>Live classes</p>
          </li>
        
      </ul>
    </article>

     </div>




    </section>
  )
}

export default Services