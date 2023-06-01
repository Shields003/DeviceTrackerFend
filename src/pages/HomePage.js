import React from "react";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";

const HomePage = () => {
  return (
    <div
      className="home"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 4rem); /* subtract the height of the navbar */
        width: 100vw;
        background-color: ${(props) => props.theme.primaryColor};
        position: absolute;
        top: 4rem; /* set the top position to the height of the navbar */
        left: 0;
        color: ${(props) => props.theme.textColor};
        padding: 2rem;
        text-align: center;
      `}
    >
      <h1
        css={css`
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: ${(props) => props.theme.headingColor};
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        `}
      >
        Bockscar Device Tracker
      </h1>
      <p
        css={css`
          font-size: 1.8rem;
          max-width: 800px;
          line-height: 1.5;
        `}
      >
        Welcome to the Bockscar Device Tracker. This application allows you to
        track and manage mobile devices, get real-time information, search
        device history, and more.
      </p>
      {/* <Link
        to="/dashboard"
        css={css`
          margin-top: 3rem;
          display: inline-block;
          padding: 1.5rem 3rem;
          background-color: ${(props) => props.theme.buttonColor};
          color: ${(props) => props.theme.buttonTextColor};
          font-size: 1.5rem;
          text-decoration: none;
          border-radius: 8px;
          transition: background-color 0.3s ease-in-out;

          &:hover {
            background-color: ${(props) => props.theme.buttonHoverColor};
          }
        `}
      >
        Go to Dashboard
      </Link> */}
    </div>
  );
};

export default HomePage;
