import React from "react";
import { useState } from "react";
import sailogo from '../assests/sailogo.jpg';
import abhilogo from '../assests/abhilogo.png';
import khushallogo from '../assests/khushallogo.png';
import anandlogo from '../assests/anandlogo.png';
import akashlogo from '../assests/akashlogo.png';
import apurvalogo from '../assests/apurvalogo.png';
import '../App.css';

function Friends() {
  const [friends, setFriends] = useState([
    { id: 1, name: "Anand Yadav", image: anandlogo  },
    { id: 2, name: "Sai Prasad", image: sailogo  },
    { id: 3, name: "Khushal Solanki", image: khushallogo  },
    { id: 4, name: "Akash Gohil", image: akashlogo  },
    { id: 5, name: "Apurva Jain", image: apurvalogo  },
    { id: 6, name: "Abhishek Jha", image: abhilogo  }
  ]);

  const handleUnfollow = (id) => {
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return (
    <div className="friends-container" style={{marginTop:"70px"}}>
      <br></br>
      <h2>Friends List</h2>
      <br></br>
      <ul className="friends-list">
        {friends.map(friend => (
          <li key={friend.id} className="friend-item">
            <img src={friend.image} alt={friend.name} className="friend-avatar" />
            <span>{friend.name}</span>
            <button onClick={() => handleUnfollow(friend.id)} className="unfollow-button">Unfollow</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;