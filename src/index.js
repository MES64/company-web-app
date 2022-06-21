import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
          <AboutUsBtn />
        </div>
        <div>
          <p>Log in</p>
          <LoginBtn />
        </div>
        <div>
          <p>Contact Us</p>
          <ContactUsBtn />
        </div>
      </div>
    );
  }
}

class AboutUsPg extends React.Component {
  render() {
    return(
      <h1>About Us</h1>
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

class HomeBtn extends React.Component {
  render() {
    return(
      <button>Home</button>
    );
  }
}

class AboutUsBtn extends React.Component {
  render() {
    return(
      <button>About Us</button>
    );
  }
}

class ContactUsBtn extends React.Component {
  render() {
    return(
      <button>Contact Us</button>
    );
  }
}

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
        <HomeBtn />
        <AboutUsBtn />
        <ContactUsBtn />
        <LoginBtn />
      </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return(
      <HomePg />
      // <AboutUsPg />
      // <ContactUsPg />
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <Body />
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
    <App />
  </React.StrictMode>
);