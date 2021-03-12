import React, { Component } from 'react'
import '../main.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About Zennit</h1>
        <div className="content-section">
          <h2>A communication platform for today's social zennist!</h2>
          <p>Zennit was born out of an appreciation for online social discussion regarding Zen. Many Zen-enthusiast online-communities have started in places like: reddit and discord... however, these places did not capture the type of niche online presence that is demanded of such a controversial and perturbing topic. This forum is dedicated to the rigorous discussion of Zen and its related content.</p>
          <p>To echo our reddit family motto: "The self-nature is originally complete!"</p>
          <p>Zen, as we understand it here, was born of the Buddhist lineage of Bodhidharma, and has passed through the minds of the Song and Tang dynasty patriarchs, so as to fill our skulls with the enlightened brilliance of the true teaching of the Buddha.</p>
          <p>This forum is not present as an online educational resource for the history of Zen, but the users here are often willing to share their knowledge with those who seek to understand Zen's dubious past.</p>
        </div>
      </div>
    )
  }
}
