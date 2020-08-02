import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-wrapper">
      <h1 className="text-center">Arkanghell Records</h1>
      <div className="logo-pic">
        <img
          alt="Logo"
          src="https://cdn.shopify.com/s/files/1/0030/9949/2398/files/20190524_021801758_iOS_180x.png?v=1558754398"
        />
      </div>
      <blockquote
        className="blockquote text-center"
        style={{
          marginTop: "100px",
        }}
      >
        <p className="mb-0">
          "Wisdom is the power to put our time and our knowledge to the proper
          use."
        </p>
        <footer className="blockquote-footer">
          <cite title="Source Title">Thomas J. Watson</cite>
        </footer>
      </blockquote>
      <div className="profile-pic">
        <img alt="profile" src="https://gdurl.com/EzTQ" />
      </div>
      <div className="summary">
        <h3 style={{ marginBottom: "20px" }}>
          Here is some text to show that there is a lot of text and so forth I
          shall write text.
        </h3>
        <ul>
          <li>Here are some bullet points</li>
          <li>Here are some bullet points</li>
          <li>Here are some bullet points</li>
          <li>Here are some bullet points</li>
        </ul>
        <p>
          Blah blah blah blah blah blah blah blah blah blah blah{" "}
          <a
            href="https://www.roblox.com/games/2057709189/Shrink-Grow-SIMULATOR?refPageId=d575da22-d877-4705-842a-eb19ce009d20"
            target="_blank"
            rel="noopener noreferrer"
          >
            cool word
          </a>{" "}
          This is also a lot of text because we need to fill a paragraph so
          check this out I'm going to write a lot of things and this is how it
          goes. Boom bang batta bap boom pow. What you gonna do about you freak?
          Get over here and try this vanilla shake that I got from walmart.
          Walmart? Why would you get a vanilla shake from walmart? Actually how
          do you even get a shake from walmart?
        </p>
        <p className="text-center">
          <Link to="/projects">See Projects</Link>
        </p>
        <p className="text-center">
          <Link to="/contact">Contact me</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
