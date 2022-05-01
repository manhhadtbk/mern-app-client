import React, { Component } from 'react'

export default class Crud extends Component {
   render() {
      return (
         <>
            <div>{this.props.text}</div>
            <div>{this.props.isDone}</div>
         </>
      )
   }
}
