import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core'
import React, {useState} from "react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const Home = () => {

    const { data, error } = useSWR('/api/dailyTasks', fetcher);
    console.log('yo')
    console.log(data)
    let ummmm='test';

console.log('hello')

    // console.log('here')
    // const res =  fetch('http://localhost:3000/api/dailyTasks')
    // console.log(res)

  return (
      <div className={styles.container}>

      </div>
  )

}
export default Home