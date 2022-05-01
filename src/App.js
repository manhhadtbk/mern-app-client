import './App.css';
import './components/Crud'
import Crud from './components/Crud';
import axios from 'axios'
import { Component } from 'react';
import AddData from './components/AddData';
import AddData3 from './components/AddData3';

const getProductData = () => {
  return axios.get('/api/todos')
    .then(res => res.data)

}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    if (this.state.data === null) {
      getProductData().then(res => {
        this.setState({
          data: res
        })
      })
    }
  }

  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => {
        return (
          <Crud
            key={key}
            text={value.text}
            isDone={value.isDone}
          />
        )
      })
    }
  }

  render() {

    console.log(this.state.data);

    return (
      <div >

        <AddData />
        {this.printData()}
      </div>
    )
  }

}

export default App;
