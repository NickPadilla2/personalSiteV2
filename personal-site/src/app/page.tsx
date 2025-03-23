import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div id="Hero">
        <div id="site-intro">
          <h1>Welcome</h1>
          <p>I'm Nick</p>
        </div>
        <img />
      </div>
      <div id="Projects">
        <div id="proj-intro">
          <h2>Projects</h2>
          <p>Here's some of the stuff I work on</p>
        </div>
        <div id="card-holder"></div>
        <p>If you want to see more <a>Contact Me</a></p>
      </div>
      <div id="Companies">
        <div id="companies-intro">
          <h2>Companies</h2>
          <p>Here are some places I worked</p>
        </div>
        <div id="company-holder"></div>
      </div>
      <div id="Testimonials">
        <div id="testimonials-intro">
          <h2>Testimonials</h2>
          <p>Don't take my word, see what others have to say</p>
        </div>
        <div id="review-holder"></div>
      </div>
    </div>
  );
}
