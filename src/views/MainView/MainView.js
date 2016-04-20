/* @flow */
import React, { PropTypes } from 'react';
import { loadRandomWords } from '../../redux/modules/random-word';
import { connect } from 'react-redux';

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
    //console.log(this.props.randomWord);
    const randomWords = this.props.randomWord.wordsArray;
    return (
      <div className='cool-story-bro-view'>
        <p>Ahh cool story bro</p>
        <p className='cool-story-word-part'>{this.getRandomWord(randomWords[0].positiveWords)}</p>
        <p className='cool-story-word-part'>{this.getRandomWord(randomWords[1].storySynonyms)}</p>
        <p className='cool-story-word-part'>{this.getRandomWord(randomWords[2].brotherSynonyms)}</p>
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
