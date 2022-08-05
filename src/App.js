// import { useEffect, useState } from "react"
import React from 'react'
// import ApiData from './ApiData';
import "./App.css";
// import Card from './Card';
// import Form from './FormikForm';
// import AaaData from './AaaData';
// import NewIndex from './NewIndex';
import PunkApi from './PunkApi';

const App = (hello) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // })
  // useEffect(() => {
  //   document.title = "hello"
  // }, [hello]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     document.title = 'Good Morning'
  //   }, 2000);
  // });
  // const [count, setCount] = useState(0);
  // const set = () => {
  //   setCount(count + 1);
  // }
  // const [click, setClick] = useState(0);
  // const ClickButton = () => {
  //   setClick(click + 1);
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert('hello');
  //   }, 1000);
  // }, [click])
  return (
    <>
      <div className='custom-container'>
        {/* <h1 className="heading">Map Method </h1> */}
        <h1 className='heading'>Beer's Detail</h1>
      </div>
      <PunkApi />
      {/* <Form /> */}
      {/* <ApiData /> */}
      {/* <AaaData /> */}
      {/* <NewIndex /> */}
      <div className='card'>
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  )
}
export default App;
