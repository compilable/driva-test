import React, { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import UserDetailsFormOne from "./components/quoteForm/userDetailsFormOne"
import UserDetailsFormTwo from "./components/quoteForm/userDetailsFormTwo"
import { Route, Routes, useNavigate } from "react-router-dom"
import { getCustomErrorMessage, MainContainer, setFormData } from "./utils/util_v1.0"

export const AppWrapper = () => {

  const navigate = useNavigate()

  type processFormRequest = {
    formName: string,
    data: JSON
  }

  function processForm(data: processFormRequest) {
    console.log(data)

    if (data.formName === "q1") {
      // store data into localstore
      setFormData(data.formName, data.data)
      return navigate("q2")
    } else if (data.formName === "q2") {
      // store data into localstore
      return navigate("/")
    }

  }

  return (
    <Routes>
      <Route path="/" element={<UserDetailsFormOne formName={"q1"} showCustomError={getCustomErrorMessage} processForm={processForm} />} />
      <Route path="q2" element={<UserDetailsFormTwo formName={'q2'} showCustomError={getCustomErrorMessage} processForm={processForm} />} />
    </Routes>
  )
}


export const App = () => {

  useEffect(() => {
    // reset the 
    setFormData()
  }, []);


  return (
    <MainContainer>
      <AppWrapper />
    </MainContainer>
  )
};


