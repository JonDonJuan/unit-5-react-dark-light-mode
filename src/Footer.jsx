import "./App.css";

const timeNow = new Date().toLocaleTimeString();

function Footer(props) {
  return (
    <footer style={props.styleMode}>
      <p>Jonathan Huggins created this monstrosity © 2022 @ this time <span className="time"> {timeNow} </span></p>
    </footer>
  );
}

export default Footer;
