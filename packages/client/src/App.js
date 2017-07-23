import React, {Component} from "react";
import {set} from "lodash";
import logo from "./logo.svg";
import assets from "./config";
import AppView from "./components/app-view.jsx";

console.log(process.env.REACT_APP_CLIENT_URL);
class App extends Component {
  static defaultTitle = {
    console: "InternalConsole",
    projects: "Projects"
  };
  state = {
    xray: false,
    title: "Projects",
    blocksConfig: assets
  };

  setTitle = title => {
    this.setState({title});
  };
  mapProjectToDisplay = (key, project) => {
    return `${key} - ${project.info.title}\n`;
  };
  updateConfig = (key, value) => {
    // this is bad solution because contains mutation
    const blocksConfig = set(this.state.blocksConfig, key, value);
    this.setState({
      blocksConfig: {...blocksConfig}
    }, this.saveConfig);
  };
  showSingleProject = key => {
    const {blocksConfig} = this.state;
    return JSON.stringify(blocksConfig[key], null, 2);
  };
  showProjects = key => {
    const {blocksConfig} = this.state;
    if (key && blocksConfig[key]) {
      return this.showSingleProject(key);
    }
    return Object.keys(blocksConfig).map((el, i) =>
      this.mapProjectToDisplay(el, blocksConfig[el], i)
    );
  };
  isDefult(title) {
    return (
      this.state.title === App.defaultTitle.console ||
      this.state.title === App.defaultTitle.projects
    );
  }
  toggleTitle(xray) {
    if (!this.isDefult(this.state.title)) {
      return this.state.title;
    }
    return xray ? App.defaultTitle.console : App.defaultTitle.projects;
  }

  onXray = () => {
    const xray = !this.state.xray;
    this.setState({xray, title: this.toggleTitle(xray)});
  };

  saveConfig(){
    localStorage.setItem('projectConfig', JSON.stringify(this.state.blocksConfig));
  }
  render() {
    const {xray, blocksConfig, title} = this.state;
    return (
      <AppView
        xray={xray}
        blocksConfig={blocksConfig}
        title={title}
        xray={xray}
        onXray={this.onXray}
        updateConfig={this.updateConfig}
        setTitle={this.setTitle}
        showProjects={this.showProjects}
      />
    );
  }
}

export default App;
