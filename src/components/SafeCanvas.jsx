import { Component } from 'react'

// Error boundary so a WebGL/Three.js failure (e.g. no GPU context) degrades
// gracefully to the static gradient hero instead of blanking the whole page.
export default class SafeCanvas extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() { /* swallow — hero is decorative */ }
  render() {
    if (this.state.failed) return null
    return this.props.children
  }
}
