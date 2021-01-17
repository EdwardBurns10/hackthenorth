import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import { Container, Grid, Card, CardContent, Typography, Slider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { render } from 'react-dom';

const localizer = momentLocalizer(moment);

const Content = styled.div`
  && {
    margin: 0 3% 0 3%;
  }
`
const Name = styled.h2`
  && {
    font-size: 20px;
    position: absolute;
    left: 0;
    color: black;
  }
`
const Subtitle = styled.p`
  && {
    font-size: 10px;
    position: absolute;
    left: 0;
    padding-top: 35px;
    color: black;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 10px;
`
const Headerline = styled.hr`
  && {
    //width: 100%;
    margin-bottom: 20px;
    border: 1px solid #F2F2F2;
  }
`
const Widget1 = styled(Card)`
  && {
    //width: 100%;
    text-align: center;
    //margin: 3px 0px 3px 0px;
    //padding-right: 10px;
    //padding-left: 10px;
    //padding: 0 5px 0 5px;
    h3 {
      margin-top: 0px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    h4 {
      margin-top: 0px;
      font-size: 11px;
      color: #8A8A8A;
    }
    p {
      font-size: 18px;
      color: #8A8A8A;
    }
  }
`
const Widget2 = styled(Card)`
  && {
    width: 100%;
    min-height: 55vh;
    text-align: center;
    margin: 3px 0px 3px 0px;
    //padding: 0 5px 0 5px;
    margin-top: 15px;
    h3 {
      margin-top: 0px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    h4 {
      margin-top: 0px;
      font-size: 11px;
      color: #8A8A8A;
    }
    p {
      font-size: 18px;
      color: #8A8A8A;
    }
  }
`
const Widget3 = styled(Card)`
  && {
    min-height: 55vh;
    text-align: center;
    margin-top: 15px;
    margin: 3px 8px 3px 8px;
    padding: 0 5px 0 5px;
    h3 {
      margin-top: 0px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    h4 {
      margin-top: 0px;
      font-size: 11px;
      color: #8A8A8A;
    }
    p {
      font-size: 18px;
      color: #8A8A8A;
    }
  }
`
const FiveYearGoal = styled.div`
  && {
    text-align: left;
    background-color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    ul {
      list-style-type: disc;
      padding-left: 25px;
    }
    li {
      color: black;
      font-size: 11px;
      margin: 5px 0 5px 0;
    }
  }
`
const ProgressDiv = styled.div`
  && {
    text-align: left;
    background-color: white;
    padding: 10px 10px 10px 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
`
const Progress = styled(LinearProgress)`
  && {
    width: 80%;
    display: inline-block;
    //margin-left: 10px;
    margin-right: 10px;
    background-color: #F2F2F2;
    color: white;
    bar-root: {
      background-color: white,
    }
  }
`
const SliderBar = styled(Slider)`
  && {
    display: inline-block;
    margin-right: 10px;
    background-color: #F2F2F2;
    track: white;
    :&MuiSlider: {
        thumb:{
        color: "yellow",
        },
        track: {
          color: 'red'
        },
        rail: {
          color: 'black'
        }
      }
  }
`
const PrimaryGoal = styled.text`
  && {
    color: #FF9900;
    font-size: 12px;
    margin-bottom: 2px;
  }
`
const SecondaryGoal = styled.text`
  && {
    color: #8673FF;
    font-size: 12px;
    margin-bottom: 2px;
  }
`
const Home = () => {

  const [value1, setValue1] = React.useState(30);
  const [value2, setValue2] = React.useState(10);
  const [value3, setValue3] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };

  return (
    <Content>
      <StylesProvider injectFirst>
      <Head>
        <title>lifemapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header> 
        <span>
          <Name>hillary leung</Name>
          <Subtitle>week's productivity: 85%</Subtitle>
        </span>
        <h1>lifemapp</h1>
      </Header>
      <Headerline></Headerline>
        <div>
          <Grid container direction="row" justify="center" alignItems="baseline" spacing={2}>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#F2F2F2"}}>
                <CardContent>
                  <h3>personal mission</h3>
                  <p>brief powerful statement that inspires and guides you on your path through life.</p>
                </CardContent>
              </Widget1>
              <Widget2 style={{ backgroundColor: "#F2F2F2" }}>
                  <CardContent>
                    <h3>5 year goals</h3>
                    <div style={{paddingTop:"10px"}}>
                      <FiveYearGoal>
                        <h4>MOST IMPORTANT</h4>
                        <ul>
                          <li>a very important goal</li>
                          <li>another very important goal</li>
                          <li>something you really want</li>
                        </ul>
                      </FiveYearGoal>
                      <FiveYearGoal>
                        <h4>IMPORTANT</h4>
                        <ul>
                          <li>a important goal</li>
                          <li>another important goal</li>
                          <li>something you want</li>
                        </ul>
                      </FiveYearGoal>
                      <FiveYearGoal>
                        <h4>LESS IMPORTANT</h4>
                        <ul>
                          <li>something nice to achieve</li>
                          <li>another nice-to-have</li>
                          <li>something you kinda want</li>
                        </ul>
                      </FiveYearGoal>
                    </div>
                  </CardContent>
                </Widget2>
            </Grid>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                <CardContent>
                  <h3>2021 goals</h3>
                  <h4>YEARLY GOALS</h4>
                  <ProgressDiv>
                    <PrimaryGoal>goal number 1</PrimaryGoal>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                  </ProgressDiv>
                  <ProgressDiv>
                    <SecondaryGoal>goal number 2</SecondaryGoal>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                  </ProgressDiv>
                  <ProgressDiv>
                    <SecondaryGoal>goal number 3</SecondaryGoal>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                  </ProgressDiv>
                </CardContent>
              </Widget1>
              <Widget2 style={{ backgroundColor: "#F2F2F2" }}>
                <CardContent>
                  <h3>today's tasks</h3>
                  <h4>DAILY TO-DO'S</h4>
                </CardContent>
              </Widget2>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="row" justify="center" alignItems="baseline" spacing={2}>
                <Grid item xs={6}>
                  <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                    <CardContent>
                      <h3>Q1 (jan-mar)</h3>
                      <h4>QUARTERLY GOALS</h4>
                      <ProgressDiv>
                        <PrimaryGoal>goal number 1</PrimaryGoal>
                        <Slider value={value1} onChange={handleChange} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 2</SecondaryGoal>
                        <Slider value={value2} onChange={handleChange} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 3</SecondaryGoal>
                        <Slider value={value3} onChange={handleChange} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                    </CardContent>
                  </Widget1>
                </Grid>
                <Grid item xs={6}>
                  <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                    <CardContent>
                      <h3>january</h3>
                      <h4>MONTHLY GOALS</h4>
                      <ProgressDiv>                    
                        <PrimaryGoal>goal number 1</PrimaryGoal>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 2</SecondaryGoal>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 3</SecondaryGoal>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                    </CardContent>
                  </Widget1>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="baseline" spacing={2} style={{paddingTop:"5px"}}>
                  <Grid item xs={12}>
                    <Widget3 style={{ backgroundColor: "#F2F2F2" }}>
                      <CardContent>
                        <h3>week's schedule</h3>
                      </CardContent>
                    </Widget3>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
          </Grid>
        </div>
      </StylesProvider>
    </Content>
  )
}

export default Home
