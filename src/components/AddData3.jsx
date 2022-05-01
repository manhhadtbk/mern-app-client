import React, { Component } from 'react'
import axios from 'axios';


export default class AddData3 extends Component {

   async postData() {
      try {


         // let result =
         //    await fetch('/api/todo', {
         //       method: 'POST',
         //       // mode: 'cors',
         //       headers: {
         //          'Accept': 'application/json',
         //          'Content-Type': 'application/json'
         //       },
         //       body: JSON.stringify({
         //          text: 'ccc',
         //          isDone: false
         //       })
         //    })
         // console.log('Result:', result);

         axios.post(`/api/todo`, {
            text: 'bbb',
            isDone: true
         })





         ///////////////////////////////////////
      }
      catch (e) {
         console.log(e);
      }
   }

   render() {
      return (
         <div>
            <button
               onClick={() => this.postData()}
            >
               Hay nhap du lieu
            </button>
         </div>
      )
   }
}
