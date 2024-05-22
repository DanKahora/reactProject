export default function (EvenHandling) {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}> Submit</button>
    </div>
  );
}
