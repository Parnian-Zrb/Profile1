import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div>
      <form action="">
        <input type="text" value={name} placeholder="Name" />
        <input type="email" value={email} placeholder="Email" />
        <textarea
          value={message}
          placeholder="Type your message here"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
// const Form = () => {
//   return (
//     <div>
//       <form className="input">
//         <input type="text" placeholder="your name" /> <br />
//         <input type="Email" placeholder="your Email" />
//         <br />
//         <textarea placeholder=" Type your message Here" />
//         <br />
//         <button> Send </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
