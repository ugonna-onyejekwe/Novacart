import { blog } from "../../global_components/data/info";
import "./blog.scss"

export const Blog = () => {
    window.scroll(0, 0);

    return (
      <div className="blog_section">
        <div className="heading">
          <div className="container">
            <h2>home</h2>
            <h2>/</h2>
            <h2>latest blog</h2>
         
          </div>
        </div>

            <div className="wrapper container">
                {blog.map((i, key) => {
                    return (
                      <div className="box" key={key}>
                        <div className="img_con">
                          <img src={i.img} alt="img" />
                          <div className="date">{i.date}</div>
                        </div>
                        <div className="txt_con">
                          <h3>{i.title}</h3>
                          <p className="txt">{i.description}</p>
                          <button>continue reading</button>
                        </div>
                      </div>
                    );
                })}
            </div>
      </div>
    );
}