import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <PostComponent 
      name="100xDevs"
      followers= "28.3k"
      time= "12m"
      verified={true}
      description= "Helping thousands of developers learn full-stack development and build real-world projects."
      />
      <br />
      <PostComponent 
      name="Prince"
      followers= "10k"
      time= "6m"
      verified={false}
      description= "Aspiring full-stack developer documenting the journey from student to software engineer."
      />
      <br />
      <PostComponent 
      name="X"
      followers= "10M"
      time= "1m"
      verified={true}
      description= "A social media platform where people share ideas, news, updates, and conversations in real time."
      />
    </div>
  );
}


function PostComponent(props) {
  return (
    <div
      style={{
        width: 250,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          alt="profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />

        <div style={{ marginLeft: 10 }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {props.name}
            {props.verified && "✅"}
          </div>

          <div
            style={{
              fontSize: 12,
              color: "gray",
            }}
          >
            {props.followers} followers
          </div>

          <div
            style={{
              fontSize: 12,
              color: "gray",
            }}
          >
            {props.time} ago
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div
        style={{
          marginTop: 12,
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        {props.description}
      </div>
    </div>
  );
}

export default App;