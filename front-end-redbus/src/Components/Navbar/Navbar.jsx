import React from "react";
import styles from "./Navbar.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFailure,
  logout,
  addCustomerMongo,
} from "../../Redux/auth/actions";
import ComingSoonModal from "../../Elements/ComingSoonModal";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  const setIsOpen = (bool) => {
    setIsModelOpen(bool);
  };
  console.log("Here: ", isLoggedIn, currentCustomer);
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className={styles.Navbar}>
      <ComingSoonModal isOpen={isModelOpen} setIsOpen={setIsModelOpen} />
      <div className={styles.leftSide_header}>
        <img
          src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
          alt="logo"
          onClick={() => history.push("/")}
          className={styles.logo}
        />
        <ul className={styles.Navbar__listOne}>
          <li className={location.pathname === '/' ? styles.activeLink : ''}>
            <div className={styles.iconWrapper}><img src="https://st.redbus.in/web/images/layout/rb_vertical.svg" alt="Bus" /></div>
            <Link to="/">Bus tickets</Link>
          </li>
          <li 
            className={location.pathname === '/train-tickets' ? styles.activeLink : ''} 
            onClick={() => history.push('/train-tickets')}
            style={{ padding: '0 20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className={styles.iconWrapper}><img src="https://st.redbus.in/web/images/layout/ryde_vertical.svg" alt="Train" /></div>
            Train tickets
          </li>
        </ul>
      </div>
      <ul className={styles.Navbar__listTwo}>
        <div className={styles.rightSide_header}>
          <li onClick={() => setIsOpen(true)} className={styles.navItemRight}>
            <span className={styles.navIcon}>☰</span> Bookings
          </li>
          <li onClick={() => setIsOpen(true)} className={styles.navItemRight}>
            <span className={styles.navIcon}>?</span> Help
          </li>
          <li className={styles.navItemRight}>
            <div className={styles.accountDropdown}>
              <span className={styles.navIcon}><MdAccountCircle style={{fontSize: "24px"}} /></span> Account
              <RiArrowDropDownLine className={styles.icons} onClick={handleClick2} />

              {isLoggedIn && currentCustomer ? (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>My Trips</MenuItem>
                  <MenuItem onClick={handleClose2}>Wallet/Cards</MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <Link to="/my-profile" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>My Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>SignOut</MenuItem>
                </Menu>
              ) : (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={() => { handleClose2(); setIsOpen(true); }}>
                    Sign In / Register
                  </MenuItem>
                </Menu>
              )}
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
