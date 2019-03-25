import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs.jsx'
import Card from './Card.jsx'
import { ApiConsumer } from '../providers/InvokeApiContext';
import {Auth} from 'aws-amplify';
import {navigate} from "@reach/router"

const propTypes = {
  base: PropTypes.string.isRequired
}

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
    const { base } = this.props;
    this.owner = await Auth.currentAuthenticatedUser()
    const userId = this.owner.attributes.sub
    await fetch(`${base}/user/brackets/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(brackets => {
      return this.setState({ brackets })
    }).catch(err => console.error(err)) /* eslint no-console: 0 */
    window.scrollTo(0,0);
  }

  getCard(bracket) {
    return (
      <Card
        key={Math.random()}
        buttonProps={{
          label: "View Bracket",
          onClick: () => navigate(`bracket/${bracket.id}`)
        }}
        titleText={bracket.title.toString()}
        subTitleText={bracket.owner.toString()}
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

ViewBrackets.propTypes = propTypes;

const ViewBracketsElement = (props) => {
  return(
    <ApiConsumer>
    {({base}) => <ViewBrackets base={base} {...props}/>}
    </ApiConsumer>
  )
}

export default ViewBracketsElement;
