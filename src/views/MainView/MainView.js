/* @flow */
import React, { PropTypes } from 'react';
import { loadRandomWord } from '../../redux/modules/random-word';
import { connect } from 'react-redux';

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class MainView extends React.Component {

  static propTypes = {
    randomWord: PropTypes.object.isRequired,
    loadRandomWord: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.loadRandomWord();
  }

  render () {
    console.log(this.props);
    const { firstWord, secondWord, thirdWord } = this.props.randomWord;
    return (
      <div className='cool-story-bro-view'>
        <p>Ahh cool story bro</p>
        <p className='cool-story-word-part'>{firstWord}</p>
        <p className='cool-story-word-part'>{secondWord}</p>
        <p className='cool-story-word-part'>{thirdWord}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  randomWord: state.randomWord
});
export default connect((mapStateToProps), {
  loadRandomWord
})(MainView);
