import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import Form from "./components/Form";
const App = () => {
  return (
    <div>
      <Profile name={"Parnian Zarbafian"} image={""} skills={"Web developer"} />
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
