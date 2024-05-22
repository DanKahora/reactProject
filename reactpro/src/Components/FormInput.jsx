import { useState } from "react";

export default function FormInput() {
  //   const [name, setName] = useState("");
  //   function handleChange(e) {}
  //   return (
  //     <div>
  //       <form>
  //         <input
  //           onChange={(e) => setName(e.target.value)}
  //           type="text"
  //           value={name}
  //         />
  //       </form>
  //     </div>
  //   );

  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleChange(e) {}
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
