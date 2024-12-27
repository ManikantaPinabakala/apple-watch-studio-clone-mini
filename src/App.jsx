import { Component } from "react";

import { FaAngleDown } from "react-icons/fa6";

import appleLogo from "./images/apple-logo.jpeg";
import mainCase from "./images/apple-main-case.png";
import mainBand from "./images/apple-main-band.jpeg";
import mainSideView from "./images/main-watch-side-view.jpeg";

import "./App.css";

const sizeList = ["42mm", "46mm"];
const caseList = ["Aluminum", "Titanium"];
const bandList = [
  "Stainless Steel",
  "Sport Loop",
  "Sport Band",
  "FineWoven",
  "Braided Solo Loop",
  "Solo Loop",
  "Nike Sport Loop",
  "Nike Sport Band",
];

class App extends Component {
  state = {
    hasStarted: false,
    view: "front",
    rotating: false,
    showSizes: false,
    showCases: false,
    showBands: false,
    activeSize: "46mm",
    activeCase: "Aluminum",
    activeBand: "Solo Loop",
  };

  onGetStarted = () => {
    this.setState({ hasStarted: true });
  };

  toggleView = () => {
    this.setState({ rotating: true }); // Trigger animation

    // Switch view after animation completes
    setTimeout(() => {
      this.setState((prevState) => ({
        view: prevState.view === "front" ? "side" : "front",
        rotating: false, // Reset animation state
      }));
    }, 500); // Match the animation duration
  };

  toggleSizesOn = () => {
    this.setState({ showSizes: true });
  };

  toggleCasesOn = () => {
    this.setState({ showCases: true });
  };

  toggleBandsOn = () => {
    this.setState({ showBands: true });
  };

  toggleSizes = () => {
    this.setState((prevState) => ({ showSizes: !prevState.showSizes }));
  };

  toggleCases = () => {
    this.setState((prevState) => ({ showCases: !prevState.showCases }));
  };

  toggleBands = () => {
    this.setState((prevState) => ({ showBands: !prevState.showBands }));
  };

  setActiveSize = (event) => {
    this.setState({ activeSize: event.target.id });
  };

  setActiveCase = (event) => {
    this.setState({ activeCase: event.target.id });
  };

  setActiveBand = (event) => {
    this.setState({ activeBand: event.target.id });
  };

  render() {
    const {
      hasStarted,
      view,
      rotating,
      showSizes,
      showCases,
      showBands,
      activeSize,
      activeCase,
      activeBand,
    } = this.state;

    return (
      <div className="initial-header p-8 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <a
            href="https://www.apple.com/shop/buy-watch/apple-watch"
            target="_blank"
          >
            <img src={appleLogo} alt="website logo" className="w-24" />
          </a>
          <p
            className={`flex flex-row items-center gap-2 text-base ${
              hasStarted ? "" : "hidden"
            }`}
          >
            Collections
            <span className="text-xs">
              <FaAngleDown />
            </span>
          </p>
          <button
            className={`px-4 py-2 bg-blue-600 text-white font-light rounded-3xl self-start text-xs ${
              hasStarted ? "" : "hidden"
            }`}
          >
            Save
          </button>
        </div>
        {hasStarted ? (
          <div className="flex flex-col items-center">
            <div
              className={`image-container-small self-center mt-10 ${
                rotating ? "rotate" : ""
              }`}
            >
              {view === "front" ? (
                <>
                  <img
                    src={mainBand}
                    alt="Background Image"
                    className="image-background-small"
                  />
                  <img
                    src={mainCase}
                    alt="Foreground Image"
                    className="image-foreground-small"
                  />
                </>
              ) : (
                <img
                  src={mainSideView}
                  alt="Sideview Image"
                  className="sideview-image"
                />
              )}
            </div>
            <div className="flex-grow flex flex-col justify-between self-center text-center mt-6">
              <a
                href="#"
                className="text-xs text-blue-600 underline"
                onClick={this.toggleView}
              >
                {view === "front" ? "Side" : "Front"} view
              </a>
              <p className="text-gray-500 font-semibold text-xs mt-3">
                APPLE WATCH SERIES 10
              </p>
              <p className="text-sm font-semibold mt-2">
                {activeSize} Jet Black {activeCase} Case with Black {activeBand}
              </p>
              <p className="font-light text-sm mt-2">
                From {activeCase === "Aluminum" ? "$429" : "$799"}
              </p>
              <div className="flex-grow mt-12 flex flex-row justify-center gap-4 design-studio-footer">
                <div className="flex items-center gap-2 bg-slate-300 px-5 py-2.5 rounded-3xl cursor-pointer hover:bg-slate-400 transition-colors duration-300">
                  <svg
                    height="25"
                    viewBox="0 0 19 25"
                    width="19"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.toggleSizes}
                  >
                    <path d="m0 0h19v25h-19z" fill="none"></path>
                    <path
                      d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
                      fill="#1d1d1f"
                    ></path>
                  </svg>
                  {showSizes ? (
                    <div
                      className={`flex flex-row items-center gap-4 bg-transparent rounded-lg transition-transform duration-500 ease-in-out ${
                        showSizes
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      {sizeList.map((eachSize) => (
                        <button
                          key={eachSize}
                          id={eachSize}
                          onClick={this.setActiveSize}
                          className={`${
                            activeSize === eachSize ? "font-semibold" : ""
                          }`}
                        >
                          {eachSize}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button onClick={this.toggleSizesOn}>Size</button>
                  )}
                </div>
                <div className="flex items-center gap-2 bg-slate-300 px-5 py-2.5 rounded-3xl cursor-pointer hover:bg-slate-400 transition-colors duration-300">
                  <svg
                    height="25"
                    viewBox="0 0 17 25"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.toggleCases}
                  >
                    <path d="m0 0h17v25h-17z" fill="none"></path>
                    <path
                      d="m16 8.2017c-.1665-.1801-.385-.2703-.6553-.2703h-.3447v-.0225c0-2.2253-1.804-4.0293-4.0293-4.0293h-6.9414c-2.2253.0001-4.0293 1.804-4.0293 4.0294v8.9414c0 2.2253 1.804 4.0293 4.0293 4.0293h6.9414c2.2253 0 4.0293-1.804 4.0293-4.0293v-5.1904h.3447c.2703 0 .4888-.0923.6553-.277.1667-.1844.25-.4254.25-.7227v-1.7427c0-.2972-.0833-.5356-.25-.7159zm-2 8.6487c0 1.6704-1.3589 3.0293-3.0293 3.0293h-6.9414c-1.6704 0-3.0293-1.3589-3.0293-3.0293v-8.9414c0-1.6704 1.3589-3.0293 3.0293-3.0293h6.9414c1.6704 0 3.0293 1.3589 3.0293 3.0293z"
                      fill="#1d1d1f"
                    ></path>
                  </svg>
                  {showCases ? (
                    <div
                      className={`flex flex-row items-center gap-4 bg-transparent rounded-lg transition-transform duration-500 ease-in-out ${
                        showCases
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      {caseList.map((eachCase) => (
                        <button
                          key={eachCase}
                          id={eachCase}
                          onClick={this.setActiveCase}
                          className={`${
                            activeCase === eachCase ? "font-semibold" : ""
                          }`}
                        >
                          {eachCase}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button onClick={this.toggleCasesOn}>Case</button>
                  )}
                </div>
                <div className="flex items-center gap-2 bg-slate-300 px-5 py-2.5 rounded-3xl cursor-pointer hover:bg-slate-400 transition-colors duration-300">
                  <svg
                    height="25"
                    viewBox="0 0 10 25"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.toggleBands}
                  >
                    <path d="m0 0h10v25h-10z" fill="none"></path>
                    <path
                      d="m9.5 22.5a.5.5 0 0 1 -.5.5h-8a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-6.2216a4.5231 4.5231 0 0 0 1 .9448v5.2768a1.4779 1.4779 0 0 1 -.0813.485h5.1627a1.4758 1.4758 0 0 1 -.0814-.485v-5.2768a4.5209 4.5209 0 0 0 1-.9448v6.2216a.4851.4851 0 0 0 .4851.485h.0149a.5.5 0 0 1 .5.5zm-1.9194-19.5h-5.1621a1.4732 1.4732 0 0 1 .0815.485v9.015a2.5 2.5 0 0 0 5 0v-9.015a1.4873 1.4873 0 0 1 .0806-.485m1.4194-1a.5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5h-.015a.485.485 0 0 0 -.485.485v9.015a3.5 3.5 0 0 1 -3.5 3.5 3.5 3.5 0 0 1 -3.5-3.5v-9.015a.485.485 0 0 0 -.485-.485h-.015a.5.5 0 0 1 0-1zm-3.2179 10.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75z"
                      fill="#1d1d1f"
                    ></path>
                  </svg>
                  {showBands ? (
                    <div
                      className={`flex flex-row items-center gap-4 bg-transparent rounded-lg transition-transform duration-500 ease-in-out ${
                        showBands
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      {bandList.map((eachBand) => (
                        <button
                          key={eachBand}
                          id={eachBand}
                          onClick={this.setActiveBand}
                          className={`${
                            activeBand === eachBand ? "font-semibold" : ""
                          }`}
                        >
                          {eachBand}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button onClick={this.toggleBandsOn}>Band</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-16 flex flex-col w-[55vw] justify-center self-center">
            <p className="text-2xl mb-4">Apple Watch Studio</p>
            <h1 className="text-6xl font-[550] tracking-tight greeting-text">
              Choose a case.
              <br />
              Pick a band.
              <br />
              Create your own style.
            </h1>
            <button
              className="px-8 py-2.5 mt-8 bg-blue-600 text-white font-light rounded-3xl self-start"
              onClick={this.onGetStarted}
            >
              Get started
            </button>
            <div className="image-container">
              <img
                src={mainBand}
                alt="Background Image"
                className="image-background"
              />
              <img
                src={mainCase}
                alt="Foreground Image"
                className="image-foreground"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
