import { Container, makeStyles, Modal } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../App";
import ImgSlider from "./Slider";
import close from "../images/icon-close.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 550,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    outline: "none",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      hwight: "100vh",
    },
  },
}));
function LightBox() {
  const { openLight, setOpenLight } = useContext(Context);
  const classes = useStyles();
  return (
    <Modal open={openLight}>
      <Container className={classes.container}>
        <div className='light_close_container'>
          <img
            onClick={() => {
              setOpenLight(false);
            }}
            className='light_close'
            src={close}
            alt=''
          />
        </div>
        <ImgSlider />
      </Container>
    </Modal>
  );
}

export default LightBox;
