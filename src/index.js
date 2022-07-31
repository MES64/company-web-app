import React from 'react';
import ReactDOM from 'react-dom/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './index.css';

import imgWoman1 from "./Resources/shutterstock_407632243.jpg";
import imgWoman2 from "./Resources/shutterstock_1302552622.jpg";
import imgOffice1 from "./Resources/shutterstock_696636346.jpg";
import imgOffice2 from "./Resources/shutterstock_696636415.jpg";
import { ReactComponent as Logo } from "./Resources/Logo.svg";

// Pages

class HomePg extends React.Component {
  render() {
    // The server has since been removed
    // const { titles, subtitles, imageUrls} = this.props;
    const titles = [
      "Lorem ipsum dolor sit amet",
      "Viverra suspendisse potenti",
      "Quem vide tincidunt pri ei",
    ];
    const subtitles = [
      "Te pri efficiendi assueverit, id molestie suavitate per",
      "Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur",
      "Ut qui decant copiosae interpretaris",
    ];
    const imageUrls = [
      imgWoman1,
      imgOffice1,
      imgWoman2,
    ];

    return(
      <div>
        <Swiper
        modules={[Navigation]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        >
          <SwiperSlide>
            <div class="carouselImg">
              <h1 class="carouselGeneralText carouselTitle">{titles[0]}</h1>
              <h2 class="carouselGeneralText carouselText">{subtitles[0]}</h2>
              <Link class="btnLink carouselBtn" to="/company-web-app/contact-us">Contact Us</Link>
              <img src={imageUrls[0]} alt="" class="img img1"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="carouselImg">
              <h1 class="carouselGeneralText carouselTitle">{titles[1]}</h1>
              <h2 class="carouselGeneralText carouselText">{subtitles[1]}</h2>
              <img src={imageUrls[1]} alt="" class="img img2"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="carouselImg">
              <h1 class="carouselGeneralText carouselTitle">{titles[2]}</h1>
              <h2 class="carouselGeneralText carouselText">{subtitles[2]}</h2>
              <img src={imageUrls[2]} alt="" class="img"/>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="learnMore">
          <div class="learnMoreText">
            <h1 class="largeTitle">Justo pententium te vix, scripta regione urbanitas</h1>
            <br/>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
              Quem vide tincidunt pri ei, id mea omnium denique. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li class="text bold">
                Te pri efficiendi assueverit, id molestie suavitate per
              </li>
              <li class="text bold">
                Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur
              </li>
              <li class="text bold">
                Ut qui decant copiosae interpretaris
              </li>
              <li class="text bold">
                Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
              </li>
            </ul>
            <br/>
            <Link class="btnLink" to="/company-web-app/about-us">Learn More</Link>
          </div>
          <img src={imgOffice2} class="learnMoreImg"/>
        </div>
        <div class="loginSection">
          <div class="grayBox">
            <h1 class="largeTitle white">Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h1>
            <br/>
            <p class="text white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
              Quem vide tincidunt pri ei, id mea omnium denique. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare.  
            </p>
            <br/>
            <LoginBtn />
          </div>
        </div>
        <div class="contactUsSection">
          <h1 class="title center">Sed libero justo, lobortis sit amet suscipit non</h1>
          <h2 class="subtitle center">taria duo ut vis semper abhorreant</h2>
          <div class="textCols">
            <div class="textCol">
              <p class="text bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
              </p>
              <br/>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare.  
              </p>
            </div>
            <div class="textCol">
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
              </p>
              <br/>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
              </p>
            </div>
            <div class="textCol">
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
              </p>
              <br/>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
                Quem vide tincidunt pri ei, id mea omnium denique. 
              </p>
            </div>
          </div>
          <Link class="btnLink" to="/company-web-app/contact-us">Contact Us</Link>
        </div>
      </div>
    );
  }
}

class AboutUsPg extends React.Component {
  render() {
    return(
      <div class="container">
        <h1 class="title">About Us</h1>
        <p class="text bold">Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</p>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
        </p>
        <br/>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
        </p>
        <img src={imgOffice2} class="aboutUsImg"/>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
        </p>
        <h2 class="subtitle">Taria duo ut vis semper abhorreant:</h2>
        <ul>
          <li class="text bold">
            Te pri efficiendi assueverit, id molestie suavitate per
          </li>
          <li class="text bold">
            Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur
          </li>
          <li class="text bold">
            Ut qui decant copiosae interpretaris
          </li>
          <li class="text bold">
            Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
          </li>
        </ul>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
        </p>
        <br/>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. 
          Quem vide tincidunt pri ei, id mea omnium denique. 
        </p>
      </div>
    );
  }
}

class ContactUsPg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      FullName: "",
      EmailAddress: "",
      PhoneNumbers: [
        ""
      ],
      Message: "",
      bIncludeAddressDetails: false,
      AddressDetails: {
        AddressLine1: "",
        AddressLine2: "",
        CityTown: "",
        StateCounty: "",
        Postcode: "",
        Country: ""
      }
    };

    this.handleInputChange = this.onInputChange.bind(this);
    this.handleAddPhoneInput = this.addPhoneInput.bind(this);
    this.handleSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);

    if (name.includes("[")) {
      if (name.includes("PhoneNumbers")) {
        const newPhoneNumbers = this.state.PhoneNumbers.slice();
        const i = name[name.length-2];
        newPhoneNumbers[i] = value;
        this.setState({PhoneNumbers : newPhoneNumbers});
      }
      else {
        const newAddressDetails = structuredClone(this.state.AddressDetails);
        const inputName = name.substring(15,name.length-1);
        newAddressDetails[inputName] = value;
        this.setState({AddressDetails : newAddressDetails});
      }
    }
    else {
      this.setState({[name] : value});
    }
  }

  addPhoneInput() {
      const newPhoneNumbers = this.state.PhoneNumbers.slice();
      newPhoneNumbers.push("");
      this.setState({PhoneNumbers: newPhoneNumbers});
  }

  onSubmit(event) {
    event.preventDefault();

    const postData = structuredClone(this.state);

    // Sever now down
    fetch("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", {
      method: "Post",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(respData => {
      console.log("Response:", respData);

      if (respData.Errors.length > 0) {
        alert(respData.Errors[0].FieldName + " " + respData.Errors[0].MessageCode);
      }
      else {
        alert("Your message has been sent \nWe will be in contact with you within 24 hours.");
      }
    })
    .catch(error => console.error("Error:", error));

    return false;
  }

  render() {
    const phoneNumbersIndexes = Array.from(this.state.PhoneNumbers.keys());
    const phoneInputs = phoneNumbersIndexes.map(i => 
      <div key={i} class="full">
        <label for={i}>Phone number 0{i+1}</label><label for={i} class="greyedLabel"> - optional</label><br/>
        <input class="input singleInput" type="text" id={i} name={"PhoneNumbers[" + i + "]"} value={this.state.PhoneNumbers[i]} onChange={this.handleInputChange}/>
      </div>
    );

    const addressInputs = this.state.bIncludeAddressDetails ? 
    <div>
      <div class="inputRow">
        <div class="half">
          <label for="AddressLine1">Address line 1</label><br/>
          <input class="input" type="text" id="AddressLine1" name="AddressDetails[AddressLine1]" value={this.state.AddressDetails.AddressLine1} onChange={this.handleInputChange}/>
        </div>
        <div class="half">
          <label for="AddressLine2">Address line 2</label><label for="AddressLine2" class="greyedLabel"> - optional</label><br/>
          <input class="input" type="text" id="AddressLine2" name="AddressDetails[AddressLine2]" value={this.state.AddressDetails.AddressLine2} onChange={this.handleInputChange}/>
        </div>
      </div>

      <div class="inputRow">
        <div class="quarter">
          <label for="CityTown">City/Town</label><br/>
          <input class="input" type="text" id="CityTown" name="AddressDetails[CityTown]" value={this.state.AddressDetails.CityTown} onChange={this.handleInputChange}/>
        </div>
        <div class="quarter">
          <label for="StateCounty">State/County</label><br/>
          <input class="input" type="text" id="StateCounty" name="AddressDetails[StateCounty]" value={this.state.AddressDetails.StateCounty} onChange={this.handleInputChange}/>
        </div>
        <div class="quarter">
          <label for="Postcode">Postcode</label><br/>
          <input class="input" type="text" id="Postcode" name="AddressDetails[Postcode]" value={this.state.AddressDetails.Postcode} onChange={this.handleInputChange}/>
        </div>
        <div class="quarter">
          <label for="Country">Country</label><br/>
          <input class="input" type="text" id="Country" name="AddressDetails[Country]" value={this.state.AddressDetails.Country} onChange={this.handleInputChange}/>
        </div>
      </div>
    </div>
    : 
    <div/>;

    return(
      <div class="contactUsPg">
        <h1 class="title">Contact Us</h1>
        <p class="text bold contactUsText">Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</p>

        <form action="https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit" method="POST" onSubmit={this.handleSubmit}>
          <div class="inputRow">
            <div class="half">
              <label for="full-name">Full name</label><br/>
              <input class="input" type="text" id="full-name" name="FullName" value={this.state.FullName} onChange={this.handleInputChange}/>
            </div>
            <div class="half">
              <label for="email">Email address</label><br/>
              <input class="input" type="email" id="email" name="EmailAddress" value={this.state.EmailAddress} onChange={this.handleInputChange}/>
            </div>
          </div>
          
          <div>{phoneInputs}</div>
          <button type="button" class="blueBtn formBtn" onClick={this.handleAddPhoneInput}>Add new phone number</button><br/>

          <div class="full">
            <label for="message">Message</label><label for="message" class="greyedLabel maxLengthLabel">Maximum text length is 500 characters</label><br/>
            <textarea class="input singleInput msgInput" id="message" name="Message" value={this.state.Message} onChange={this.handleInputChange}/>
          </div>
          
          <input class="checkbox" type="checkbox" id="add-address" name="bIncludeAddressDetails" checked={this.state.bIncludeAddressDetails} onChange={this.handleInputChange}/>
          <label for="add-address">Add address details</label><br/>
          <div>{addressInputs}</div>

          <input class="submitBtn" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

// Buttons

class LoginBtn extends React.Component {
  render() {
    return(
      <button type="button" class="blueBtn">Log in</button>
    );
  }
}

// Main App Components

class NavBar extends React.Component {
  render() {
    return(
      <div class="navContainer">
        <Logo class="logo"/>
        <nav class="nav">
          <Link class="link" to="/company-web-app/">HOME</Link>
          <Link class="link" to="/company-web-app/about-us">ABOUT US</Link>
          <Link class="link" to="/company-web-app/contact-us">CONTACT US</Link>
        </nav>
        <LoginBtn />
      </div>
    );
  }
}

class App extends React.Component {
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
    return(
      <div>
        <NavBar />
        <Routes>
          <Route path="/company-web-app/" element={<HomePg titles={this.state.titles} subtitles={this.state.subtitles} imageUrls={this.state.imageUrls} />} />
          <Route path="/company-web-app/about-us" element={<AboutUsPg />} />
          <Route path="/company-web-app/contact-us" element={<ContactUsPg />} />
        </Routes>
        <footer>
          <p class="footerText">Website Development by</p><p class="footerText footerUnderline">AVAMAE</p>
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