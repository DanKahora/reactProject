function Hello(props) {
  return (
    <h1>
      Hello from components {props.message}{" "}
      {props.seatNumbers.map((seats, index) => (
        <li key={index}>{seats}</li>
      ))}
    </h1>
  );
}

export default Hello;
