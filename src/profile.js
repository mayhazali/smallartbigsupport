import React, {  Component  } from 'react';
import './App.css';
import './styles.css';
import HomeIcon from './Home.jpg';

class ArtistProfile extends Component {
  render(){
    return (<div>
       
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"/>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
  <link rel="stylesheet" href="styles.css"/>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"/>

  <section class="colored-section" id="navigation">
    <div class="container-fluid">

     
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            </li>
          </ul>
        </div>
      </nav>

    </div>
  </section>

  <br/>
  <section class="profile_2">
    <label for="fname">First Name</label><br/>
    <input type="text" name="fname" id="fname"/><br/><br/>
    <label for="lname">Last Name</label><br/>
    <input type="text" name="lname" id="lname"/><br/><br/>
    <label for="email">Email</label><br/>
    <input type="text" name="email" id="email"/><br/><br/>
    <label for="city">City</label><br/>
    <input type="text" name="city" id="city"/><br/><br/>
    <label for="state">State</label><br/>
    <input type="text" name="state" id="state"/><br/><br/>
    <label for="country">Country</label><br/>
    <input type="text" name="country" id="country"/><br/><br/>
    <label for="portfolio">Portfolio URL</label><br/>
    <input type="text" name="portfolio" id="portfolio"/><br/>
  </section><br/>

  <section class="profile_2">
    <span>Skills</span>
    <br/>
    <input type="checkbox" name="skill" id="portraits" value="portraits"/>
    <label for="portraits">Portraits</label>
    <input type="checkbox" name="skill" id="signs" value="signs"/>
    <label for="signs">Signs</label>
    <input type="checkbox" name="skill" id="banners" value="banners"/>
    <label for="banners">Banners</label>
    <br/>
    <input type="checkbox" name="skill" id="brochure" value="brochure"/>
    <label for="brochure">Brochure</label>
    <input type="checkbox" name="skill" id="digital" value="digital"/>
    <label for="digital">Digital Art</label>
    <input type="checkbox" name="skill" id="other" value="other"/>
    <label for="other">Other</label>
  </section><br/>

  <section class="profile_2">
    <label for="bio">Bio</label> <br/>
    <textarea id="extra" name="extra" rows="5" cols="40"></textarea>
  </section><br/>

  <section class="colored-section" id="cta">
    <button type="button" class="get-started btn btn-lg btn-dark top-btn">Save</button>
  </section>


  <footer class="white-section" id="footer">
    <div class="container-fluid">
      <i class="footer-icon fab fa-twitter"></i>
      <i class="footer-icon fab fa-facebook-f"></i>
      <i class="footer-icon fab fa-instagram"></i>
      <i class="footer-icon fas fa-envelope"></i>
      <p>© Copyright 2020</p>
    </div>
  </footer>


  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

  </div>)
  }
}
export default ArtistProfile;
