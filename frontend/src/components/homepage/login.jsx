import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
  
  <div className="apptitlenavbar">
          <div className="logotitle">jobhunt</div>
          <div className="com">.com</div>
  </div>

  <main class="homepagecontainer">
  <section class="homepagecard">
    <div class="product-image">
      <img src="https://img.freepik.com/premium-photo/blue-account-profile-button-blue-background_509562-71.jpg?w=740" alt="OFF-white Red Edition" draggable="false" />
    </div>

    <div class="product-info">
      <h2>Register yourself</h2>
      
    </div>

    <div class="btn">
      <Link to={"/signup/user"}><button class="buy-btn">Signup</button></Link>
    </div>

    <div class="btn">
      <Link to={"/login/user"}><button class="buy-btn">Login</button></Link> 
    </div>

  </section>

  <section class="homepagecard card-blue">
    <div class="product-image">
      <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/site/default-company-logo.svg" alt="OFF-white Blue Edition" draggable="false" />
    </div>
    <div class="product-info">
      <h2>Register your Company</h2>
    </div>
    <div class="btn">
      <Link to={"/signup/company"}><button class="buy-btn">Signup</button></Link>
    </div>
    <div class="btn">
      <Link to={"/login/company"}><button class="buy-btn">Login</button></Link>
    </div>
  </section>
    


</main>
    </>
  )
}

export default Login
