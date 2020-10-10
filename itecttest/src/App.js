import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import ItemPage from './ItemPage';
import { getData, deleteJoke } from './store/reducers/reducer'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    // debugger
    // console.log(this.props);

    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/' render={() => {
            return <ItemPage jokes={this.props.jokes} deleteJoke={this.props.deleteJoke}/>
          }} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jokes: state.reducer.jokes
  }
}

export default connect(mapStateToProps, {
  getData,
  deleteJoke,
})(App);
