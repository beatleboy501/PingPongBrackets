import React from 'react';
import propTypes from './propTypes';
import Tabs from '../Tabs/index.jsx';
import Card from '../Card/index.jsx';
import LoadingWidget from '../LoadingWidget/index';
import {Auth} from 'aws-amplify';
import {navigate} from "@reach/router";

class ViewBrackets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brackets: {
        owned: [],
        participant: []
      },
      isLoading: true,
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
      return this.setState({ brackets, isLoading: false })
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
    const {brackets, isLoading} = this.state;
    if(isLoading) return <LoadingWidget />;
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

export default ViewBrackets;
