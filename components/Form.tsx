import "./Form.css";

const Form = () => {
  return (
    <div>
      <form className="input">
        <input type="text" placeholder="your name" /> <br />
        <input type="Email" placeholder="your Email" />
        <br />
        <textarea placeholder=" Type your message Here" />
        <br />
        <button> Send </button>
      </form>
    </div>
  );
};

export default Form;
