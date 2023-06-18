import React, { useState } from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Welcome to our MED_CART"
    };
  }

  changeText() {
    this.setState({ heading: "मेड_कार्ट में आपका स्वागत है।" });
  }

  render() {
    return (
      <div>
        {/* HEADER */}
        <header>
          
          <div className="banner">
            <span className="section-left">
              <a href="emailto:">email@example.com</a>
              <a href="tel:">+(91)-XXXXX XXXXX</a>
            </span>
            <span className="section-right">
              <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" title="Instagram"><i className="fa fa-instagram"></i></a>
              <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
            </span>
          </div>

          <div className="logo parallelogram">
            <span className="skew-fix">
              <img src="https://marketplacer.imgix.net/-8/V3iOoKAJowY2jdlqiA-xJ7RTw.png?auto=format&fm=png&fit=max&lossless=true&class=HeroSearch-logo&alt=&s=83532b18cf7934ebd5fb42da84995b8f" alt="MEDCART" />
            </span>
          </div>

          <div className="topnav" id="myTopnav">
            <a href="#" className="active">HOME</a>
            <a href="#gallery">GALLERY</a>
            <a href="#blog">BLOG</a>
            <div className="dropdown">
              <button className="dropbtn">SERVICES
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content animate">
                <a href="#">Expert Doctor Services</a>
                <a href="#">Emergency Services</a>
                <a href="#">Home Care</a>
                <a href="#">Diagnostic and Support Services</a>
                <a href="#">Mental Wellness</a>
                <a href="#">Diet and Nutritions</a>
                <a href="#">Dental care</a>
                <a href="#">Physiotherapy</a>
              </div>
            </div>
            <a href="#contact">CONTACT</a>
            <a href="#about">ABOUT</a>
            
            <a href="#" title="SignIn" style={{ float: 'right' }}><i className="fa fa-user"></i></a>
            <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="icon" onClick="myFunction()">&#9776;</a>
          </div>
        </header>

        {/* CONTAINER */}
        <div className="container">
          <section>
            <em>WELCOME TO MED_CART</em>
            <h1 id="heading">{this.state.heading}</h1>
            <button onClick={() => this.changeText()}>Click to Change Heading</button>

            <h1>Take the world's best quality Treatment</h1>
            <h4>All Healthspring Doctors come with a wealth of experience in their respective domains. Each of them with years of clinical experience having worked at hospitals, corporates or as entrepreneurs.</h4>
            <a href="#" className="btn1">Learn More</a>
          </section>
        </div>

        {/* SECTION1 */}
        <section className="section1">
        <table>
        <tr>
          <td>
            <div className="form">
              <h4>REQUEST FOR YOUR</h4>
              <h1>Consultation</h1>
              <input type="text" name="fname" id="fname" placeholder="Name" maxLength="60" required />
              <input type="email" name="email" id="email" placeholder="Email" maxLength="100" required />
              <input type="date" name="date" id="date" placeholder="" required />
              <select name="service">
                <option value="emergencyservice">Emergency Service</option>
                <option value="certifiedservice">Certified Service</option>
              </select>
              <button type="submit" className="btn2">BOOK APPOINTMENT</button>
            </div>
          </td>
          <td>
            <em>ABOUT US</em>
            <h1>Get better care for your health</h1>
            <p>Our Doctors spend as much time with you, as is necessary to understand all your health related problems, arrive at a proper diagnosis and recommend a line of treatment. You can ask as many questions to our Doctors and they will be happy to answer those.</p>
            <p>Healthspring members have access to a doctor 24x7, face-to-face and over a call, especially in case of a medical emergency, wherein our doctor reaches your place in the shortest time possible with an Ambulance and a fully-equipped medical emergency kit. </p>
          </td>
        </tr>
      </table>
    </section>

        {/* SECTION2 */}
        <section className="section2">
          {/* updated */}
          
          {/* updated */}
      <div className="cards">
        <div className="card">
          <i className="fa fa-medkit"></i>
          <h1>Qualified Doctors</h1>
          <p>Our Doctors spend as much time with you, as is necessary to understand all your health related problems, arrive at a proper diagnosis and recommend a line of treatment. You can ask as many questions to our Doctors and they will be happy to answer those.</p>
        </div>
        <div className="card">
          <i className="fa fa-certificate"></i>
          <h1>Certified Services</h1>
          <p>Healthspring members have access to a doctor 24x7, face-to-face and over a call, especially in case of a medical emergency, wherein our doctor reaches your place in the shortest time possible with an Ambulance and a fully-equipped medical emergency kit.</p>
        </div>
        <div className="card">
          <i className="fa fa-stethoscope"></i>
          <h1>Advanced Equipment</h1>
          <p>Our Doctors spend as much time with you, as is necessary to understand all your health related problems, arrive at a proper diagnosis and recommend a line of treatment. You can ask as many questions to our Doctors and they will be happy to answer those.</p>
        </div>
        <div className="card">
          <i className="fa fa-heartbeat"></i>
          <h1>Emergency Service</h1>
          <p>Hospitals have emergency departments that provide immediate medical attention to individuals with severe injuries, sudden illnesses, or life-threatening conditions.</p>
        </div>
      
      </div>

      </section>

        {/* SECTION3 */}
        <Section3 />

        {/* SECTION4 */}
        <Section4 />

        <section>
          {/* updated */}
          <div class="modal fade opacity-animate" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content text-center">
        <div class="modal-header border-bottom-0 ">
          <h2 class="modal-title" id="exampleModalLabel">Details</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="form-group">
              <label for="name">Name<sup class="text-danger">*</sup></label>
              <input type="text" class="form-control" placeholder="Enter your name" required/>
            </div>
            <div class="form-group">
              <label for="email1">Email address<sup class="text-danger">*</sup></label>
              <input type="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter your email" required/>
              <small id="emailHelp" class="form-text text-muted">Your information is safe with us.</small>
            </div>
           
            <div class="form-group">
              <label for="address">Address<sup class="text-danger">*</sup></label>
              <input type="text" class="form-control" placeholder="Enter your address" required/>
            </div>
            <div class="form-group">
              <label for="phone">Phone no.<sup class="text-danger">*</sup></label>
              <input type="text" class="form-control" placeholder="Enter your phone no." required/>
            </div>
          </div>
          <div class="modal-footer border-top-0 d-flex justify-content-center">
            <button class="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancel</button>
            <button type="submit" class="btn btn-primary">Proceed</button>
          </div>
        </form>
      </div>
    </div>
  </div>


  <div class="dropdown text-left m-5 cart"/>
    <button class="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown">
        <i class="fas fa-shopping-cart fa-2x"></i><sub id="clickme">0</sub>
        <span class="caret "></span>
    </button>
    <ul class="dropdown-menu">
      <li class="ml-3" id="item">Item</li>  
      <li class="ml-2" id="item">
        <a href="#">
          <span class="empty">Your cart is empty.</span>
         <span class="product"></span><span class="selectedPrice"></span> <img class="selectedImage"/>
        </a>
        <div class="number">
          <span class="minus">-</span>
          <input type="text" value="1" name="numberOfProducts" class="input"/>
          <span class="plus">+</span>
        </div>
        
       </li>
      <span id="total"></span><span id="cost"></span>
      <div class="button">
          <button class="btn place" data-toggle="modal" data-target="#form">Place order</button>
        </div>
    </ul>

    {/* <!-- card layout  --> */}
    <div class="container">
        <div class="row">
            <div class="col-8 d-flex justify-content-center">
                <div class="card1">
                    <div class="imgBox">
                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0252/0904/5067/products/PrakharSangdhigata.png?v=1659946501" alt="nike101" border="0"/></a>
                    </div>
                    <div class="contentBx">
                        <h3 class="productName">Item1</h3>
                        <h2 class="price">₹<span class="productPrice">250</span></h2>
                        <a href="#" class="buy">Buy Now</a>
                        <a href="#" class="remove">Remove</a>
                    </div>
                  <div class="inside">
                      <div class="icon"><i class="material-icons">info_outline</i></div>
                      <div class="contents">
                        <h2>Description:</h2>
                        <p>Zandu Joint Pain Reliever for Chronic Pain (Prakhar Sandhigata Pida har Vati) is effective in overcoming extreme joint pains. This Ayurvedic supplement also helps in reducing inflammation and keeps your bones and joints healthy.</p><br></br>
                        <h2>How to Use</h2>
                        <p>Take 1 tablet twice a day, or as directed as physician.</p>
                      </div>
                    </div>
                </div>
                <div class="card1">
                    <div class="imgBox">
                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0252/0904/5067/products/PrakharSangdhigata.png?v=1659946501" alt="nike101" border="0"/></a>
                    </div>
                    <div class="contentBx">
                        <h3 class="productName">Item1</h3>
                        <h2 class="price">₹<span class="productPrice">250</span></h2>
                        <a href="#" class="buy">Buy Now</a>
                        <a href="#" class="remove">Remove</a>
                    </div>
                  <div class="inside">
                      <div class="icon"><i class="material-icons">info_outline</i></div>
                      <div class="contents">
                        <h2>Description:</h2>
                        <p>Zandu Joint Pain Reliever for Chronic Pain (Prakhar Sandhigata Pida har Vati) is effective in overcoming extreme joint pains. This Ayurvedic supplement also helps in reducing inflammation and keeps your bones and joints healthy.</p><br></br>
                        <h2>How to Use</h2>
                        <p>Take 1 tablet twice a day, or as directed as physician.</p>
                      </div>
                    </div>
                </div>
                <div class="card1">
                    <div class="imgBox">
                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0252/0904/5067/products/PrakharSangdhigata.png?v=1659946501" alt="nike101" border="0"/></a>
                    </div>
                    <div class="contentBx">
                        <h3 class="productName">Item1</h3>
                        <h2 class="price">₹<span class="productPrice">250</span></h2>
                        <a href="#" class="buy">Buy Now</a>
                        <a href="#" class="remove">Remove</a>
                    </div>
                  <div class="inside">
                      <div class="icon"><i class="material-icons">info_outline</i></div>
                      <div class="contents">
                        <h2>Description:</h2>
                        <p>Zandu Joint Pain Reliever for Chronic Pain (Prakhar Sandhigata Pida har Vati) is effective in overcoming extreme joint pains. This Ayurvedic supplement also helps in reducing inflammation and keeps your bones and joints healthy.</p><br></br>
                        <h2>How to Use</h2>
                        <p>Take 1 tablet twice a day, or as directed as physician.</p>
                      </div>
                    </div>
                </div>
                <div class="card1">
                    <div class="imgBox">
                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0252/0904/5067/products/PrakharSangdhigata.png?v=1659946501" alt="nike101" border="0"/></a>
                    </div>
                    <div class="contentBx">
                        <h3 class="productName">Item1</h3>
                        <h2 class="price">₹<span class="productPrice">250</span></h2>
                        <a href="#" class="buy">Buy Now</a>
                        <a href="#" class="remove">Remove</a>
                    </div>
                  <div class="inside">
                      <div class="icon"><i class="material-icons">info_outline</i></div>
                      <div class="contents">
                        <h2>Description:</h2>
                        <p>Zandu Joint Pain Reliever for Chronic Pain (Prakhar Sandhigata Pida har Vati) is effective in overcoming extreme joint pains. This Ayurvedic supplement also helps in reducing inflammation and keeps your bones and joints healthy.</p><br></br>
                        <h2>How to Use</h2>
                        <p>Take 1 tablet twice a day, or as directed as physician.</p>
                      </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
          {/* updated */}
        </section>

        {/* FEEDBACK FORM */}
        <FeedbackForm />



        <footer>
        <div className="column">
          <a className="footer_title">MED_CART</a>
          <a>
            Hospital services refer to the range of medical, diagnostic, therapeutic, and supportive services provided by hospitals to patients.
          </a>
          <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
          <a href="#" title="Instagram"><i className="fa fa-instagram"></i></a>
          <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
        </div>
        <div className="column">
          <a className="footer_title">OTHER LINKS</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Ticket</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="column">
          <a className="footer_title">SHORT CUT</a>
          <a href="">Our Services</a>
          <a href="">Our Blog</a>
          <a href="">Our Projects</a>
          <a href="">About Us</a>
        </div>
        <div className="column">
          <a className="footer_title">LATEST NEWS</a>
          <a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,trees" alt="" /></a>
          <a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,tree" alt="" /></a>
          <a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,plant" alt="" /></a>
          <a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,forest" alt="" /></a>
          <a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,afforestation" alt="" /></a>
        </div>
        <div className="column">
          <a className="footer_title">GET IN TOUCH</a>
          <a title="Address"><i className="fa fa-map-marker"></i> 007, Mumbai, Maharashtra, India - 111222</a>
          <a href="emailto:" title="Email"><i className="fa fa-envelope"></i> email@serviceprovider.domain</a>
          <a href="tel:" title="Contact"><i className="fa fa-phone"></i> +(x)-98765 43210</a>
        </div>

        <div className="sub-footer">
          © CopyRights 2023 Med_Cart || All rights reserved
        </div>
      </footer>
      </div>

      
    );
  }
}

const Section3 = () => {
    const addHighlight = () => {
      const subtitle = document.getElementById("subtitle");
      subtitle.classList.add("highlight");
    }
  
    const removeHighlight = () => {
      const subtitle = document.getElementById("subtitle");
      subtitle.classList.remove("highlight");
    }
  
    return (
      <section className="section3">
        <div className="cards">
          <div className="card">
            <section>
              <h1>Laboratory Services</h1>
              <h4>Hospitals have specialized units for patients requiring intensive care, such as those with critical injuries, severe illnesses, or in need of close monitoring. ICUs provide advanced life support and specialized medical equipment.</h4>
            </section>
          </div>
          <div className="card">
            <section>
              <h1>General Treatment</h1>
              <h4>Hospitals have various diagnostic departments equipped with advanced medical technology. These include radiology (X-rays, CT scans, MRI), laboratory services (blood tests, cultures), pathology, and other imaging or diagnostic procedures.</h4>
            </section>
          </div>
          <div className="card">
            <section>
              <h1>Orthopedician</h1>
              <h4>It's important to note that the availability of specific services may vary depending on the hospital's size, specialization, and location.</h4>
            </section>
          </div>
        </div>
        <div className="content">
          <h1>We are well experienced doctors</h1>
          <p id="subtitle">Hospitals have operating rooms where surgical procedures are performed, ranging from routine surgeries to complex interventions. This can include general surgeries, orthopedic procedures, neurosurgery, cardiovascular surgery, and more.</p>
          <button onClick={addHighlight}>Highlight Subtitle</button>
          <button onClick={removeHighlight}>Remove Highlight</button>
        </div>
      </section>
    );
  }

const Section4 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const showSlide = (slideNumber) => {
      setCurrentSlide(slideNumber);
    };
  
    const plusSlides = (slideNumber) => {
      setCurrentSlide(currentSlide + slideNumber);
    };
  
    return (
      <section className="section4">
        <div className="title_header">
          <h1>Our Gallery Portfolio</h1>
        </div>
        <div className="row">
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 1" />
          </div>
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 2" />
          </div>
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 3" />
          </div>
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 4" />
          </div>
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 5" />
          </div>
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 6" />
          </div>
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 7" />
          </div>
          <div className="column">
            <img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{ width: '100%' }} onClick={openModal} className="hover-shadow cursor" alt="Image 8" />
          </div>
          {/* Add more columns with images */}
        </div>
  
        {/* Modal */}
        {modalOpen && (
          <div id="myModal" className="modal">
            <span className="close cursor" onClick={closeModal}>&times;</span>
            <div className="modal-content">
              {/* Add modal slides */}
            </div>
          </div>
        )}
      </section>
    );
  }

const FeedbackForm = () => {
  return (
    <section>
      <h2>Feedback Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>

    
  );
};

export default Home;
