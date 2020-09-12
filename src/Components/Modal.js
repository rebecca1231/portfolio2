import React, {useEffect, useRef} from "react";
import gsap from "gsap"
import ReactDOM from "react-dom";



const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "5%",
  zIndex: 2,
  textAlign:"center",
  height:"90vh",
  width:"90vw",
  fontSize:"1rem"

};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 128, 128, .7)",
  zIndex: 2
};

const Modal = ({ description, tech, open, image, onClose }) => {
   const modRef = useRef(null)

  useEffect(() => {
gsap.from(modRef.current, {
  duration:1.5, 
  y:150,
opacity:0,
ease:"back",

})
  }, [])

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES} onPointerLeave={onClose} ref={modRef}>

<img src={image} style={{margin:"5px"}} />
       About: {description} <br/><br/>
        Tools Used: {tech} <br/><br/>
        <a className="ui basic button purple" href="/">
See Live Site </a>

          <button style={{margin:"5px"}} className="ui basic button orange" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </>,
    document.querySelector("#portal")
  );
};

export default Modal;
