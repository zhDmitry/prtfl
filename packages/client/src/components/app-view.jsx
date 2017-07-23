import React, {Component} from "react";
import Lazy from "lazy-route";
import logo from "../logo.svg";
import Block from "./block.jsx";
import Layout from "./layout.jsx";

class App extends Component {
  renderHeader() {
    return (
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Zherebko Dmitry</h1>
            <h2 className="subtitle">Web developer</h2>
            <a className="subtitle" href="https://github.com/zhDmitry">
              github
            </a>
          </div>
        </div>
      </section>
    );
  }
  render() {
    const {
      xray,
      blocksConfig,
      title,
      updateConfig,
      onXray,
      setTitle,
      showProjects
    } = this.props;
    return (
      <Layout xray={xray} header={!xray && this.renderHeader()}>
        <button onClick={onXray} className="delete hell-button" />
        <section className="section">
          <p className="title is-1 has-text-centered">
            {"<"}
            {title}
            {">"}
          </p>
        </section>
        {xray &&
          <Lazy
            updateConfig={updateConfig}
            setTitle={setTitle}
            showProjects={showProjects}
            component={import("./terminal.jsx")}
          />}
        {Object.keys(blocksConfig).map(el => {
          return <Block key={el} {...blocksConfig[el]} />;
        })}
        <p className="title is-1 has-text-centered">
          {"</"}
          {title}
          {">"}
        </p>
      </Layout>
    );
  }
}

export default App;
