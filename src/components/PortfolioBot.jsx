import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export const PortfolioBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m Chris’s AI portfolio assistant. Ask me anything about his background, experience, projects, or resume.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const inputValue = input.trim();
    const userMessage = { role: "user", content: inputValue };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://personalportfolio-509b.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputValue }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "I’m here, but I didn’t get a valid response.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry — I couldn’t reach the server. If this is the first message, the backend may be waking up on Render (can take a bit on free tier).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[92vw] glass rounded-2xl border border-primary/30 shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="font-medium">AI Portfolio Assistant</div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-96">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm p-3 rounded-xl ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground ml-auto max-w-[85%]"
                    : "bg-surface text-foreground max-w-[85%]"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {isLoading && (
              <div className="text-sm p-3 rounded-xl bg-surface text-muted-foreground max-w-[85%]">
                Typing…
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about experience, skills, projects…"
              className="flex-1 px-4 py-2 rounded-xl bg-surface border border-border focus:outline-none focus:border-primary text-sm"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="p-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};