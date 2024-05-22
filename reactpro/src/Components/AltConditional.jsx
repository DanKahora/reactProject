export default function AltConditional(params) {
  let message;
  const display = true;

  if (!display) {
    message = <h1>Learn to code</h1>;
  } else {
    message = <h1>Start with HTML</h1>;
  }
  return message;
}
