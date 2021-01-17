import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core'
import React, {useState} from "react";

const Home = ({data}) => {
    const [results, setResults] = useState(data);

    let ummmm='test';

console.log('hello')

  return (
      <div className={styles.container}>
          {console.log(results)}
      </div>
  )
    Home.getInitialProps = async () => {
        const res = await fetch('http://localhost:3000/api/dailyTasks')
        const json = await res.json()
        return { data: json }
    }
    console.log(json)
}
export default Home