import React, { useEffect } from 'react';
import { Button, Segment, Card, Form, Container, Header } from 'semantic-ui-react'
import { useForm } from "react-hook-form"
import InputElement from "../formElements/InputElement"
import { FormParams } from './FormParams'
import { getFormData } from "../../utils/util_v1.0"

const UserDetailsFormOne: React.FC<FormParams> = ({ formName, showCustomError, processForm }) => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm()


  useEffect(() => {
    // load the data from local storage
    const data = getFormData()

    if (data !== undefined && data.q1 !== undefined && data.hasOwnProperty("q1")) {
      
      try{
        const q1= JSON.parse(data.q1)

        setValue("userFirstName", q1.userFirstName)
        setValue("userMiddleName", q1.userMiddleName)
        setValue("userLastName", q1.userLastName)
        setValue("userMobileNumber", q1.userMobileNumber)
        setValue("userEmail", q1.userEmail)
      }catch(e){
        console.log("")
      }

    }

  }, []);


  function processRequest(data: any) {
    console.log("submitting the userDetails form..");
    processForm(
      {
        formName: formName,
        data: data
      })
  }

  return (

    <Container style={{ margin: "5%" }}>
      <Header as='h2'>Tell us about yourself</Header>

      <Card fluid >

        <Form style={{ margin: "2%" }}>

          <InputElement
            lableText={"First Name"}
            formField="userFirstName"
            placeholderText={'As it appears on your license'}
            required={true}
            validationHook={register("userFirstName", { required: true, minLength: 1 })}
            formErrors={errors}
            showCustomError={showCustomError} />

          <InputElement
            lableText={"Middle Name"}
            formField="userMiddleName"
            placeholderText={'Optional'}
            required={false}
            validationHook={register("userMiddleName", { required: false })} />

          <InputElement
            lableText={"Last Name"}
            formField="userLastName"
            placeholderText={'As it appears on your license'}
            required={true}
            validationHook={register("userLastName", { required: true, minLength: 1 })}
            formErrors={errors}
            showCustomError={showCustomError} />

          <InputElement
            lableText={"Mobile Number"}
            formField="userMobileNumber"
            placeholderText={'+61'}
            required={true}
            validationHook={
              register("userMobileNumber", {
                required: true,
                pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
              })
            }
            formErrors={errors}
            showCustomError={showCustomError} />

          <InputElement
            lableText={"Email"}
            formField="userEmail"
            placeholderText={'Please enter a valid email'}
            required={true}
            validationHook={
              register("userEmail", {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })
            }
            formErrors={errors}
            showCustomError={showCustomError} />

          <Segment basic textAlign='center'>
            <Button
              content='&nbsp; &nbsp;&nbsp; &nbsp;Next&nbsp; &nbsp;&nbsp; &nbsp;'
              icon='right arrow'
              labelPosition='left'
              onClick={handleSubmit(processRequest)}
            />
          </Segment>
        </Form>
      </Card>
    </Container>
  )
}

export default UserDetailsFormOne