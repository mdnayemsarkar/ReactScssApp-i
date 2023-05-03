import React from "react";
import "./styles.scss"; // Import SCSS file

function MyComponent() {
  return (
    <>
      <body>
        <nav>
          <div className="header-logo">Nayem Sarkar</div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <section className="cntnr-hdr"> <h1>Welcome to my HTML Page</h1></section>
        <main>
        
          <section>
           
            <h2>About Me</h2>
            <p>Hi, my name is Nayem Sarkar and I'm a web developer. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente ipsam aspernatur dolorum accusantium fugiat excepturi aliquam? Praesentium debitis nemo officia ipsum ut, eligendi beatae ab quidem deserunt distinctio voluptas aliquam eius quibusdam blanditiis qui voluptatem! Voluptas repellat commodi optio. <br /><br />
            <hr />
            <h2>About Our Goal</h2>  <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque perspiciatis excepturi, rerum quis modi placeat voluptatum. Perspiciatis enim dolore eum, commodi consequuntur libero minima error accusantium illo incidunt id in voluptatem minus repudiandae quae modi eligendi tempora a asperiores sint rem magnam odit. Explicabo dolorem earum suscipit dicta iste ex in, necessitatibus quam, minima dignissimos expedita! Provident aspernatur nostrum tempora iste eligendi ipsa architecto error. Sequi odio esse, deleniti illo ipsum itaque dolor id incidunt a amet, beatae non.</p>
            
          </section>
          <section>
            <h2>My Projects</h2>
            <ul>
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
              <li>
                <a href="#">Project 3</a>
              </li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Nayem Sarkar</p>
        </footer>
      </body>
    </>
  );
}

export default MyComponent;
