import React, { useState } from "react";
import NavBar from "./assets/NavBar";
import News from "./assets/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";

const App = () => {
  const pagesize = 5;
  const apiKey = import.meta.env.VITE_REACT_NEWS_APIKEY;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          height="3"
          color="#f11946"
          progress={progress}
          apiKey={apiKey}
          // onLoaderFinished={() => setProgress(0)}
        />
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="in"
                pagesize="5"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="in"
                pagesize="5"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="in"
                pagesize="5"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="in"
                pagesize="5"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="in"
                pagesize="5"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="in"
                pagesize="5"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="in"
                pagesize="5"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
