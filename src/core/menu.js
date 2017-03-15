// @flow
export type Menu = Array<{
  label: string,
  to: string
}>

const menu: Menu = [
  {
    label: 'About',
    to: '/#about'
  },
  {
    label: 'Work',
    to: '/#work'
  },
  {
    label: 'Social',
    to: '/#social'
  },
  {
    label: 'Contact',
    to: '/#contact'
  }
]

export default menu
