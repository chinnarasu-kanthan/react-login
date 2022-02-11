import React, { useState, useEffect } from "react";


const Dashboard = () => {
  const [content, setContent] = useState("");

  
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Dashboard;