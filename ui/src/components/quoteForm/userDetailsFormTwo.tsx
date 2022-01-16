
import React, { useState } from 'react'
import { Button, Segment, Card, Form, Container, Header } from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import SelectElement from "../formElements/SelectElement"
import InputElement from "../formElements/InputElement"
import { SelectOption } from '../formElements/SelectOption'
import { FormParams } from './FormParams'
import { useNavigate } from 'react-router-dom'
import { Modal, Loader, Image, Dimmer } from 'semantic-ui-react'
import { setFormData, postData } from "../../utils/util_v1.0"


const UserDetailsFormTwo: React.FC<FormParams> = ({ formName, showCustomError, processForm }) => {

  const { register, handleSubmit, getValues, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showError, setShowError] = useState(false)

  // show loading screen
  // TODO: Add the load screen to seperate component
  function showLoadScreen() {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
    )
  }

  // send the data to backend
  function processRequest(data: any) {
    console.log("submitting the userDetails form..")
    setFormData(formName, data)
    setLoading(true)
    setTimeout(async () => {
      const isSuccess = await postData()

      setLoading(false)

      if (isSuccess) {
        setShowMessage(true)
      }else{
        setShowError(true)
      }
    }, 3000)


  }
  // go back
  function previousScreen() {
    navigate("/")
  }

  // show success msg.
  // TODO: Add the code to seperate component
  function showModel() {
    return (<Modal
      centered={false}
      open={showMessage}
      onClose={() => setShowMessage(false)}
      onOpen={() => setShowMessage(true)}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your quote request has been submitted.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => {
          // finalize form submission
          setFormData()
          processForm({ formName: formName })
          setShowMessage(false)

        }}>OK</Button>
      </Modal.Actions>
    </Modal>)
  }

  // show error msg.
  // TODO: Add the code to seperate component
  function showErrorModel() {
    return (<Modal
      centered={false}
      open={showError}
      onClose={() => setShowError(false)}
      onOpen={() => setShowError(true)}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Hmm..</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          We are facing a network connectivity issue.. please try again.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => {
          setShowError(false)
        }}>OK</Button>
      </Modal.Actions>
    </Modal>)
  }


  // options for select boxes
  const relationshipOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'widow', label: 'Widow / Widower' }
  ];
  const incomeFrequencyOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'fortnightly', label: 'Fortnightly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'annualy', label: 'Annualy' }
  ];
  const employementYearsOptions: Array<SelectOption> = Array.from(Array(11).keys()).map((yearIndex) => { return { value: (yearIndex).toString(), label: `${yearIndex} Years(s)` } })
  const employementMonthsOptions: Array<SelectOption> = Array.from(Array(12).keys()).map((monthIndex) => { return { value: (monthIndex).toString(), label: `${monthIndex} Month(s)` } })
  const dependantsOptions: Array<SelectOption> = Array.from(Array(10).keys()).map((monthIndex) => { return { value: (monthIndex + 1).toString(), label: `${monthIndex + 1}` } })

  return (
    <Container style={{ margin: "5%" }}>

      {showMessage ? showModel() : null}

      {showError? showErrorModel() :null}

      {isLoading ? showLoadScreen() :
        <>
          <Header as='h2'>A little about you..</Header>

          <Card fluid >

            <Form style={{ margin: "2%" }}>

              <SelectElement
                formField='relationshipStatus'
                lableText={"What's your relationship status?"}
                options={relationshipOptions}
                placeholderText={'Please select'}
                validationHook={register("relationshipStatus", { required: true })}
                formErrors={errors}
                showCustomError={showCustomError}
              />


              <Form.Group widths='equal'>

                <InputElement
                  lableText={"Your after-tax income"}
                  formField="afterTaxIncome"
                  placeholderText={'$'}
                  required={true}
                  validationHook={register("afterTaxIncome", { required: true, pattern: /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/ })}
                  formErrors={errors}
                  showCustomError={showCustomError} />

                <SelectElement
                  formField='incomeFrequency'
                  lableText={""}
                  options={incomeFrequencyOptions}
                  placeholderText={'Select frequency'}
                  validationHook={register("incomeFrequency", { required: true })}
                  formErrors={errors}
                  showCustomError={showCustomError}
                />

              </Form.Group>

              <InputElement
                lableText={"Occupation"}
                formField="occupation"
                placeholderText={'Enter your occupation'}
                required={true}
                validationHook={register("occupation", { required: true, minLength: 2 })}
                formErrors={errors}
                showCustomError={showCustomError} />


              <InputElement
                lableText={"Current Employer"}
                formField="employer"
                placeholderText={"Enter your employer's name"}
                required={true}
                validationHook={register("employer", { required: true, minLength: 2 })}
                formErrors={errors}
                showCustomError={showCustomError} />



              <Form.Group widths='equal'>

                <SelectElement
                  formField={'employementPeriodYears'}
                  lableText={"Time in current employment:"}
                  options={employementYearsOptions}
                  placeholderText={'Number of years:'}
                  validationHook={register("employementPeriodYears", { required: true })}
                  formErrors={errors}
                  showCustomError={showCustomError}
                />

                <SelectElement
                  formField={'employementPeriodMonths'}
                  lableText={""}
                  options={employementMonthsOptions}
                  placeholderText={'Number of months'}
                  validationHook={register("employementPeriodMonths", {
                    required: true,
                    validate: () => Number(getValues("employementPeriodYears")) + Number(getValues("employementPeriodMonths")) > 0
                  })}
                  formErrors={errors}
                  showCustomError={showCustomError}
                />

              </Form.Group>


              <SelectElement
                formField={'dependents'}
                lableText={"Have any dependants?"}
                options={dependantsOptions}
                placeholderText={'Please select'}
                validationHook={register("dependents", { required: true })}
                formErrors={errors}
                showCustomError={showCustomError}
              />

              <Form.Group inline>

                <input
                  {...register("otherSourceOfIncome")}
                  name='otherSourceOfIncome'
                  type="checkbox"
                />
                <label style={{ padding: "10px" }}>Do you have other sources of income?</label>
              </Form.Group>




              <Segment basic textAlign='center'>
                <Button
                  content='&nbsp; &nbsp;&nbsp; &nbsp;Back&nbsp; &nbsp;&nbsp; &nbsp;'
                  icon='left arrow'
                  labelPosition='left'
                  onClick={() => previousScreen()}
                />
                <Button
                  content='&nbsp; &nbsp;&nbsp; &nbsp;Submit&nbsp; &nbsp;&nbsp; &nbsp;'
                  icon='send'
                  labelPosition='left'
                  onClick={handleSubmit(processRequest)}
                />
              </Segment>

            </Form>


          </Card>
        </>
      }

    </Container>
  )
}

export default UserDetailsFormTwo

