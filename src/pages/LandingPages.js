import React, { Component } from "react";
import Header from "parts/Header";

import Hero from "parts/Hero";
import landingPage from "json/landingPage";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
export default class LandingPages extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    // console.log(this.props);

    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
      </>
    );
  }
}
