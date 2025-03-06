import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRobot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ChatWithBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setMessages([
      { sender: "bot", text: "Hi, I'm a bot. How can I help you?" },
    ]);
    return () => {
      setMessages([]);
    };
  }, []);

  const fetchBotReply = async (question, callback) => {
    try {
      const response = await fetch(
        "https://e1fa-171-252-189-243.ngrok-free.app/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: question }),
        }
      );
      const data = await response.json();
      callback(data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    fetchBotReply(input);
    const newMessage = { sender: "human", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setTimeout(() => {
      fetchBotReply(input, (botRep) => {
        const botReply = {
          sender: "bot",
          text: botRep.Note,
          Image: botRep.Image,
          Price: botRep.Price,
          ID: botRep.ID,
        };
        setMessages((prev) => [...prev, botReply]);
      });
    }, 1000);
  };

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="w-1/2">
        <div className="w-full mt-2 pt-4 pb-32  max-h-[92vh] min-h-[92vh] overflow-y-auto flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex my-2 ${
                msg.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              {msg.sender === "bot" && (
                <FontAwesomeIcon
                  icon={faRobot}
                  style={{ fontSize: 25 }}
                  className="border border-red-300 bg-red-300 text-white rounded-full p-2 mx-2"
                />
              )}
              <div className="flex flex-col">
                {msg.Price && (
                  <p className="text-white bg-red-300 p-2 w-fit my-2 rounded-lg">
                    {msg.Price}
                  </p>
                )}
                <p
                  className={`p-4 text-xl h-fit text-white max-w-5xl ${
                    msg.sender === "bot"
                      ? "bg-red-300 rounded-b-lg rounded-tr-lg ml-0"
                      : "bg-blue-500 rounded-b-lg rounded-tl-lg ml-6"
                  }`}
                >
                  {msg.text}
                </p>
                {msg.sender === "bot" && msg.Image && (
                  <div className="mt-2 gap-2">
                    <Link
                      className="my-2 hover:text-[#ff0000]"
                      to={"/productDetail/" + msg.ID}
                    >
                      <img
                        src={msg.Image}
                        alt="product"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-100 absolute bottom-0 w-1/2 rounded-xl p-4 grid grid-cols-12">
          <input
            type="text"
            className=" bg-transparent col-span-11 outline-none "
            placeholder="Ask any thing"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className=" text-black rounded-xl col-span-1 p-2 text-right"
          >
            <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: 25 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithBot;
