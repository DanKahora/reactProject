export default function () {
  const header = { color: "blue", fontSize: "80px" };
  return (
    <div>
      {/* <h1 style={{ color: "blue", fontSize: "80px" }}>
        {" "}
        This is inline styling
      </h1> */}
      <h1 style={header}> This is inline styling</h1>
    </div>
  );
}
