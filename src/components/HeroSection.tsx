import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/cf4d1915-f4f9-46c6-9898-1c7311bdb08c/files/3feefa92-6b01-4f28-beee-c95578470767.jpg',
  'https://cdn.poehali.dev/projects/cf4d1915-f4f9-46c6-9898-1c7311bdb08c/files/b6a1bee8-15fb-4940-acba-39711f685021.jpg',
  'https://cdn.poehali.dev/projects/cf4d1915-f4f9-46c6-9898-1c7311bdb08c/files/94b41a5a-cfcc-43ac-a06f-fa899deac878.jpg',
  'https://cdn.poehali.dev/projects/cf4d1915-f4f9-46c6-9898-1c7311bdb08c/files/0d986422-de15-4f4c-981e-a2f922a7cb35.jpg',
];

const cars = [
  { name: 'BYD Seal', price: 'от 2 490 000 ₽', tag: 'Хит продаж' },
  { name: 'Haval Jolion', price: 'от 1 890 000 ₽', tag: 'Топ выбор' },
  { name: 'Chery Tiggo 8', price: 'от 2 190 000 ₽', tag: 'Семейный' },
  { name: 'Li Auto L7', price: 'от 4 290 000 ₽', tag: 'Премиум' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="inline-block rounded-full border border-red-500/60 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-6">
                🔥 Цены ниже рынка — без переплат
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                Китайские авто
                <span className="block text-red-400">по честным ценам</span>
              </h1>
              <p className="mt-4 text-lg font-light text-white/70 md:text-xl max-w-lg">
                Официальные поставки. Полная документация. Гарантия на все автомобили.
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="grid grid-cols-2 gap-3 max-w-lg">
                {cars.map((car) => (
                  <div
                    key={car.name}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-medium text-red-400 uppercase tracking-wide">{car.tag}</span>
                    <p className="text-white font-semibold mt-1">{car.name}</p>
                    <p className="text-white/60 text-sm mt-0.5">{car.price}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-600 hover:scale-105"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Написать в Telegram
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  Узнать цену
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-red-400' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
