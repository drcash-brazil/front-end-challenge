export class UnexpectedError extends Error {
  constructor () {
    super('Something went very wrong. Please try again later')
    this.name = 'UnexpectedError'
  }
}
