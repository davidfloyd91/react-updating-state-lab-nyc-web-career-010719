import React, { Component, Fragment } from 'react';

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);

    this.state =
    {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  };

  changeRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p',
        },
      },
    });
  };

  changeRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  render() {
    return(
      <Fragment>
        <button
          className="bitrate"
          onClick={this.changeRate}
        >
          bitrate
        </button>
        <button
          className="resolution"
          onClick={this.changeRes}
        >
          resolution
        </button>
      </Fragment>
    );
  };
};
