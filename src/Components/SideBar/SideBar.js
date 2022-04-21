import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

const SideBar = ({ menuBar }) => {
  const [height, width] = useWindowSize();

  return (
    <>
      {width >= 600 ? (
        <main>
          <div className="deskContent">
            <div className="main-fx">
              <div className="main-title">
                <h1>The Award-Winning Student Opportunity Network</h1>
              </div>
              <div className="paragraph">
                Over 6 million students use Plexuss to connect with each other, alumni, career opportunities, and FREE UNLIMITED access to professional college counselors.
              </div>
              <div>
                <button>Sign up or Free!</button>
                <button>Learn More</button>
              </div>
              <div>
                <button>Get Homework Help</button>
              </div>
            </div>
            <div className="img-fx">
              <img />
            </div>
          </div>
        </main>
      ) : (
        menuBar && (
          <main>
            <div className="mobMenu">
              <ul className="mobList">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </main>
        )
      )}
    </>
  );
};

export default SideBar;
