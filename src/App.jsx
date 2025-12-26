import { useState } from "react";
import "./App.css";
import Users from "./components/Users";

const initialUsersList = [
  {
    id: 0,
    name: "Ramesh Kumar",
    userId: "ramesh_kumar",
    imageUri:
      "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg",
  },
  {
    id: 1,
    name: "Rahul Sharma",
    userId: "rahul.sharma",
    imageUri:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: 2,
    name: "Sanjay Verma",
    userId: "sanjay.verma",
    imageUri:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },

  {
    id: 3,
    name: "Akhila Reddy",
    userId: "akhila.reddy",
    imageUri:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 4,
    name: "Neha Singh",
    userId: "neha_singh",
    imageUri:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState(initialUsersList);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const searchResults = userList.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  const handleRemoveUser = (id) => {
    const filterData = userList.filter((item) => item.id !== id);
    setUserList(filterData);
  };

  return (
    <div className="main-container">
      <div className="instagram-card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          alt="instagram-icon"
          className="instagram-icon"
        />
        <h1>Instagram Search</h1>

        <input
          type="search"
          placeholder="search friends"
          value={search}
          onChange={handleSearch}
        />

        {searchResults.map((item) => (
          <Users usersList={item} handleRemoveUser={handleRemoveUser} />
        ))}
      </div>
    </div>
  );
}

export default App;
