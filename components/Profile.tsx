import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <img src="../../src/Pic.jpg" width="250" height="auto" />

      <h2> Skills</h2>
      <div>
        <ol>
          <li>Web developer </li>
          <li>Photography</li>
          <li>Design</li>
        </ol>
      </div>
      <h2>Biography</h2>
      <p>
        {" "}
        I am a web developer with experience in HTML, CSS, JavaScript and
        React.js. In my free time I enjoy taking photos.
      </p>
    </div>
  );
};

export default Profile;
