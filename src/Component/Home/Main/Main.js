import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { Margin, Search } from "@mui/icons-material";
import NativePickers from "./Date";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import Route from "../../../assets/route.svg";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  width: 170px;
  height: 40px;
  font-family: IBM Plex Sans, sans-serif;
  color: #0c0cf4;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 1140px;
  height: 280px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  width: 1140px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: start;
  align-content: space-between;
`;

export default function Main() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [firstDate, setFirsDate] = useState();
  const [secondDate, setSecondDate] = useState();
  const [adultAmount, setAdultAmount] = useState();
  const getFrom = (e) => {
    const fromData = e.target.value;
    setFrom(fromData);
  };

  const getTo = (e) => {
    const toData = e.target.value;
    setTo(toData);
  };

  const firstDateValue = (e) => {
    const getFirstDate = e.target.value;
    setFirsDate(getFirstDate);
  };

  const secondDateValue = (e) => {
    const getSecondDate = e.target.value;
    setSecondDate(getSecondDate);
  };

  return (
    <>
      <Navbar />

      <TabsUnstyled defaultValue={0} id="main">
        <TabsList>
          <Tab>FLIGHT</Tab>
          {/* <Tab>Two</Tab>
        <Tab>Three</Tab> */}
        </TabsList>
        <TabPanel value={0}>
          <form>
            <div className="line1">
              <div className="line1_1">
                <label htmlFor="">From</label>
                <br />
                <input
                  type="text"
                  name="from"
                  class="from"
                  placeholder="Type city name or airport"
                  onChange={getFrom}
                />
              </div>
              <img src={Route} alt="" />
              <div className="line1_1">
                <label htmlFor="">To</label>
                <br />
                <input
                  type="text"
                  name="from"
                  class="from"
                  placeholder="Type city name or airport"
                  onChange={getTo}
                />
              </div>
              <div className="line1_1">
                <label htmlFor="">From</label>
                <br />
                <input
                  type="date"
                  name="from"
                  class="from"
                  placeholder="Type city name or airport"
                  onChange={firstDateValue}
                />
              </div>
              <div className="line1_1">
                <label htmlFor="">From</label>
                <br />
                <input
                  type="date"
                  name="from"
                  class="from"
                  placeholder="Type city name or airport"
                  onChange={secondDateValue}
                />
              </div>
            </div>

            <div className="line2">
              <div className="line2_1">
                <h4>Adults</h4>
                <p>12+ years</p>
                <select name="" id="adult">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
              <div className="line2_1">
                <h4>Children</h4>
                <p>2-12 Years</p>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
              <div className="line2_1">
                <h4>Infants</h4>
                <p>0-23 Months</p>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>

              <div className="line2_1">
                <h4>Journey Type</h4>
                <p>1,2,3</p>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>

              <div className="line2_1">
                <h4>Cabin Class</h4>
                <p>1,2,3</p>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>

              <input
                type="submit"
                value="Search"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(from);
                  console.log(to);
                  console.log(firstDate);
                  console.log(secondDate.substring(8, 10));

                  var event = document.getElementById("adult");
                  const adultValue =
                    event.options[event.selectedIndex].innerText;
                  setAdultAmount(adultValue);
                  console.log(adultAmount);

                  axios({
                    method: "post",
                    url: "http://api.sandbox.flyhub.com/api/v1/AirSearch",
                    data: {
                      AdultQuantity: adultAmount,
                      ChildQuantity: 0,
                      InfantQuantity: 0,
                      EndUserIp: "192.168.1.1",
                      JourneyType: "1",
                      Segments: [
                        {
                          Origin: from,
                          Destination: to,
                          CabinClass: "1",
                          DepartureDateTime: firstDate,
                        },
                      ],
                    },
                    headers: { Authorization: "Bearer ..." },
                  });
                }}
              />
            </div>
          </form>
        </TabPanel>

        {/* <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel> */}
      </TabsUnstyled>
    </>
  );
}
