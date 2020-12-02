import { FC } from "react"
// import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import "./App.less"
// import Home from "./pages/Home"

const App: FC = () => (
    <div className="App">
        <h1>easy-react 定制React SPA开发</h1>
        <span>基于React 17.x实践</span>
        <ul>
            <li>
                <a href="https://github.com/HerbertHe/easy-react">GitHub</a>
            </li>
            <li>
                <a href="https://github.com/NucoTech">Nuco Tech</a>
            </li>
        </ul>
    </div>
)
export default App
