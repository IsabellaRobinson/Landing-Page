import "./style.scss";

import PrimaryNavbar from "./primaryNavbar";
import Gallery from "./gallery";
import Pitch from "./pitch";
// import Testimonials from "./testimonial";
import Plans from "./plans";
import CookieConsent from "./cookieConsent";
import setCookies from "./helpers/set-cookies";
import { useEffect, useState } from "react";


function App() {
  var [hasCookie, setHasCookie] = useState(false);

  useEffect(function(){
    var cookie = document.cookie;
    setHasCookie(cookie.includes("landingpagedemo"));
    
    if(hasCookie) {
      var cookieArray = cookie.split("; ");
      var config = cookieArray.filter(string => string.includes("acceptnecessary"));

      config = new URLSearchParams(config[0]).get("landingpagedemo");
      setCookies(JSON.parse(config));
      document.body.className = "";

  }
}, [hasCookie, setHasCookie]);
  

  return (
    <>
    <PrimaryNavbar/>
    <Gallery/>
    <Pitch/>
    {/* <Testimonials/> */}
    <Plans/>
      {hasCookie ? null : <CookieConsent/>} 
    <CookieConsent/>
    </>
  );
}

export default App;
