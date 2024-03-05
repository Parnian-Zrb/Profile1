import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="center">
      <Profile />
      <Contact />
      <LinkButton href={"www.google.com"} label={"Google"} />
    </div>
  );
};

export default App;
