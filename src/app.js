import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Base from './components/base_component';
import ChannelManagement from './pages/channel/channel_management';
import ChatManagement from './pages/chats/chat_management';
import Dashboard from './pages/dashboard/dashboard';
import ExamplePage from './example';
import './reset.css';
import './fonts.css';

const App = props => {
  return (
    <Router>
      <Switch>
        <Base>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/stories/" component={Dashboard} />
          <Route exact path="/stories/:storyId" component={Dashboard} />
          <Route exact path="/news-feed" component={Dashboard} />
          <Route path="/integrations" component={ExamplePage} />
          {/* <Route path="/integrations" component={ChannelManagement} /> */}
          <Route path="/push-notes" component={ChannelManagement} />
          <Route path="/chats" component={ChatManagement} />
        </Base>
      </Switch>
    </Router>
  );
};

export default App;
