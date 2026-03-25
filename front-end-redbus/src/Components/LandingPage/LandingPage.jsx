import React from "react";
import Services from "./Benefits/Services";
import BusTracker from "./BusTracker/BusTracker";
import Offers from "./OffersSection/Offers";
import WhatsNew from "./WhatsNewSection/WhatsNew";
import GovernmentBuses from "./GovernmentBusesSection/GovernmentBuses";
import styles from "./LandingPage.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "../../Redux/routes/action";
import Awards from "./Awards and Recognition/Awards";
import GlobalPresence from "./Global Presence/GlobalPresence";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import RoutesModal from "./RoutesModal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LandingPage = () => {
  //modal items
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  var Routes = [
    ["Lucknow", "Faizabad", 12],
    ["Allahabad", "Lucknow", 1],
    ["Lucknow", "Allahabad", 1],
    ["Lucknow", "Delhi", 1],
  ];
  const history = useHistory();
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  const [filteredSources, setFilteredSources] = React.useState([]);
  const [filteredDestinations, setFilteredDestinations] = React.useState([]);
  const [displayDepartureDropdown, setDisplayDepartureDropdown] =
    React.useState(false);
  const [displayArrivalDropdown, setDisplayArrivalDropdown] =
    React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  const routes = useSelector((state) => state.routesReducer.routes);
  console.log("Routes are:", routes);

  const onDepartureChange = (e) => {
    let value = e.target.value;
    setDeparture(value);

    if (routes) {
      let allSources = [];
      routes.forEach((route) => {
        allSources.push(route.departureLocation.name);
        allSources = [
          ...allSources,
          route.departureLocation.name,
          ...route.departureLocation.subLocations,
        ];
      });
      allSources = Array.from(new Set(allSources));
      let filteredSources = allSources.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );
      // console.log("Can search: ", routes.length, filteredSources);
      if (filteredSources.length > 0 && value) {
        console.log("hey true");
        setFilteredSources(filteredSources);
        setDisplayDepartureDropdown(true);
      } else {
        setDisplayDepartureDropdown(false);
      }
    }
  };
  const onArrivalChange = (e) => {
    let value = e.target.value;
    setArrival(value);
    if (routes) {
      let allDestinations = [];
      routes.forEach((route) => {
        allDestinations.push(route.arrivalLocation.name);
        allDestinations = [
          ...allDestinations,
          route.arrivalLocation.name,
          ...route.arrivalLocation.subLocations,
        ];
      });
      allDestinations = Array.from(new Set(allDestinations));
      let filteredDestinations = allDestinations.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredDestinations.length > 0 && value) {
        setFilteredDestinations(filteredDestinations);
        setDisplayArrivalDropdown(true);
      } else {
        setDisplayArrivalDropdown(false);
      }
    }
  };

  return (
    <div>
      <div className={styles.LandingPage__mainBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.heroTitle}>India's No. 1 online<br/>bus ticket booking site</h1>
        </div>
        
        <div className={styles.searchContainerWrapper}>
          <div className={styles.LandingPage__form}>
            <div className={styles.inputBox}>
              <i className="fa fa-bus" style={{color: '#999', marginRight: '10px'}}></i>
              <div style={{flex: 1, position: 'relative'}}>
                <input
                  type="text"
                  placeholder="From"
                  value={departure}
                  onChange={onDepartureChange}
                  className={styles.cleanInput}
                />
                {displayDepartureDropdown ? (
                  <div className={styles.LandingPage__form__departure__dropdown}>
                    <ul>
                      {filteredSources.map((source) => (
                        <li key={source} onClick={() => { setDeparture(source); setDisplayDepartureDropdown(false); }}>
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.vDivider}></div>

            <div className={styles.inputBox}>
              <i className="fa fa-bus" style={{color: '#999', marginRight: '10px'}}></i>
              <div style={{flex: 1, position: 'relative'}}>
                <input
                  type="text"
                  placeholder="To"
                  value={arrival}
                  onChange={onArrivalChange}
                  className={styles.cleanInput}
                />
                {displayArrivalDropdown ? (
                  <div className={styles.LandingPage__form__arrival__dropdown}>
                    <ul>
                      {filteredDestinations.map((destination) => (
                        <li key={destination} onClick={() => { setArrival(destination); setDisplayArrivalDropdown(false); }}>
                          {destination}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.vDivider}></div>

            <div className={styles.inputBox}>
              <i className="fa fa-calendar" style={{color: '#999', marginRight: '10px'}}></i>
              <input
                type="date"
                placeholder="Date of Journey"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={styles.cleanInput}
              />
            </div>

            <div className={styles.vDivider}></div>

            <div className={styles.inputBox} style={{justifyContent: 'center', padding: '0 20px'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '14px', fontWeight: 'bold', color: '#4a4a4a'}}>Booking for women</span>
                <span style={{fontSize: '12px', color: '#1034d9', cursor: 'pointer'}}>Know more</span>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
          
          <button
            className={styles.searchButton}
            onClick={() => {
              let departureTemp = departure;
              let arrivalTemp = arrival;

              if (departureTemp.includes("(")) departureTemp = departureTemp.substring(departureTemp.indexOf("(") + 1, departureTemp.indexOf(")"));
              if (arrivalTemp.includes("(")) arrivalTemp = arrivalTemp.substring(arrivalTemp.indexOf("(") + 1, arrivalTemp.indexOf(")"));

              let result = false;
              for (let i = 0; i < Routes.length; i++) {
                if (Routes[i][0] == departureTemp && Routes[i][1] == arrivalTemp) result = true;
              }
              if (result == false) handleOpenModal();
              else history.push(`/select-bus?departure=${departureTemp}&arrival=${arrivalTemp}&date=${date}`);
            }}
          >
            SEARCH BUSES
          </button>
        </div>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModal}>
            <div className={classes.paper}>
              <p id="transition-modal-description">
                <RoutesModal />
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
      <Offers />
      <WhatsNew />
      <GovernmentBuses />
      <Services />
      <Awards />
      {/* <Awards /> */}
      <GlobalPresence />
    </div>
  );
};

export default LandingPage;
