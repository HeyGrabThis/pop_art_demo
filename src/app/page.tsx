'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dot, Star, Zap, Circle, Triangle, Square } from 'lucide-react';

export default function Home() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  // const [showStarburst, setShowStarburst] = useState(false);

  const headerColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'purple',
    'orange',
    'cyan',
    'lime',
    'indigo',
    'teal',
    'amber',
  ];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // 색상 배열 정의
  const sectionColors = [
    { name: 'blue', bg: '#3b82f6' },
    { name: 'red', bg: '#ef4444' },
    { name: 'green', bg: '#22c55e' },
    { name: 'purple', bg: '#a855f7' },
    { name: 'pink', bg: '#ec4899' },
    { name: 'indigo', bg: '#6366f1' },
    { name: 'orange', bg: '#f97316' },
    { name: 'teal', bg: '#14b8a6' },
  ];

  // 색상 변경 함수
  const changeColor = () => {
    setCurrentColorIndex((prev) => (prev + 1) % sectionColors.length);
  };

  const [popArtText, setPopArtText] = useState('');
  const [generatedArt, setGeneratedArt] = useState(false);
  const [artColors, setArtColors] = useState({
    primary: '#ff1493',
    secondary: '#00ff00',
    background: '#ff4500',
  });

  // 기존 colorCombos 대신 새로운 색상 배열들 추가
  const primaryColors = [
    '#ff1493', // 딥 핑크
    '#ff4500', // 오렌지 레드
    '#ff0000', // 빨강
    '#ff69b4', // 핫 핑크
    '#ff00ff', // 마젠타
    '#4b0082', // 인디고
    '#0000ff', // 파랑
    '#00ff00', // 라임
    '#ffff00', // 노랑
    '#ffd700', // 골드
    '#00ffff', // 시안
    '#8a2be2', // 블루 바이올렛
  ];

  const secondaryColors = [
    '#00ff00', // 라임
    '#ffff00', // 노랑
    '#00ffff', // 시안
    '#ff00ff', // 마젠타
    '#ffd700', // 골드
    '#ff69b4', // 핫 핑크
    '#4169e1', // 로얄 블루
    '#32cd32', // 라임 그린
    '#ff1493', // 딥 핑크
    '#9400d3', // 다크 바이올렛
    '#ff4500', // 오렌지 레드
    '#1e90ff', // 도저 블루
  ];

  const backgroundColors = [
    '#ff4500', // 오렌지 레드
    '#00ffff', // 시안
    '#ffe66d', // 파스텔 노랑
    '#ffff00', // 노랑
    '#00ff00', // 라임
    '#ff69b4', // 핫 핑크
    '#4b0082', // 인디고
    '#9400d3', // 다크 바이올렛
    '#ff1493', // 딥 핑크
    '#1e90ff', // 도저 블루
    '#32cd32', // 라임 그린
    '#ffd700', // 골드
  ];

  // 팝아트 생성 함수 수정
  const generatePopArt = () => {
    if (!popArtText) return;

    // 각 배열에서 랜덤하게 색상 선택
    const randomColors = {
      primary: primaryColors[Math.floor(Math.random() * primaryColors.length)],
      secondary:
        secondaryColors[Math.floor(Math.random() * secondaryColors.length)],
      background:
        backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
    };

    // 선택된 색상들이 모두 다른지 확인하고 필요시 재선택
    while (
      randomColors.primary === randomColors.secondary ||
      randomColors.primary === randomColors.background ||
      randomColors.secondary === randomColors.background
    ) {
      randomColors.primary =
        primaryColors[Math.floor(Math.random() * primaryColors.length)];
      randomColors.secondary =
        secondaryColors[Math.floor(Math.random() * secondaryColors.length)];
      randomColors.background =
        backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    }

    setArtColors(randomColors);
    setGeneratedArt(true);
  };

  return (
    <div className='min-h-screen bg-yellow-400 p-8 relative overflow-hidden'>
      {/* Main Content */}
      <div className='relative z-10'>
        <header className='bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-opacity-30 p-6 rounded-lg shadow-lg mb-8 relative overflow-hidden'>
          <h1 className='text-6xl font-bold text-center tracking-tight relative z-10 flex justify-center items-center flex-wrap'>
            {'KITSCH & POP ART'.split('').map((letter, index) => (
              <span
                key={index}
                className={`inline-block transform hover:scale-125 transition-transform duration-300 ${
                  letter === ' ' ? 'mr-4' : ''
                }`}
                style={{
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // 가독성을 위한 약간의 그림자
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          {/* Starburst effect in the header */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500`}
          >
            {/* Multiple rotating elements with different colors and speeds */}
            <div className='w-96 h-96 absolute'>
              <div className='w-full h-full bg-yellow-400 rotate-45 transform scale-110 animate-[spin_3s_linear_infinite] opacity-70'></div>
            </div>
            <div className='w-80 h-80 absolute'>
              <div className='w-full h-full bg-pink-400 rotate-90 transform scale-110 animate-[spin_4s_linear_infinite_reverse] opacity-70'></div>
            </div>
            <div className='w-72 h-72 absolute'>
              <div className='w-full h-full bg-blue-400 rotate-180 transform scale-110 animate-[spin_5s_linear_infinite] opacity-70'></div>
            </div>
            <div className='w-64 h-64 absolute'>
              <div className='w-full h-full bg-green-400 rotate-[135deg] transform scale-110 animate-[spin_6s_linear_infinite_reverse] opacity-70'></div>
            </div>
          </div>
        </header>

        <main className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <section
            style={{ backgroundColor: sectionColors[currentColorIndex].bg }}
            className='p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group'
          >
            <div className='relative z-10'>
              <h2
                className='text-5xl font-extrabold text-white mb-4 transform 
                group-hover:scale-100 transition-transform duration-300 
                tracking-tight leading-tight'
              >
                Change the Color!
              </h2>
              <p
                className='text-2xl font-bold text-white mb-6 transform 
                group-hover:scale-100 transition-transform duration-300
                opacity-90'
              >
                Press the button to change the color
              </p>
              <div className='flex justify-center transform group-hover:translate-y-[-4px] transition-transform duration-300'>
                <Button
                  onClick={changeColor}
                  className='bg-yellow-400 text-blue-500 hover:bg-yellow-500 
                    text-lg font-bold animate-bounce'
                >
                  Change Color!
                </Button>
              </div>
            </div>
          </section>

          <section className='bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group'>
            {/* Animated Shapes on Hover는 유지 */}

            {/* Content */}
            <div className='relative z-10'>
              <h2
                className='text-5xl font-extrabold text-white mb-4 transform 
      group-hover:scale-100 transition-transform duration-300 
      tracking-tight leading-tight'
              >
                Make your own art!
              </h2>
              <p
                className='text-2xl font-bold text-white mb-6 transform 
      group-hover:scale-100 transition-transform duration-300
      opacity-90'
              >
                Create your own pop art that's colorful and fun
              </p>

              {/* Input and Generated Art Area */}
              <div className='space-y-4'>
                <div className='flex gap-4'>
                  <Input
                    type='text'
                    placeholder='Enter your text here'
                    value={popArtText}
                    onChange={(e) => setPopArtText(e.target.value)}
                    className='bg-white/90 text-purple-900 placeholder-purple-400'
                    maxLength={20}
                  />
                  <Button
                    onClick={generatePopArt}
                    className='bg-purple-700 text-white hover:bg-purple-800 
            text-lg font-bold transition-colors duration-300 
            border-2 border-white/20'
                  >
                    Make Now!
                  </Button>
                </div>

                {/* Generated Pop Art Display */}
                {generatedArt && (
                  <div
                    className='mt-6 p-8 rounded-lg shadow-lg transition-all duration-500'
                    style={{ backgroundColor: artColors.background }}
                  >
                    <div className='relative transform hover:scale-105 transition-transform duration-300'>
                      <div
                        className='absolute -inset-1 text-6xl font-black tracking-wider'
                        style={{
                          color: artColors.secondary,
                          textShadow: `3px 3px 0 ${artColors.primary}`,
                          WebkitTextStroke: `2px ${artColors.primary}`,
                        }}
                      >
                        {popArtText.toUpperCase()}
                      </div>
                      <div
                        className='text-6xl font-black tracking-wider'
                        style={{
                          color: artColors.primary,
                          WebkitTextStroke: `1px ${artColors.secondary}`,
                        }}
                      >
                        {popArtText.toUpperCase()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className='col-span-1 md:col-span-2 p-6 rounded-lg shadow-lg relative overflow-hidden'>
            {/* 팝아트스러운 배경 패턴 */}
            <div className='absolute inset-0 z-0'>
              {/* 도트 패턴 배경 */}
              <div className='absolute inset-0 grid grid-cols-8 gap-2 opacity-20'>
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`
                      aspect-square rounded-full
                      ${
                        i % 4 === 0
                          ? 'bg-yellow-400'
                          : i % 4 === 1
                          ? 'bg-pink-500'
                          : i % 4 === 2
                          ? 'bg-cyan-400'
                          : 'bg-purple-500'
                      }
                    `}
                  />
                ))}
              </div>
              {/* 그라데이션 오버레이 */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-purple-600/90' />
            </div>

            {/* 컨텐츠 */}
            <div className='relative z-10'>
              <h2 className='text-4xl font-black text-white mb-6 tracking-tight'>
                Pop Art Gallery
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {[1, 2, 3, 4].map((num, index) => (
                  <div
                    key={index}
                    className='group relative bg-white p-3 rounded-lg shadow-lg 
                      transform transition-all duration-300 hover:scale-105 
                      hover:shadow-xl hover:rotate-2'
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {/* 호버 시 나타나는 네온 효과 */}
                    <div
                      className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 
                      rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300'
                    />

                    <div className='relative h-40 rounded-lg overflow-hidden'>
                      <img
                        src={`/${num}.jpg`}
                        alt={`Pop Art ${num}`}
                        className={`w-full h-full object-cover transform transition-transform duration-300
                          ${hoverIndex === index ? 'scale-110' : 'scale-100'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 장식용 요소들 */}
            <div
              className='absolute top-4 right-4 w-20 h-20 rounded-full 
              bg-gradient-to-r from-yellow-400 to-pink-500 blur-xl opacity-50'
            />
            <div
              className='absolute bottom-4 left-4 w-16 h-16 rounded-full 
              bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-50'
            />
          </section>
        </main>

        <footer className='mt-8 bg-black p-6 rounded-lg shadow-lg'>
          <div className='flex justify-center space-x-4'>
            {[
              { color: 'red', hex: 'rgb(239, 68, 68)' },
              { color: 'blue', hex: 'rgb(59, 130, 246)' },
              { color: 'yellow', hex: 'rgb(234, 179, 8)' },
              { color: 'green', hex: 'rgb(34, 197, 94)' },
              { color: 'pink', hex: 'rgb(236, 72, 153)' },
            ].map((item) => (
              <Dot
                key={item.color}
                className='w-8 h-8 animate-bounce'
                style={{
                  color: item.hex,
                  animationDelay: `${Math.random()}s`,
                }}
              />
            ))}
          </div>
          <p className='text-white text-center mt-4'>
            2024 KITSCH & POP ART HONG SEUNG JIN
          </p>
        </footer>
      </div>

      {/* Background Patterns and Animated Figures */}
      <div className='fixed inset-0 z-0 overflow-hidden'>
        <div className='absolute inset-0 w-full h-full grid grid-cols-5 gap-4 opacity-20'>
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`
              w-full h-full rounded-full 
              ${
                i % 3 === 0
                  ? 'bg-blue-500'
                  : i % 3 === 1
                  ? 'bg-red-500'
                  : 'bg-green-500'
              }
              animate-pulse
            `}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
        <div className='absolute inset-0 w-full h-full grid grid-cols-10 gap-2 opacity-20'>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`
              w-full h-full 
              ${
                i % 4 === 0
                  ? 'bg-pink-500'
                  : i % 4 === 1
                  ? 'bg-purple-500'
                  : i % 4 === 2
                  ? 'bg-orange-500'
                  : 'bg-cyan-500'
              }
              ${i % 2 === 0 ? 'rounded-full' : 'rounded-none'}
              animate-bounce
            `}
              style={{ animationDelay: `${i * 0.05}s` }}
            ></div>
          ))}
        </div>
        {/* Animated Figures */}
        <div className='absolute inset-0 w-full h-full flex items-center justify-around pointer-events-none'>
          {[Star, Zap, Circle, Triangle, Square].map((Icon, index) => (
            <Icon
              key={index}
              className={`w-24 h-24 text-${headerColors[index]}-500 animate-bounce opacity-30`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
