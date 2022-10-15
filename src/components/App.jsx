import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from "./Notification";
import { Section } from './Section';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
updateGoodValue = () => { this.setState(prevState => ({good: prevState.good + 1})) };
updateNeutralValue = () => { this.setState(prevState => ({neutral: prevState.neutral + 1})) };
updateBadValue = () => { this.setState(prevState => ({bad: prevState.bad + 1})) };

countTotalFeedback = () => {
  const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
  return totalFeedback;
};
countPositiveFeedbackPercentage = () => {
  const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
  return Math.round((this.state.good * 100) / totalFeedback);
};
render() {
  const totalFeedback = this.state.good + this.state.neutral + this.state.bad;

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
      options={['GOOD', 'NEUTRAL', 'BAD']}
      onLeaveFeedback={[this.updateGoodValue, this.updateNeutralValue,this.updateBadValue,]}
    ></FeedbackOptions>
  </Section>

  {totalFeedback === 0 ? ( <Notification message="There is no feedback!"/>) : 
  (<Section title="Statistics">
    <Statistics
      good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={this.countTotalFeedback()}
      positivePercentage={this.countPositiveFeedbackPercentage()}
    ></Statistics>
  </Section>
      )}
    </div>
  );
};
};