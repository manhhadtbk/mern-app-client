import React, { Component } from 'react'
import axios from 'axios'

const addDataAction = (text, isDone) => {
   return axios.post(`/api/todo`, { text: text, isDone: isDone })
      .then((resp) => { return resp.data })
}


export default class AddData extends Component {

   constructor(props) {
      super(props)
      this.state = {
         text: '',
         isDone: ''
      }
   }

   isChange = (e) => {
      var name = e.target.name
      var value = e.target.value

      this.setState({
         [name]: value,
      })
   }

   handleClick = () => {
      console.log(JSON.stringify(this.state));
      var text = this.state.text
      var isDone = this.state.isDone

      addDataAction(text, isDone).then((response) => {
         console.log(response);
      })
   }

   render() {
      return (
         <div>AddData
            <form >
               <div >
                  <input
                     onChange={(e) => { this.isChange(e) }}
                     name='text'
                  />
               </div>

               <div >
                  <input
                     onChange={(e) => { this.isChange(e) }}
                     name='isDone'
                  />
               </div>


               <button
                  type="reset"
                  onClick={() => this.handleClick()}
               >
                  Thêm mới
               </button>
            </form>
         </div>
      )
   }
}
