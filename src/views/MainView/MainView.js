/* @flow */
import React, { PropTypes } from 'react';
import { loadRandomWords } from '../../redux/modules/random-word';
import { connect } from 'react-redux';
import classes from './home-view-styles.scss'

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class MainView extends React.Component {

  static propTypes = {
    randomWord: PropTypes.object.isRequired,
    loadRandomWords: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.loadRandomWords();
  }

  getRandomWord (arrayOfWords) {
    const arrayLength = arrayOfWords.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    return arrayOfWords[randomIndex];
  }

  render () {
    const randomWords = this.props.randomWord.wordsArray;
    return (
      <div className={classes['cool-story-bro-view']}>
        <div className={classes['cool-story-phrase-component-container']}>
          <p className='cool-story-phrase-component'>{this.getRandomWord(randomWords[0].positiveWords)}</p>
        </div>
        <div className={classes['cool-story-phrase-component-container']}>
          <p className='cool-story-phrase-component'>{this.getRandomWord(randomWords[1].storySynonyms)}</p>
        </div>
        <div className={classes['cool-story-phrase-component-container']}>
          <p className='cool-story-phrase-component'>{this.getRandomWord(randomWords[2].brotherSynonyms)}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  randomWord: state.randomWord
});
export default connect((mapStateToProps), {
  loadRandomWords
})(MainView);
