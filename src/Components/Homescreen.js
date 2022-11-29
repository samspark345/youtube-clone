import RecVideos from './RecVideos'
import { decrement, increment } from '../redux/Root/rootActions'
import store from '../redux/store'
import {bindActionCreators} from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { GetYoutubeRecommendedVids } from '../redux/actions/homeActions'

class Homescreen extends Component {
  constructor(props){
    super(props)
    this.handleRefresh = this.handleRefresh.bind(this)
    // this.handleIncrement = this.handleIncrement.bind(this);
  }
  
  componentDidMount(){
    
  }
  componentWillMount(){
    this.props.actions.getYoutubePages();
    console.log('dispatching')
  }

  handleRefresh(){
    // this.props.increment();///////////////
    this.props.actions.getYoutubePages();
  }
  
  render() {
    // console.log(store.getState().count)
    // this.props.incrementCount()
    // this.incrementCount()
    // this.props.actions.getYoutubePages();
    console.log(this.props)
    return (
      <>
        <RecVideos
        handleRefresh={this.handleRefresh} 
        />

        <Button onClick={this.handleRefresh}>jja</Button>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    count: state.count,
    HomeState: state.HomeState
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    increment: increment,
    decrement: decrement,
    getYoutubePages: GetYoutubeRecommendedVids
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen)