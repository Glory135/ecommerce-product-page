import React, { useContext } from "react";
import { Container, makeStyles, Modal } from "@material-ui/core";
import close from "../images/icon-close.svg";
import { Context } from "../App";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    margin: "auto",
    outline: "none",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      hwight: "100vh",
    },
  },
}));
function Menu() {
  const { openMenu, setOpenMenu } = useContext(Context);
  const classes = useStyles();
  return (
    <Modal open={openMenu}>
      <Container className={classes.container}>
        <img onClick={() => setOpenMenu(false)} src={close} alt='' />
        <div className='menu_nav_container'>
          <nav className='menu_nav'>
            <ul>
              <li className='nav_link_container'>
                <p className='nav_link'>Collections</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>Men</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>Women</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>About</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>Contact</p>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </Modal>
  );
}

export default Menu;
