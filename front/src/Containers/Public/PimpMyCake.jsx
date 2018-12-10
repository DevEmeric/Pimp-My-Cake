import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CakeInfo from './CakeInfo/CakeInfo';
import Composition from './IngredientsChoice/Composition';
import Personalisation from './Customization/Personalisation';
import OrderDetail from './OrderConfirmation/OrderDetail';
import UserInfo from './UserInfo';

class PimpMyCake extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <div style={{ width: '100%', height: '100%' }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/mycake" component={CakeInfo} />
          <Route path="/mycake/composition" component={Composition} />
          <Route path="/mycake/customCake" component={Personalisation} />
          <Route path="/mycake/orderDetail" component={OrderDetail} />
          <Route path="/mycake/userInfo" component={UserInfo} />
        </Switch>
      </BrowserRouter>
      // </div>
    );
  }
}

export default PimpMyCake;
