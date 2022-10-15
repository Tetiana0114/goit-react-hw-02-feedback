import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from "components/Notification/Notification";
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
};
countPositiveFeedbackPercentage() {
  const sum = this.countTotalFeedback();
  return Math.round((this.state.good * 100) / sum);
};

// onChangeGoodValue = () => { 
//   this.setState(prevState => ({good: prevState.good + 1})) };

// onChangeNeutralValue = () => {
//    this.setState(prevState => ({neutral: prevState.neutral + 1})) };

// onChangeBadValue = () => {
//    this.setState(prevState => ({bad: prevState.bad + 1})) };


onSelectedBtn = e => { this.setState(prevState => ({
  [e.target.name]: prevState[e.target.name] + 1,
  }));
};

render() {
  const sum = this.countTotalFeedback();
  const perCent = this.countPositiveFeedbackPercentage();
return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      color: '#010101'
    }}
    >
  <Section title="Please, leave feedback:">
    <FeedbackOptions
      // options={['GOOD', 'NEUTRAL', 'BAD']}
      // onLeaveFeedback={[this.onChangeGoodValue, this.onChangeNeutralValue,this.onChangeBadValue,]}
      options={this.state}
      onLeaveFeedback={this.onSelectedBtn}
    ></FeedbackOptions>
  </Section>

  {sum === 0 ? ( <Notification message="There is no feedback!"/>) : 
  (<Section title="Statistics:">
    <Statistics
      good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={sum}
      positivePercentage={perCent}
    ></Statistics>
  </Section>
      )}
    </div>
  );
};
};