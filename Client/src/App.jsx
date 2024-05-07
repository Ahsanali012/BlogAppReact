import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-screen-xl mx-auto px-2">
        <NavBar />

        <main className="mt-8 min-h-screen">
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </Provider>
  );
}

export default App;
