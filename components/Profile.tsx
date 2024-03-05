import "./Profile.css";

interface ProfileProps {
  name: string;
  image: string;
  skills: string;
}
const Profile = ({ name, image, skills }: ProfileProps) => {
  return (
    <div>
      <h1> Welcome to my profile</h1>
      {/* <img>My photo {image}</img> */}
      <img src="../../src/Pic.jpg" width="250" height="auto" /> {image}
      <p>my name is {name}</p>
      <h2> Skills {skills}</h2>
    </div>
    //     <div>
    //       <h1>Profile</h1>
    //       <img src="../../src/Pic.jpg" width="250" height="auto" />

    //       <h2> Skills</h2>
    //       <div>
    //         <ol>
    //           <li>Web developer </li>
    //           <li>Photography</li>
    //           <li>Design</li>
    //         </ol>
    //       </div>
    //       <h2>Biography</h2>
    //       <p>
    //         I am a web developer with experience in HTML, CSS, JavaScript and
    //         React.js. In my free time I enjoy taking photos.
    //       </p>
    //     </div>
  );
};

export default Profile;
