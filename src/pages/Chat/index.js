import React from "react";
import ChatContainer from "../../components/ChatBox/ChatContainer";
import ChatSidebar from "../../components/ChatBox/ChatSidebar";

function ChatMessage() {
  return (
    <div className="h-full w-full flex antialiased text-black-200 bg-white overflow-hidden">
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row min-h-0">
          <ChatSidebar />
          <ChatContainer />
        </main>
      </div>
    </div>
  );
}

export default ChatMessage;
