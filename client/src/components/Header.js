import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header_app-holder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              className="header_app-holder-svg"
              d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <h3 className="header_app-holder-title">Microsoft Teams</h3>
        </div>
        <div className="header_div">
          <svg
            className="header_div-svg"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              className="fill"
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <input
            className="header_div-input"
            type="text"
            placeholder="Search"
          />
        </div>
      </header>
    );
  }
}
