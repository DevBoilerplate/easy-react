import React, { FC } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"

const App: FC = () => (
    <div className="App">
        <div>Hello World</div>
        <div>
            <Router>
                <Link to="/">首页</Link>
                <a href="https://www.baidu.com">百度</a>
                <Route path="/" exact component={Home} />
            </Router>
        </div>
    </div>
)
export default App
