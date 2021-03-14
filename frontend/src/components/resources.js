import React, { Component } from 'react'
import '../main.css'

export default class Resources extends Component {
  render() {
    return (
      <div>
        <h1>Resources</h1>
        <div className="content-section">
          <p>Just in Case you need a quick reminder...</p>
          <a href="https://en.wikipedia.org/wiki/Zen">Wikipedia (zen)</a>
          <hr />
          <p>Koan Search and Podcast from our friends</p>
          <a href="https://zenmarrow.com/">ZenMarrow</a>
          <hr />
          <p>The birth place of our history</p>
          <a href="https://www.reddit.com/r/zen/">Reddit r/zen</a>
          <hr />
          <p>The well of ancient texts!</p>
          <a href="https://terebess.hu/zen/index.html">Terebess</a>
        </div>
      </div>
    )
  }
}