import React, {Component, Fragment} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import AddArticle from './AddArticle';
import ShowAllArticles from './ArticleTableData';
import Header from '../components/Header';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/users/signup" component={Signup}/>
                                <Route exact path="/users/signin" component={Signin}/>
                                <Route exact path="/articles/add" component={AddArticle}/>
                                <Route exact path="/articles/showAll" component={ShowAllArticles}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}