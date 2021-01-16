import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles';

const Content = styled.div`
  && {
    padding: 0 3% 0 3%;
    //height: 100vh;
  }
`
const Name = styled.h2`
  && {
    font-size: 20px;
    position: absolute;
    left: 0;
  }
`
const Subtitle = styled.p`
  && {
    font-size: 10px;
    position: absolute;
    left: 0;
    padding-top: 35px;
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
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #F2F2F2;
  }
`
const Widget1 = styled(Card)`
  && {
    width: 100%;
    height: 30vh;
    text-align: center;
    margin-top: 3px;
    margin-bottom: 3px;
    padding: 0 10px 0 10px;
    h3 {
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
    min-height: 50vh;
    text-align: center;
    margin-top: 3px;
    margin-bottom: 3px;
    padding: 0 10px 0 10px;
    h3 {
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
    width: 100%;
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
const Home = () => {
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
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#F2F2F2"}}>
                <CardContent>
                  <h3>personal mission</h3>
                  <p>brief powerful statement that inspires and guides you on your path through life.</p>
                </CardContent>
              </Widget1>
            </Grid>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                <CardContent>
                  <h3>2021 goals</h3>
                  <h4>YEARLY GOALS</h4>
                </CardContent>
              </Widget1>
            </Grid>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                <CardContent>
                  <h3>Q1 (jan-mar)</h3>
                  <h4>QUARTERLY GOALS</h4>
                </CardContent>
              </Widget1>
            </Grid>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                <CardContent>
                  <h3>january</h3>
                  <h4>MONTHLY GOALS</h4>
                </CardContent>
              </Widget1>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="top" spacing={2}>
            <Grid item xs={3}>
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
              <Widget2 style={{ backgroundColor: "#F2F2F2" }}>
                <CardContent>
                  <h3>today's tasks</h3>
                </CardContent>
              </Widget2>
            </Grid>
            <Grid item xs={6}>
              <Widget2 style={{ backgroundColor: "#F2F2F2" }}>
                <CardContent>
                  <h3>week's schedule</h3>
                </CardContent>
              </Widget2>
            </Grid>
          </Grid>
        </div>
      </StylesProvider>
    </Content>
  )
}

export default Home
