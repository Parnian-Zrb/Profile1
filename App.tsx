import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import Form from "./components/Form";
import Pic from "./Pic.jpg";

const App = () => {
  return (
    <div>
      <Profile name={"Parnian Zarbafian"} image={Pic} bio={"Web developer"} />
      <Form />
      <LinkButton
        href={"https://www.linkedin.com/in/parnian-zarbafian/"}
        label={"LinkedIn"}
      />
      <LinkButton href={"https://github.com/Parnian-Zrb/"} label={"GitHub"} />
      <LinkButton href={"../../src/Resume.pdf"} label={"Resume"} />
    </div>
  );
};

export default App;
