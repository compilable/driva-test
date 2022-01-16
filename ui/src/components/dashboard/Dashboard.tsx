import React from 'react'
import { Card, Container } from 'semantic-ui-react'

const addUserImg = "/img/add_user.png"
const viewUserImg = "/img/view_user.png"

type DashboardParam = {
  nevigate: Function
}

// TODO: To be implemented as the landing page.
const Dashboard: React.FC<DashboardParam> = ({ nevigate }) => {

  return (
    <Container style={{ margin: "5%" }}>
      <Card.Group centered itemsPerRow={4}>
        <Card onClick={()=>nevigate('q1')} color='red' image={addUserImg} />
        <Card onClick={()=>nevigate('q2')} color='orange' image={viewUserImg} />
      </Card.Group>
    </Container>
  )
}

export default Dashboard