const pubsub = {
  events: {},
  subscribe(eName, fn) {
    this.events[eName] = this.events[eName] || [];
    this.events[eName].push(fn);
  },
  unsubscribe(eName, fn) {
    if (!this.events[eName]) return;
    this.events[eName] = this.events[eName].filter((f) => f !== fn);
  },
  publish(eName, data) {
    if (!this.events[eName]) return;
    this.events[eName].forEach((fn) => {
      fn(data);
    });
  }
};

export default pubsub;
