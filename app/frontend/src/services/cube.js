class Cube {
  constructor() {
    this.queuedActions = [];
  }

  hasQueuedActions() {
    return 0 < this.queuedActions.length;
  }

  getNextAction() {
    return this.queuedActions.shift();
  }

  addNextAction(name, params) {
    this.queuedActions.push({
      name,
      params
    });
  }
}

export default new Cube();