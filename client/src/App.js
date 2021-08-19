import React from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; ??needed
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

/* ?? NEEDED?? 
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(), //apollo client comes with its own native inmemorycache library
});
*/

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      //IS THIS NEEDED???
      <div className="App">
        <Header />
        <div className="container">
          <AboutMe />
        </div>
        <div className="container">
          <PreviousWork />
        </div>
        <div className="container">
          <WorkCards />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
