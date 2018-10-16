import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Blog({ match }) {
  return (
    <Switch>
      <Route exact path={match.url} component={Landing} />
      <Route path={`${match.url}/archive`} component={Archive} />
      <Route path={`${match.url}/:slug`} component={Entry} />
    </Switch>
  )
}

function Landing() {
  return "Blog landing";
}

function Archive() {
  return "Blog archive";
}

function Entry({ match }) {
  return `Blog entry: ${match.params.slug}`
}

export default Blog;
export { Landing, Archive, Entry }