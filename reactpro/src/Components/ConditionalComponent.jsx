import Goodbye from "./Goodbye";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;

  //   if (!display) {
  //     return (
  //       <div>
  //         <h1>coding is exciting!</h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>It can take upto 1 year to master the concepts</h1>
  //       </div>
  //     );
  //   }

  if (!display) {
    return (
      <div>
        <Welcome></Welcome>
      </div>
    );
  } else {
    return (
      <div>
        <Goodbye></Goodbye>
      </div>
    );
  }
}
