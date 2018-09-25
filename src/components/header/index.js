import React from 'react'
// import isPhone from '../../utils/isPhone.js'
// import Mobile from './mobile.js'
import Pc from './pc.js'
import Wrapped from './Wrapped.js'
import logo from './logo.png'
import git from './github.png'

// const NewComponent = isPhone ? Wrapped(Mobile) : Wrapped(Pc);
const NewComponent = Wrapped(Pc);
export default (props) => {
  const _props = {logo, git, ...props}
  return (
    <header>
      <NewComponent {..._props}/>
    </header>
  )
}