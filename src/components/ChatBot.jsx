import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { useDispatch } from 'react-redux';
import { addMessage } from '../features/chatSlice';
import { FaRobot } from 'react-icons/fa';

const steps = [
  {
    id: '1',
    message: 'Hello! I am a simple chatbot. What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}! How can I help you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 1, label: 'Tell me about yourself', trigger: 'about' },
      { value: 2, label: 'What can you do?', trigger: 'capabilities' },
      { value: 3, label: 'End conversation', trigger: 'end' },
    ],
  },
  {
    id: 'about',
    message: 'I am a simple chatbot created to demonstrate React and Redux Toolkit integration!',
    trigger: 'options',
  },
  {
    id: 'capabilities',
    message: 'I can have simple conversations and help you understand how chatbots work!',
    trigger: 'options',
  },
  {
    id: 'end',
    message: 'Thank you for chatting! Have a great day!',
    end: true,
  },
];

const CustomChatbot = () => {
  const dispatch = useDispatch();

  const handleEnd = ({ steps, values }) => {
    console.log('Chat Ended:', steps, values);
    dispatch(addMessage({
      id: Date.now().toString(),
      message: 'Chat ended by user.',
      user: false,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        <ChatBot
          steps={steps}
          handleEnd={handleEnd}
          headerTitle={
            <div className="flex items-center gap-2">
              <FaRobot /> Simple Chatbot
            </div>
          }
          botAvatar="https://api.dicebear.com/7.x/bottts/svg?seed=bot"
          userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
          customStyle={{
            background: '#f9fafb',
            headerBgColor: '#4f46e5',
            headerFontColor: '#ffffff',
            headerFontSize: '16px',
            botBubbleColor: '#4f46e5',
            botFontColor: '#ffffff',
            userBubbleColor: '#e5e7eb',
            userFontColor: '#1f2937',
          }}
          bubbleOptionStyle={{
            background: '#4f46e5',
            color: '#ffffff',
          }}
          width="100%"
        />
      </div>
    </div>
  );
};

export default CustomChatbot;
