import React, { useState, useRef, useEffect } from 'react';
import { Chat } from '@google/genai';
import { createHistorianChat, sendMessageToHistorian } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AiHistorian: React.FC = () => {
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'ようこそ。私はこの旅の記録を司る王室歴史家でございます。ウィーンの宮廷の秘密、あるいはプラハの路地の伝説について、何か知りたいことはございますか？' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChatSession(createHistorianChat());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || !chatSession) return;

    const userMessage = inputText;
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const reply = await sendMessageToHistorian(chatSession, userMessage);
      setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-24 px-0 md:px-4 bg-stone-900 border-t border-gold-900">
      <div className="max-w-4xl mx-auto bg-stone-950 md:border border-gold-700 md:rounded-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-stone-900 p-4 md:p-6 border-b border-gold-700 text-center">
          <h3 className="font-display text-xl md:text-2xl text-gold-400 tracking-widest">THE ROYAL HISTORIAN</h3>
          <p className="text-gray-400 text-xs md:text-sm mt-2 font-serif">あなたの個人的なガイドAIに質問する</p>
        </div>

        {/* Chat Area - Mobile Height Optimized */}
        <div className="h-[400px] md:h-[500px] overflow-y-auto p-4 md:p-6 space-y-6 bg-stone-950 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 md:p-4 rounded-sm font-serif leading-relaxed shadow-md text-sm md:text-base
                ${msg.role === 'user' 
                  ? 'bg-gold-900/30 text-gold-100 border-l-2 border-gold-500' 
                  : 'bg-stone-900 text-gray-300 border-l-2 border-gray-600'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-stone-900 text-gold-400 p-3 md:p-4 rounded-sm animate-pulse font-serif border-l-2 border-gray-600 text-sm">
                歴史の書を紐解いております...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 md:p-4 bg-stone-900 border-t border-gold-800 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="聞きたいことを入力..."
            /* text-base (16px) is crucial for iOS to prevent auto-zoom on focus */
            className="flex-1 bg-stone-950 text-white p-3 text-base border border-gold-900/50 focus:border-gold-500 outline-none font-serif placeholder-gray-600 transition-colors rounded-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-gold-600 hover:bg-gold-500 text-stone-950 px-4 md:px-6 py-3 font-display font-bold tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};