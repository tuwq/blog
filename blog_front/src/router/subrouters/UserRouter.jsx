import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Login from '@/pages/Login/Login'
import FindPass from '@/pages/FindPass/FindPass'
import UpdatePass from '@/pages/UpdatePass/UpdatePass'
import Setting from '@/pages/Setting/Setting'
import Information from '@/pages/Information/Information'
import NotFound from '@/pages/NotFound/NotFound'

class UserRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/user" component={NotFound} />
        		<Route exact path="/user/setting" component={Setting} />
                <Route exact path="/user/:id" component={Information} />
                <Route path="/user/*" component={NotFound} />
            </Switch>
        )
    }
}

export default UserRouter
