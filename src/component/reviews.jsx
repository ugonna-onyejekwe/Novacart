import { icons } from "../global_components/data/info";
import client1 from "../assets/avatar-1.jpg"
import client2 from "../assets/avatar-2.jpg"
import client3 from "../assets/avatar-3.jpg"


export const Reviews = () => {
  return (
    <div className="review_section">
      <div className="box_con">
        <div className="box">
          <div className="img_con">
            <img src={client1} alt="img" />
            <h4>ugonna worth</h4>
          </div>

          <div className="txt_con">
            <div className="stars">
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.half_star_icon}
            </div>
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, accusantium aut animi id itaque sit, libero dolorum
              eius ipsa.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="img_con">
            <img src={client2} alt="img" />
            <h4>jane flex</h4>
          </div>

          <div className="txt_con">
            <div className="stars">
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.half_star_icon}
            </div>
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, accusantium aut animi id itaque sit, libero dolorum.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img_con">
            <img src={client3} alt="img" />
            <h4>jack clone</h4>
          </div>

          <div className="txt_con">
            <div className="stars">
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.full_star_icon}
              {icons.half_star_icon}
            </div>
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, accusantium aut animi id itaque sit, libero .
            </p>
          </div>
        </div>
      </div>

      <div className="comment_section">
        <h3>Add a review</h3>
        <div className="stars">
          {icons.full_star_icon}
          {icons.full_star_icon}
          {icons.full_star_icon}
          {icons.full_star_icon}
          {icons.full_star_icon}
        </div>
        <textarea placeholder="Write your comment"></textarea>
        <div className="input_con">
          <input type="text" name="name" id="name" placeholder="Your name"/>
          <input type="email" name="email" id="email" placeholder="Your email"/>
        </div>
        <button>submit review</button>
      </div>
    </div>
  );
};
