import React, { Component } from 'react'
import '../main.css'

export default class Rules extends Component {
  render() {
    return (
      <div>
        <h1>Rules</h1>
        <div className="content-section">
          <h2>1. No Spam / Advertising / Self-promotion in the forums</h2>
          <p>This forum defines spam as: unsolicited advertisement for goods, services and/or other web sites, or posts with little, or completely unrelated content. Do not spam the forums with links to your site or product, or try to self-promote your website, business or forums etc.</p>
          <h2>2. Respect</h2>
          <p>All posts should be professional and courteous. You have every right to disagree with your fellow community members and explain your perspective. However, you are not free to attack, degrade, insult, or otherwise belittle them or the quality of this community.</p>
          < hr/>
          <small>These rules are subject to change at any time when we feel it is needed. Please check here in case of changes to these rules.</small>

        </div>
      </div>
    )
  }
}