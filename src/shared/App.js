import React, { Component } from 'react';
import { fire, getFireDB } from './Firebase';
import { Switch, Route } from 'react-router-dom';
import Firstpage from './Firstpage'
import Secondpage from './Secondpage';

class App extends Component {
    constructor(){
        super();
        this.state = {
            memo: []
        };
        fire();
    }
    componentDidMount() {
        getFireDB()
            .then(res =>{
                this.setState({
                    memo : res.val().memo
                })
            });
    }
    render() {
        const { memo } = this.state;
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={()=><Firstpage memo={memo}/>}/>
                    <Route path="/second" component={Secondpage}/>
                    {/* <Route component={NoMatch}/> */}
                </Switch>
            </div>
        );
    }
}

export default App;