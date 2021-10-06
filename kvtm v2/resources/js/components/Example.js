import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>Đây là home page component</h1>
    </div>
)
const ProfilePage = () => (
    <div>
        <h1>Đây là profile component</h1>
    </div>
)
const AboutPage = () => (
    <div>
        <h1>Đây là page về chúng tôi nè</h1>
    </div>
)

function Example() {
    return (
        <div className="container">
            <div className="AppComponent post" id="Application">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/about" component={AboutPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
