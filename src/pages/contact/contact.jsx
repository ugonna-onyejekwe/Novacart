import { icons } from "../../global_components/data/info";
import "./contact.scss";

export const Contact = () => {
    window.scroll(0, 0);

  return (
    <div className="contact_section">
      <div className="heading">
        <div className="container">
          <h2>home</h2>
          <h2>/</h2>
          <h2>contact us</h2>
        </div>
      </div>

      <div className="wrapper container">
        <div className="txt_con">
          <h5>get in touch</h5>
          <h3>visit one of our agency location or contact us today</h3>

          <h4>head office</h4>
          <p>{icons.location_icon}7 lekki, lagos</p>
          <p>{icons.mail2_icon} novacart@gmail.com</p>
          <p>{icons.phone_icon}+234 8101 3308 34</p>
          <p>{icons.time_icon} monday to saturday 6:00am to 11:00pm</p>
        </div>
        <form action="#">
          <div className="input_con">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email"  required/>
          </div>

          <textarea placeholder="Your message" required></textarea>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
