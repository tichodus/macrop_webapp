import React from "react";
import { Button } from "@macrop/components/atoms";
import { ThemeProvider } from "styled-components";
import { Theme } from "@macrop/config";

export class App extends React.Component {
  private conn: WebSocket;
  constructor(props: any) {
    super(props);
    this.conn = new WebSocket("wss://72c87416.ngrok.io");
    this.conn.onopen = function(e) {
      console.log("Connection established!");
    };

    this.conn.onmessage = function(e) {
      console.log(e.data);
    };
  }

  // private onSocket = () => {
  //   this.conn.onmessage = this.onMessage;
  // };

  private connect = () => {
    this.conn.send("Cao micko lepi");
  };
  // private onMessage = (event: MessageEvent) => {
  //   console.log(event.data);
  // };

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Button onClick={this.connect}>Click</Button>
      </ThemeProvider>
    );
  }
}
