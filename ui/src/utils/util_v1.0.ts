import axios from "axios"
import styled from "styled-components"

const DATA_KEY = "FORM_DATA"
const POST_QUOTE = "http://localhost:8080/api/v1/quotes"

const ERROR_MAP = new Map<string, string>()

// load from cvs / datasorce to support i18
ERROR_MAP.set("userFirstName", "User First Name should be provided")
ERROR_MAP.set("userLastName", "User First Name should be provided")
ERROR_MAP.set("userMobileNumber", "Valid Moble number shold be provided.")
ERROR_MAP.set("userEmail", "Valid email address shold be provided.")
ERROR_MAP.set("relationshipStatus", "Please select your relationship status.")
ERROR_MAP.set("incomeFrequency", "Please select the income frequency.")
ERROR_MAP.set("afterTaxIncome", "Please enter your after tax income (numbers only).")
ERROR_MAP.set("occupation", "Please provide your occupation.")
ERROR_MAP.set("employer", "Please provide your employer details.")
ERROR_MAP.set("employementPeriodYears", "Please provide number of years in your current employment.")
ERROR_MAP.set("employementPeriodMonths", "Please provide number of months in your current employment")
ERROR_MAP.set("dependents", "Please provide do you have dependants")


// post the data to backend
export async function postData() {
    try {
        // load data
        const data = getFormData()

        // serialize data 
        const formOneData = JSON.parse(data.q1)
        const formTwoData = JSON.parse(data.q2)

        let quote_data: any = {}

        for (let [key, value] of Object.entries(formOneData)) {
            console.log(key, value)
            quote_data[key] = value
        }
        for (let [key, value] of Object.entries(formTwoData)) {
            console.log(key, value)
            quote_data[key] = value
        }

        const requestData = {
            "mobile": quote_data.userMobileNumber,
            "email": quote_data.userEmail,
            "quote_data": quote_data
        }

        console.dir(requestData)

        const res = await axios.post(POST_QUOTE, requestData)
        console.log(res)
        return true
    } catch (e) {
        console.log("error while sending the request")
        return false
    }


}

// check data is empty
export const isNotEmpty = (input: any) => {
    return (input && input.toString().trim().length > 0) ? true : false
}

// local data structure
type DataStore = {
    q1: string
    q2: string
}

// UI custome error msg.
export const getCustomErrorMessage = (inputName: string): string => {
    const message = ERROR_MAP.get(inputName)
    return (message !== undefined ? message.toString() : "")
}

// main container styles
export const MainContainer = styled.div`
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',`
    ;

// extract stored data from localstorage
export const getFormData = (): any => {

    let data = sessionStorage.getItem(DATA_KEY)

    if (data !== undefined && data != null) {
        return JSON.parse(data)
    } else {
        return JSON.parse(JSON.stringify({ q1: {}, q2: {} }))
    }
}

// set data to localstorage
export const setFormData = (formId?: string, newData?: any) => {

    // check data exists
    let data = sessionStorage.getItem(DATA_KEY)
    let dataToStore: DataStore

    if (data !== undefined && data !== null) {
        // obtain existing data
        dataToStore = JSON.parse(data)
    } else {
        // create new data
        dataToStore = { q1: "", q2: "" }
    }

    // set the new data
    if (dataToStore !== null && formId === "q1" && newData !== undefined) {
        const dataToReplace = {
            userEmail: newData.userEmail,
            userFirstName: newData.userFirstName,
            userLastName: newData.userLastName,
            userMiddleName: newData.userMiddleName,
            userMobileNumber: newData.userMobileNumber,
        }
        dataToStore.q1 = JSON.stringify(dataToReplace)
    } else if (dataToStore !== null && formId === "q2") {
        const dataToReplace = {
            afterTaxIncome: newData.afterTaxIncome,
            dependents: newData.dependents,
            employementPeriodMonths: newData.employementPeriodMonths,
            employementPeriodYears: newData.employementPeriodYears,
            employer: newData.employer,
            incomeFrequency: newData.incomeFrequency,
            occupation: newData.occupation,
            otherSourceOfIncome: newData.otherSourceOfIncome,
            relationshipStatus: newData.relationshipStatus,
        }

        dataToStore.q2 = JSON.stringify(dataToReplace)
    } else {
        // default - set empty data
        dataToStore.q1 = ""
        dataToStore.q2 = ""
    }

    // store data
    sessionStorage.setItem(DATA_KEY, JSON.stringify(dataToStore))
}
