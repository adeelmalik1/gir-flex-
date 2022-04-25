import React from "react";
import pixelage from "../Images/pixelage.jpg";
import "./flex.css";

const Flex = () => {
  return (
    <>
 {/* <nav>
        <ul>
            <li>
                <h1>
                    <a href="index.html"><span className="fas fa-code" aria-hidden="true"></span> Jen
              Kramer</a
            >
          </h1>
        </li>
        <li><a href="index.html#projects">Projects</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="index.html#contact">Contact</a></li>
            <li>
                <a href="https://www.linkedin.com/in/jen4web/" target="_blank">
                    <span className="fab fa-linkedin" aria-hidden="true"></span>
                    <span className="sr-only">LinkedIn</span>
                </a>
            </li>
            <li>
                <a href="https://www.github.com/jen4web" target="_blank">
                    <span className="fab fa-github-square" aria-hidden="true"></span>
                    <span className="sr-only">Github</span>
                </a>
            </li>
            <li>
                <a href="https://www.dropbox.com/s/3z2hm5gu3v2lrfy/JenKramerCV.pdf?dl=0" target="_blank" className="button">Resume</a
          >
        </li>
      </ul>
    </nav>
    <div className="gradient"></div>
    <div className="section-blue">
      <section id="projects">
        <h2>About Jen Kramer</h2>
        <article>
          <div className="text">
            <h3>Just the highlights</h3>
            <p className="blackbox">
              Description of the project. This should be fairly concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              in the description. A link looks like
              <a href="https://frontendmasters.github.io/grid-flexbox-v2/"
                >this</a
              >, and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>.
                </p>
                <h4>My favorite technologies include:</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>UX</li>
                </ul>
                </div>
                <img src={pixelage}/>
                </article>
                </section>
                </div>
                <div className="gradient"></div>
                <footer>
                    <h2>Jen Kramer &middot; Educator</h2>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/jen4web" target="_blank">
                                <span className="fab fa-linkedin" aria-hidden="true"></span>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/jen4web" target="_blank">
                                <span className="fab fa-github-square" aria-hidden="true"></span>
                                <span className="sr-only">Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:jen@example.com">
                                <span className="fas fa-envelope" aria-hidden="true"></span>
                                <span className="sr-only">Email</span>
                            </a>
                        </li>
                    </ul>
                    <p><small>&copy; 2021 Jen Kramer. All rights reserved.</small></p>
                </footer> */}

                <header>
                    <nav>
                        <ul>
                            <li><h1>MyT<span>ech</span></h1></li>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Pricing</a></li>
                            <li><a className="spn-chk">Details</a></li>
                        </ul>
                    </nav>
                </header>

                <section id="mid-sec">
                    <div className="left-side">
                        <h1>Hello I'm Glad to have you guys</h1>
                        <p>This is my first ever portfolio site 
                            i hope this will help you guys alot to make descions
                            to go ahead
                        </p>
                        <h3>
                            Lets connect with me ..
                        </h3>
                        <div className="btn-sec">
                        <button>
                            Learn more
                        </button>
                        </div>
                    </div>
                    <div className="right-side">
                         <img src={pixelage}/>
                    </div>
                </section>
                <section id="sub-sec">
                    <div className="cards">
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                    </div>  
                </section>
    </>
  );
};

export default Flex;
