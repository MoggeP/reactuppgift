import React from 'react'
import '../style/footer.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='about'>
        <h4>About us</h4>
        <article>
          We started up as a small buisness and after 10 years, well it's the same...
        </article>
      </div>

      <div className='contact'>
        <h4>Follow us</h4>
          <div className='social'>
            <a target="_blank"
              href='https://www.facebook.com/tom.n.eriksson' 
              onclick="this.href = this.href.replace('[sub]',window.location)"><FaFacebook/>
            </a>
            <a target="_blank"
              href='https://www.instagram.com/nethster/' 
              onclick="this.href = this.href.replace('[sub]',window.location)" className='footer-icon'><FaInstagram/>
            </a>
          </div>
      
      </div>
      <div>
        <h4>Contact us</h4>
          <p> Telephone: (+46) 0770-456 333 </p>
          <p> Email: randomelectronics@info.com </p>
      </div>
    </footer>
  )

}
    

export default Footer