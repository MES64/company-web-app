import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
//import App from "./App.js";

// Interesting Components

class Carousel extends React.Component {
  render () {
    return(
      <h2>Carousel</h2>
    );
  }
}

class ContactForm extends React.Component {
  render () {
    return(
      <p>Contact Form</p>
    );
  }
}

class ContactUsBody extends React.Component {
  render () {
    return(
      <ContactForm />
      // <p>Submission Message</p>
    );
  }
}

// Pages

class HomePg extends React.Component {
  render() {
    return(
      <div>
        <Carousel />
        <div>
          <p>Learn More</p>
        </div>
        <div>
          <p>Log in</p>
          <LoginBtn />
        </div>
        <div>
          <p>Contact Us</p>
        </div>
        <nav>
          <Link to="/about-us">About Us</Link>
        </nav>
      </div>
    );
  }
}

class AboutUsPg extends React.Component {
  render() {
    return(
      <div>
        <h1>About Us</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    );
  }
}

class ContactUsPg extends React.Component {
  render() {
    return(
      <div>
        <h1>Contact Us</h1>
        <p>Text</p>
        <ContactUsBody />
      </div>
    );
  }
}

// Buttons

class LoginBtn extends React.Component {
  render() {
    return(
      <button>Login</button>
    );
  }
}

// Main App Components

class NavBar extends React.Component {
  render() {
    return(
      <div>
        <p>Company</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
        <LoginBtn />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/about-us" element={<AboutUsPg />} />
          <Route path="/contact-us" element={<ContactUsPg />} />
        </Routes>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);