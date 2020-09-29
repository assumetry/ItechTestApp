import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import ItemPage from './ItemPage';
import { getData } from './store/reducers/reducer'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    debugger
    console.log(this.props);

    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/' render={() => {
            return <ItemPage jokeID={this.props.jokeID} jokeText={this.props.jokeText} />
          }} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jokeID: state.reducer.jokes.id,
    jokeText: state.reducer.jokes.joke,
  }
}

export default connect(mapStateToProps, {
  getData,
})(App);
