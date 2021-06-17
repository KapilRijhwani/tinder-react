import React from "react";
import "./ChatPage.css";
import Chat from "./Chat";
function ChatPage() {
  return (
    <div className="chats">
      <Chat
        name="p11111111111111111111"
        message="m111111111111111111111111"
        timestamp="40 sec ago"
        profilePic="https://images.unsplash.com/photo-1585850317957-069f3eb88b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <Chat
        name="p22222222222222222222222"
        message="m2222222222222222222"
        timestamp="50 sec ago"
        profilePic="https://images.unsplash.com/photo-1585850317957-069f3eb88b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <Chat
        name="p3333333333333333333"
        message="m33333333333333333333333"
        timestamp="10 sec ago"
        profilePic="https://images.unsplash.com/photo-1585850317957-069f3eb88b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <Chat
        name="p4444444444444444"
        message="m444444444444444444"
        timestamp="10 sec ago"
        profilePic="https://images.unsplash.com/photo-1585850317957-069f3eb88b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
    </div>
  );
}

export default ChatPage;
