import React, { Component } from "react";
import ChatList from "../modules/ChatList.js";
import Modal from "../modules/Modal.js";
import Chat from "../modules/Chat.js";
import { socket } from "../../client-socket.js";
import { get } from "../../utilities";

import "./Chatbook.css";

const ALL_CHAT = {
  _id: "ALL_CHAT",
  name: "ALL CHAT",
};

const TEST_MESSAGES = [
  {
    sender: {
      _id: 0,
      name: "Alex",
    },
    content: "i love aaron sippy cup",
  },
  {
    sender: {
      _id: 0,
      name: "Nik",
    },
    content: "i spend too much time on piazza",
  },
];

class Chatbook extends Component {
  /**
   * @typedef UserObject
   * @property {string} _id
   * @property {string} name
   */
  /**
   * @typedef MessageObject
   * @property {UserObject} sender
   * @property {string} content
   */
  /**
   * @typedef ChatData
   * @property {MessageObject[]} messages
   * @property {UserObject} recipient
   */

  constructor(props) {
    super(props);
    this.state = {
      activeChat: {
        recipient: ALL_CHAT,
        messages: TEST_MESSAGES,
      },
    };
  }

  loadMessageHistory(recipient) {
    // This function loads the messages by getting them from the server
    // TODO (step 4): get /api/chat and set the activeChat
  }

  componentDidMount() {
    document.title = "Chatbook";

    // TODO (step 4): call this.loadMessageHistory()

    // TODO (step 6): add socket.on for when received message
  }

  render() {
    if (!this.props.userId) return <div>Log in before using Chatbook</div>;

    return (
      <>
        <div className="u-flex u-relative Chatbook-container">
          <div className="Chatbook-chatContainer u-relative">
            <Chat data={this.state.activeChat} />
          </div>
        </div>
      </>
    );
  }
}

export default Chatbook;