import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
}from 'react-router-dom'

import {SubHeader} from '@/component/index.js'

const Page0 = () => {
    return(
        <div>page-0</div>
    )
}

const Page1 = () => {
    return(
        <div>page-1</div>
    )
}

const NoPath = ({location,match,history}) => {
    return (
        <div>404 你不懂！{location.pathname}</div>
    )
}

class NoMatch extends React.Component {
    constructor(porpos) {
        super(porpos);
    }
    render() {
        return(
            <Router>
                <div>
                    <SubHeader title='路由匹配404 处理'/>
                    <ul>
                        <li><Link to='/page0' replace>page0</Link></li>
                        <li><Link to='/page1' replace>page1</Link></li>
                        <li><Link to='/page2' replace>page 404</Link></li>
                    </ul>

                    <Switch>
                        <Route exact path='/page0' component={Page0}/>
                        <Route path='/page1' component={Page1}/>
                        <Route component={NoPath}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default NoMatch;