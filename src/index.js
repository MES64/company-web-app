import React from 'react';
import ReactDOM from 'react-dom/client';
//import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
//import 'swiper/css/effect-fade';

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
  // ToDo
  // - Have the carousel states be props from app component; then only need to use API once

  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      subtitles: [],
      imageUrls: []
    };
  }

  componentDidMount() {
    fetch('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
    .then(response => response.json())
    .then(inputData => {
      const details = inputData.Details;

      this.setState({
        titles: details.map(item => item.Title),
        subtitles: details.map(item => item.Subtitle),
        imageUrls: details.map(item => item.ImageUrl)
      });
    });
  }

  render() {
    const { titles, subtitles, imageUrls} = this.state;

    return(
      <div>
        <Carousel />
        <Swiper
        modules={[Navigation]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        >
          <SwiperSlide>
            <h1>{titles[0]}</h1>
            <h2>{subtitles[0]}</h2>
            <img src={imageUrls[0]} alt="" class="carouselImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <h1>{titles[1]}</h1>
            <h2>{subtitles[1]}</h2>
            <img src={imageUrls[1]} alt="" class="carouselImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <h1>{titles[2]}</h1>
            <h2>{subtitles[2]}</h2>
            <img src={imageUrls[2]} alt="" class="carouselImg"></img>
          </SwiperSlide>
        </Swiper>

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

//  action="https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit" method="POST"

/* <fieldset>
            <legend>Address</legend>
            <label for="address-line-1">Address line 1</label>
            <input type="text" id="address-line-1" name="address-line-1"/><br/>
            <label for="address-line-2">Address line 2</label>
            <input type="text" id="address-line-2" name="address-line-2"/><br/>
            <label for="city-or-town">City/Town</label>
            <input type="text" id="city-or-town" name="city-or-town"/><br/>
            <label for="state-or-county">State/County</label>
            <input type="text" id="state-or-county" name="state-or-county"/><br/>
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode"/><br/>
            <label for="country">Country</label>
            <input type="text" id="country" name="country"/><br/>
          </fieldset> */

/* <form action="https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit" method="POST">
          <label for="full-name">Full name</label>
          <input type="text" id="full-name" name="full-name"/><br/>
          <label for="email">Email address</label>
          <input type="email" id="email" name="email"/><br/>
          <label for="phone-number">Phone number 01</label>
          <input type="text" id="phone-number" name="phone-number"/><br/>
          <label for="message">Message</label><br/>
          <textarea id="message" name="message"/><br/>
          <input type="submit"/>
        </form> */

class ContactUsPg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phoneInputIndexes: [1],
      addAddress: false
    };

    this.handleAddPhoneInput = this.addPhoneInput.bind(this);
    this.handleAddAddressInput = this.addAddressInput.bind(this);
    this.handleSubmit = this.sendData.bind(this);
  }

  addPhoneInput() {
      const newPhoneInputIndexes = this.state.phoneInputIndexes.slice();
      newPhoneInputIndexes.push(newPhoneInputIndexes.length + 1);
      this.setState({phoneInputIndexes: newPhoneInputIndexes});
  }

  addAddressInput() {
    this.setState({addAddress: !this.state.addAddress})
  }

  sendData() {
    const inData = 
    {
      "FullName": "Mark Skelton",
      "EmailAddress": "ms10@gmail.com",
      "PhoneNumbers": [
        "07712345678"
      ],
      "Message": "hello",
      "bIncludeAddressDetails": true,
      "AddressDetails": {
        "AddressLine1": "1 Street Road",
        "AddressLine2": "Place",
        "CityTown": "Sometown",
        "StateCounty": "Somewhere",
        "Postcode": "KY8 3YU",
        "Country": "United Kingdom"
      }
    };

    fetch("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", {
      method: "Post",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(inData),
    })
    .then(response => response.json())
    .then(outData => console.log("Response:", outData))
    .catch(error => console.error("Error:", error));
  }

  render() {
    const phoneInputs = this.state.phoneInputIndexes.map(i => 
      <div key={i}>
        <label for={i}>Phone number 0{i}</label>
        <input type="text" id={i} name={i}/><br/>
      </div>
    );

    const addressInputs = this.state.addAddress ? 
    <div>
      <p>Address Input Here</p>
    </div>
    : 
    <div/>;

    return(
      <div>
        <h1>Contact Us</h1>
        <p>Text</p>

        <label for="full-name">Full name</label>
        <input type="text" id="full-name" name="full-name"/><br/>
        <label for="email">Email address</label>
        <input type="email" id="email" name="email"/><br/>

        <div>{phoneInputs}</div>
        <button onClick={this.handleAddPhoneInput}>Add new phone number</button><br/>

        <label for="message">Message</label><br/>
        <textarea id="message" name="message"/><br/>

        <input type="checkbox" id="add-address" onClick={this.handleAddAddressInput}/>
        <label for="add-address">Add address details</label><br/>
        <div>{addressInputs}</div>

        <button onClick={this.handleSubmit}>Submit</button>
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