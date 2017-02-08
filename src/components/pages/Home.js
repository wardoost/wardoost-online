import React, {PureComponent} from 'react'
import {Link} from 'react-router'
import {Image} from '../ui'
import placeholder from '../../assets/placeholder.jpg'

export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <p>Incididunt irure ea tempor sint <Link to='/forms'>cupidatat adipisicing</Link> id reprehenderit ea duis adipisicing ullamco. Velit duis veniam irure ut consequat duis duis reprehenderit commodo sunt ipsum laboris ipsum magna fugiat officia. Est laborum amet laborum dolore enim anim commodo magna ad laborum labore consectetur mollit. Ad nostrud irure Lorem reprehenderit amet reprehenderit veniam dolor laborum deserunt voluptate ipsum veniam velit qui. Do dolore ipsum magna laboris elit esse reprehenderit cupidatat nostrud deserunt occaecat minim. Consequat veniam magna minim fugiat nulla laboris est fugiat culpa. Aute commodo in aute laborum officia voluptate eu sint consequat proident ut consectetur minim consectetur cupidatat cillum.</p>
        <blockquote>Ad ullamco commodo occaecat minim fugiat anim eu officia ipsum.</blockquote>
        <p>Sint cupidatat et eiusmod do voluptate aute exercitation anim tempor sit tempor exercitation do proident ad dolor laboris. Eiusmod et laborum aliquip veniam voluptate sint incididunt duis ullamco reprehenderit excepteur culpa aliquip pariatur sit adipisicing. Qui cillum <Link to='/buttons'>nulla ipsum</Link> amet enim magna laboris et elit minim irure consequat sit adipisicing ut laborum. Enim aliqua quis consequat laborum quis commodo nisi eiusmod reprehenderit est eu labore cillum laborum non. Fugiat ad cupidatat labore pariatur adipisicing dolor ad exercitation velit pariatur enim nulla cillum tempor exercitation.</p>
        <Image src={placeholder} />
        <p>Sunt aliquip velit aliqua nisi laborum nisi velit incididunt quis aute sit. Enim fugiat dolore duis nulla consequat nostrud consequat. Ipsum incididunt commodo consequat irure qui adipisicing ipsum enim amet incididunt nulla dolor laboris. Dolore anim et non voluptate amet quis id consequat ipsum ut enim. Ad id exercitation esse excepteur commodo ea eiusmod laboris ex do do eiusmod proident mollit. Veniam mollit consectetur enim magna enim aliquip magna enim elit duis quis aute do qui culpa adipisicing.</p>
        <p>Quis reprehenderit adipisicing dolor velit adipisicing duis eiusmod ipsum laborum eiusmod irure elit cillum consequat. Nisi laboris deserunt reprehenderit irure minim magna amet nisi. Ex ea labore Lorem reprehenderit duis quis laboris nostrud duis eu velit ut. Excepteur esse amet labore et proident nulla mollit dolor. Ad laboris proident qui do deserunt nulla do reprehenderit elit magna laboris in proident sint excepteur culpa. Tempor qui aliqua id fugiat enim commodo tempor esse et Lorem.</p>
        <code>npm install && npm run dev</code>
        <p>Consectetur esse deserunt dolor ad et reprehenderit exercitation laboris cupidatat officia ex sit minim qui. Non ex non enim quis nulla esse aliqua amet ad qui <Link to='/grids'>magna ea anim commodo</Link> consequat. Culpa aliqua in esse irure eiusmod quis ad amet esse sunt esse ea consequat adipisicing minim.</p>
        <p>In ex tempor ullamco nisi incididunt esse deserunt deserunt sit adipisicing elit. Amet esse aliqua esse pariatur culpa eu ut. Proident nulla eiusmod dolore nisi officia sint enim consequat dolore amet cupidatat ex anim laboris sit. Proident pariatur cupidatat officia voluptate occaecat tempor dolore exercitation. Elit non id eiusmod consequat minim velit sunt eu consectetur ad ex occaecat aliqua nisi ipsum. Laboris irure et aliquip amet dolore adipisicing enim occaecat cillum dolor reprehenderit occaecat id.</p>
      </div>
    )
  }
}
