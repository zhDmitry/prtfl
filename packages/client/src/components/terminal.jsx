import React, {Component} from "react";
import Terminal from "terminal-in-react";

class BlockTerminal extends Component {
  showMsg = () => "Hello World";

  setTitle = args => {
    const {setTitle} = this.props;
    setTitle(args.slice(1, args.length).join(""));
  };
  render() {
    const {setTitle, showProjects, updateConfig} = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh"
        }}
      >
        <Terminal
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{fontWeight: "bold", fontSize: "1em"}}
          commands={{
            "set-title": this.setTitle,
            "show-projects": args => showProjects(args[1]),
            "update-config": args => updateConfig(args[1], args[2])
          }}
          descriptions={{
            "set-title": "change title",
            "show-projects": `show all projects or asingle project
               show-projects - get all 
               show-projects cc - get one`,
             "update-config": `update projects configuration
              example:  update-config <project alias>.info.title value - set project title to value`,
         
          }}
          msg={`Oh, nooo. You get access to internal console.
p.s. type 'help' to get list of command`}
        />
      </div>
    );
  }
}

export default BlockTerminal;
