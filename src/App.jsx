import React from "react";
import { UserProvider } from "./context/UserContext";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import "./styles/style.css";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <h1>User List</h1>
        <SearchBar />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;