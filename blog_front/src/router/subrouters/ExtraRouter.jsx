import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Login from '@/pages/Login/Login'
import FindPass from '@/pages/FindPass/FindPass'
import UpdatePass from '@/pages/UpdatePass/UpdatePass'
import NotFound from '@/pages/NotFound/NotFound'

class ExtraRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/extra" component={NotFound}/>
        		<Route exact path="/extra/login" component={Login} />
        		<Route exact path="/extra/findpass" component={FindPass} />
        		<Route exact path="/extra/updatepass/:id" component={UpdatePass} />
        		<Route path="/extra/*" component={NotFound}/>
            </Switch>
        )
    }
}

export default ExtraRouter