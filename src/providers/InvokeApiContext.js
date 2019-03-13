import React from 'react';

// Set Up The Initial Context
const InvokeApiContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const ApiConsumer = InvokeApiContext.Consumer;

// Create the provider using a traditional React.Component class
class ApiProvider extends React.Component {
  state = {
    base: 'https://83yeog1v01.execute-api.us-east-1.amazonaws.com/mock/api' // Base URL for the API Gateway
  }

  render() {
    return (
      // value prop is where we define what values
      // that are accessible to consumer components
      <InvokeApiContext.Provider value={this.state}>
        {this.props.children}
      </InvokeApiContext.Provider>
    )
  }
}

export default ApiProvider
