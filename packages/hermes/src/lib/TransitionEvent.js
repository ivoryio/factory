class TransitionEvent {
  constructor(event) {
    this.event = new Event(event)
  }

  dispatch() {
    window.dispatchEvent(this.event)
  }
}

export default TransitionEvent
