/* eslint-env jest */

it('runs without crashing', () => {
  const div = document.createElement('div')
  document.getElementById = () => div
  require('./index')
})
