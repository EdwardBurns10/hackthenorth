import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core'

const Content = styled.div`
  padding: 0 3% 0 3%;
`
const Name = styled.h2`
  font-size: 20px;
  position: absolute;
  left: 0;
`
const Subtitle = styled.p`
  font-size: 10px;
  position: absolute;
  left: 0;
  padding-top: 35px;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 10px;
`
const Headerline = styled.hr`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #F2F2F2;
`
const Widget = styled(Card)`
  width: 20%;
  justify-content: center;
`
const cardTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`

const Home = () => {
  return (
    <Content>
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
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={3}>
          <Card style={{ backgroundColor: "#F2F2F2" }}>
            <CardContent>
               <cardTitle>personal mission</cardTitle>
               <p>brief powerful statement that inspires and guides you on your path through life.</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ backgroundColor: "#F2F2F2" }}>
            <CardContent>
               <cardTitle>2021 goals</cardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ backgroundColor: "#F2F2F2" }}>
            <CardContent>
               <cardTitle>Q1 (jan-mar)</cardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ backgroundColor: "#F2F2F2" }}>
            <CardContent>
               <cardTitle>january</cardTitle>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={3}>
          <Card style={{ backgroundColor: "#F2F2F2" }}>
            <CardContent>
               <cardTitle>5 year goals</cardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ backgroundColor: "#F2F2F2" }}>
            <CardContent>
               <cardTitle>today's tasks</cardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ backgroundColor: "#F2F2F2" }}>
            <CardContent>
               <cardTitle>week's schedule</cardTitle>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Content>
  )
}

export default Home
