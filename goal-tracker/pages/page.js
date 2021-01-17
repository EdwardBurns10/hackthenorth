import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

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
const LHeader = styled.div`
  display: flex;
  justify-content: left;
  position: relative;
  padding-top: 4px;
  padding-bottom: 0px;
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

const GoalDiv = styled.div`
  && {
    text-align: left;
    background-color: white;
    padding: 10px 2px 10px 2px;
    margin: 5px 0;
    border-radius: 5px;
    max-height: 15px;
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
const OtherGoal = styled.text`
  && {
    color: #8A8A8A;
    font-size: 12px;
    margin-bottom: 2px;
    margin-left: 5px;
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
                    <Grid container direction="row" justify="flex-start" alignItems="baselflex-startine" spacing={2}>
                        <Grid item xs={3}>
                            <Widget1 style={{ backgroundColor: "#F3F1FC" }}>
                                <CardContent>
                                    <h3>personal mission</h3>
                                    <p>brief powerful statement that inspires and guides you on your path through life.</p>
                                </CardContent>
                            </Widget1>
                        </Grid>
                        <Grid item xs={9}>
                            <Widget1 style={{ backgroundColor: "#F3F1FC" }}>
                                <CardContent>
                                    <h3>5 year goals</h3>
                                    <Grid container direction="row" justify="space-evenly" alignItems="baselflex-startine" spacing={1}>
                                        <Grid item xs={3}>
                                            <LHeader>
                                                <h4> MOST IMPORTANT</h4>
                                            </LHeader>
                                            <GoalDiv>
                                                <OtherGoal>add a goal</OtherGoal>
                                            </GoalDiv>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <LHeader>
                                                <h4>IMPORTANT</h4>
                                            </LHeader>
                                            <GoalDiv>
                                                <OtherGoal>add a goal</OtherGoal>
                                            </GoalDiv>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <LHeader>
                                                <h4>LESS IMPORTANT</h4>
                                            </LHeader>
                                            <GoalDiv>
                                                <OtherGoal>add a goal</OtherGoal>
                                            </GoalDiv>

                                        </Grid>
                                    </Grid>
                                    
                                </CardContent>
                            </Widget1>

                        </Grid>
                            <Grid item xs={1}>
                                <Widget1 style={{ backgroundColor: "#F3F1FC" }}>
                                    <h3>year 1</h3>
                                    <GoalDiv>
                                        <OtherGoal>add a goal</OtherGoal>
                                    </GoalDiv>
                                </Widget1>
                        </Grid>
                        <Grid item xs={1}>
                            <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                                <h3>year 2</h3>
                                <GoalDiv>
                                    <OtherGoal>add a goal</OtherGoal>
                                </GoalDiv>
                            </Widget1>
                        </Grid>
                        <Grid item xs={1}>
                            <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                                <h3>year 3</h3>
                                <GoalDiv>
                                    <OtherGoal>add a goal</OtherGoal>
                                </GoalDiv>
                            </Widget1>
                        </Grid>
                        <Grid item xs={1}>
                            <Widget1 style={{ backgroundColor: "#F2F2F2" }}>
                                <h3>year 4</h3>
                                <GoalDiv>
                                    <OtherGoal>add a goal</OtherGoal>
                                </GoalDiv>
                            </Widget1>
                        </Grid>
                        <Grid item xs={1}>
                            <Widget1 style={{ backgroundColor: "#F3F1FC" }}>
                                <h3>year 5</h3>
                                <GoalDiv>
                                    <OtherGoal>add a goal</OtherGoal>
                                </GoalDiv>
                            </Widget1>
                        </Grid>
                    </Grid>

                </div>
            </StylesProvider>
        </Content>
    )
}

export default Home