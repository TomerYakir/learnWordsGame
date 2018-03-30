import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScore } from '../actions/index';
import ImageOption from '../components/image-option';
import WordOption from '../components/word-option';
import Score from '../components/score';

class App extends Component {
  
  selectOption(key, selectedOptionKey) {
    if (key == selectedOptionKey) {
        this.props.setScore('INCREASE_SCORE');
    } else {
        this.props.setScore('DECREASE_SCORE');
        $('.' + key).fadeOut(); 
    }
  }
  
  getRandomOptions() {
    const {currentLevel} = this.props.settings;
    const {language} = this.props.settings;
    let randItems = [];
    const items = this.props.data[currentLevel];
    for (let i=0; i<4; i++){
      const randIx = Math.floor(Math.random()*items.length);
      randItems.push(items[randIx]);
      items.splice(randIx, 1);
    }
    return randItems;
  }
  
  getOptions(randItems, selectedOptionKey) {
    return randItems.map((imageOption) => {
      return (
        <ImageOption key={imageOption.key}
                     imageKey={imageOption.key}
                     image={imageOption.image}
                     label={imageOption[this.props.settings.language]}
                     onClick={() => this.selectOption(imageOption.key, selectedOptionKey)} 
                      />
      )
    });
  }
  
  render() {
    const randItems = this.getRandomOptions();
    const randIx = Math.floor(Math.random()*randItems.length);
    const selectedOption = randItems[randIx][this.props.settings.language];
    const selectedOptionKey = randItems[randIx].key;
    $('.image-container').fadeIn(); 
    return (
      <div>
        <div className="row">
          <center>Learn Words!</center>
        </div>
        <div className="row">
          {this.getOptions(randItems, selectedOptionKey)}    
        </div>
        <WordOption label={selectedOption}/>
        <p />
        <Score score={this.props.score}/>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  // state contains book list and active books
  return {
    settings: state.settings,
    data: state.data,
    score: state.score
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { setScore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
