import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import Form from "./components/Form";
const App = () => {
  return (
    <div className="center">
      <Profile />
      <Form />
      <LinkButton href={"www.google.com"} label={"Google"} />
    </div>
  );
};

export default App;
