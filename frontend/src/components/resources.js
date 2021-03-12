import React, { Component } from 'react'
import '../main.css'

export default class Resources extends Component {
  render() {
    return (
      <div>
        <h1>Resources</h1>
        <div className="content-section">
          <a href="https://en.wikipedia.org/wiki/Zen">Wikipedia (zen)</a>
          <br />
          <a href="https://zenmarrow.com/">ZenMarrow</a>
          <br />
          <a href="https://www.reddit.com/r/zen/">Reddit r/zen</a>
          <br />
          <a href="https://terebess.hu/zen/index.html">Terebess</a>
        </div>
      </div>
    )
  }
}