import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { Route, Switch } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://blogchat.onrender.com"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home isLoading={isLoading} fetchError={fetchError} />
        </Route>
        <Route exact path="/post" component={NewPost} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;