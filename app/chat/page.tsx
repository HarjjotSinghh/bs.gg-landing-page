'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Message = {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'bot',
    text: "I can see you are accessing Betswap from a restricted region but don't worry about it! Betswap is a VPN-friendly casino and we can help you set up your VPN in less than five minutes.",
    options: ['Great! Guide me through the set up.'],
  },
  { id: 2, sender: 'bot', text: 'What device are you using?', options: ['PC', 'Mobile'] },
  {
    id: 3,
    sender: 'bot',
    text: 'On PC we recommend that you use the free and easy to install "TunnelBear" VPN...',
  },
  {
    id: 4,
    sender: 'bot',
    text: 'On Mobile, we recommend using the "NordVPN" app. You can download it from your app store...',
  },
  {
    id: 5,
    sender: 'bot',
    text: 'Were you able to download and access the VPN with the instructions provided?',
    options: ['Yes', 'No'],
  },
  {
    id: 6,
    sender: 'bot',
    text: 'Awesome! Now before you go, would you like to get a 150% match to your deposit and over 100 free spins? 🎰',
    options: ['Of course! 🤑'],
  },
  {
    id: 7,
    sender: 'bot',
    text: 'Sorry to hear that. Let me know if you need any further assistance with setting up your VPN.',
  },
  {
    id: 8,
    sender: 'bot',
    text: 'All you need to do is sign up through the page below, use the promo code "SUPPLY" and you are set!\nCLICK HERE TO SIGN UP\nOnce registered make sure to verify your account through the link sent on your email! 🥳',
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isWaitingForUser, setIsWaitingForUser] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<'PC' | 'Mobile' | null>(null);

  const addMessage = useCallback((message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  const handleUserChoice = useCallback(
    (choice: string) => {
      addMessage({ id: Date.now(), sender: 'user', text: choice });
      setIsWaitingForUser(false);

      switch (choice) {
        case 'Great! Guide me through the set up.':
          setCurrentStep(1);
          break;
        case 'PC':
          setSelectedDevice('PC');
          setCurrentStep(2);
          break;
        case 'Mobile':
          setSelectedDevice('Mobile');
          setCurrentStep(3);
          break;
        case 'Yes':
          setCurrentStep(5);
          break;
        case 'No':
          setCurrentStep(6);
          break;
        case 'Of course! 🤑':
          setCurrentStep(7);
          break;
        default:
          setCurrentStep((prev) => prev + 1);
      }
    },
    [addMessage],
  );

  useEffect(() => {
    if (currentStep < initialMessages.length && !isWaitingForUser) {
      const timer = setTimeout(() => {
        const currentMessage = initialMessages[currentStep];

        if (currentStep === 2 && selectedDevice !== 'PC') {
          setCurrentStep(4);
          return;
        }

        if (currentStep === 3 && selectedDevice !== 'Mobile') {
          setCurrentStep(4);
          return;
        }

        addMessage(currentMessage);

        if (currentMessage.options) {
          setIsWaitingForUser(true);
        } else if (currentStep !== 6) {
          setCurrentStep((prev) => prev + 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isWaitingForUser, addMessage, selectedDevice]);

  return (
    <div className="max-w-6xl mx-auto py-24 lg:px-8 px-6">
      <Image src="/betswap-logo.png" className="mx-auto h-16 mb-8 w-auto" alt="Betswap" width={1280} height={720} />
      <div className="flex flex-col p-8 lg:p-12 bg-card rounded-xl">
        <div className="flex-grow mb-4 overflow-x-hidden">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ x: message.sender === 'bot' ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`mb-4 ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}
              >
                <div className="inline-flex flex-row gap-2 items-center">
                  {message.sender === 'bot' && (
                    <img
                      src="https://i.ibb.co/Fqv2x1w/logo-with-bg.jpg"
                      className="size-10 rounded-full"
                      alt="Betswap"
                      width={1280}
                      height={720}
                    />
                  )}
                  <div
                    className={`inline-block p-2.5 rounded-xl ${
                      message.sender === 'bot' ? 'bg-primary text-black' : 'bg-muted'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {isWaitingForUser && messages[messages.length - 1]?.options && (
          <AnimatePresence mode="wait">
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: (index) => {
                  return {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.3,
                      bounce: 0.5,
                      mass: 0.5,
                      stiffness: 100,
                      damping: 10,
                    },
                  };
                },
                exit: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.5 }}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={messages[messages.length - 1].options?.length}
              className="flex justify-center space-x-2"
            >
              {messages[messages.length - 1].options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleUserChoice(option)}
                  className="px-8 hover:bg-primary/90 transition-all duration-300 ease-in-out py-2 bg-primary text-black rounded-lg"
                >
                  {option}
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
