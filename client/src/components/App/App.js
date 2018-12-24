// import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
// import Footer from '../Footer/Footer'
// import Header from '../Header/Header'
// import Launch from './launch'

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql'
// })

// class App extends Component {
//   render () {
//     return (
//       <ApolloProvider client={client}>
//         <Launch />
//         <Route path='/about' component={Footer} />
//         <Route path='/topics' component={Header} />
//       </ApolloProvider>
//     )
//   }
// }

// export default App

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Search from './search'

import styled from 'styled-components'
// import Launch from './launch'

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql'
// })

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/about' component={Footer} />
        <Route path='/topics' component={Header} />
        <Header />
        <Search />
      </div>
    )
  }
}

export default App
