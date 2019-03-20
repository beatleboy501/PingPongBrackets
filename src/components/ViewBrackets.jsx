import React from 'react';
import Tabs from './Tabs.jsx'
import Card from './Card.jsx'
import { ApiConsumer } from '../providers/InvokeApiContext';
import {Auth} from 'aws-amplify';
import {navigate} from "@reach/router"

class ViewBrackets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brackets: {
        owned: [],
        participant: []
      }
    }
    this.owner = null
    this.getCard = this.getCard.bind(this)
  }

  async componentWillMount() {
    const brackets = {
      owned: [
        {title: "Owned Bracket", owner: "You", participantCount: 4, id: '75f6931d-ae22-4164-8df0-f64d004415fc'},
        {title: "Owned Bracket Two", owner: "You", participantCount: 8, id: '75f6931d-ae22-4164-8df0-f64d004415fc'}
      ],
      participant: [
        {title: "Participant Bracket", owner: "Not You", participantCount: 16, id: '75f6931d-ae22-4164-8df0-f64d004415fc'},
        {title: "World Cup", owner: "FIFA", participantCount: 32, id: '75f6931d-ae22-4164-8df0-f64d004415fc'}
      ]
    }
    await this.setState({brackets})
    window.scrollTo(0,0);
    // const { base } = this.props;
    // this.owner = await Auth.currentAuthenticatedUser()
    // const userId = this.owner.attributes.sub
    // await fetch(`${base}/user/${userId}/list-brackets`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }).then(res => res.json()).then(brackets => {
    //   return this.setState({ brackets })
    // }).catch(err => console.error(err))
  }

  getCard(bracket) {
    return (
      <Card
        key={Math.random()}
        buttonProps={{
          label: "View Bracket",
          onClick: () => navigate(`bracket/${bracket.id}`)
        }}
        titleText={bracket.title}
        subTitleText={bracket.owner}
        paragraphText={`${bracket.participantCount} Participants`}
      />
    )
  }

  render() {
    const {brackets} = this.state;
    const tabsContent = [
      {
        label: "Owned",
        children: brackets.owned.map(bracket => this.getCard(bracket))
      }, {
        label: "Participant",
        children: brackets.participant.map(bracket => this.getCard(bracket))
      }
    ]
    return <Tabs content={tabsContent} />
  }
}

const ViewBracketsElement = (props) => {
  return(
    <ApiConsumer>
    {({base}) => <ViewBrackets base={base} {...props}/>}
    </ApiConsumer>
  )
}

export default ViewBracketsElement;
