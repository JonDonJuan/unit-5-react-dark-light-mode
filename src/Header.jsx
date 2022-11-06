import "./App.css";

function Header(props) {
  return (
    <div style={props.style}>
      {/* // header   */}

      <h1>Im a header</h1>

      {/* //title */}
      <h2>Im a title</h2>

      {/* //image */}
      <img src="https://picsum.photos/200/300" alt="random image" />
    </div>
  );
}

export default Header;
