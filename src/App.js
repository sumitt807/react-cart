import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import BlogArchive from './pages/BlogArchive';
import BlogSinglePage from './pages/BlogSinglePage';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/react-cart/" component={Home} exact></Route>
                    <Route path="/react-cart/about" component={About} exact></Route>
                    <Route path="/react-cart/movie" component={Movie} exact></Route>
                    <Route path="/react-cart/blogs" component={BlogArchive} exact></Route>
                    <Route path="/react-cart/:slug" component={BlogSinglePage} exact></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;