import React from 'react';

interface AppProps {};

export default class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    // initialize values here
  }

  render() {
    return <div>
      <h1>Welcome to the Nightowl React generator!</h1>

      <p>First, I would like you to thank you for using my yeoman generator. If you have questions,
        they can be answered the <a href=''>discord channel</a>. If you would like to request a feature, you can
        hop over to the Github Repositories <a href=''>issues</a> page.
      </p>
    </div>
  }
}