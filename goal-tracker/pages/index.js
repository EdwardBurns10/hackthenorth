import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core'
import React, {useState} from "react";

const Home = ({data}) => {
    const [results, setResults] = useState(data);

    let ummmm='test';

console.log('hello')

    // console.log('here')
    // const res =  fetch('http://localhost:3000/api/dailyTasks')
    // console.log(res)

  return (
      <div className={styles.container}>
          {console.log(results)}
      </div>
  )

}
export default Home