import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    message: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const targetDate = new Date('2025-11-02T14:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Ваше подтверждение принято');
    setFormData({ name: '', guests: '1', message: '' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/03/20/audio_5c9e6ec9a5.mp3" type="audio/mpeg" />
      </audio>
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <Button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 shadow-lg"
        size="icon"
      >
        <Icon name={isPlaying ? 'Volume2' : 'VolumeX'} size={24} />
      </Button>
      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center animate-fade-in">
          <div className="mb-8">
            <div className="text-6xl mb-6">
              <span className="text-primary">❤️</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-primary">
              День рождения Елизаветы
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
              Празднуем 19 лет!
            </p>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-foreground mb-8">
              2 ноября • 14:00
            </p>
            
            <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
              <div className="bg-card rounded-lg p-4 shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground mt-1">дней</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground mt-1">часов</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground mt-1">минут</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground mt-1">секунд</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-primary">
            Программа
          </h2>
          
          <div className="space-y-8">
            {[
              { time: '14:00', title: 'Встреча гостей', desc: 'Регистрация и приветствие' },
              { time: '15:00', title: 'Фуршет', desc: 'Угощения и праздничный торт' },
              { time: '18:00', title: 'Игры', desc: 'Весёлые игры и конкурсы для всех гостей' },
              { time: '19:30', title: 'Танцы', desc: 'Танцевальная программа и музыка' },
              { time: '21:00', title: 'Фотосессия', desc: 'Совместные фото на память' }
            ].map((item, index) => (
              <Card 
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="text-3xl font-light text-primary min-w-[100px]">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="venue" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-primary">
            Место проведения
          </h2>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-12">
              <div className="mb-6">
                <Icon name="MapPin" size={48} className="mx-auto text-primary mb-4" />
              </div>
              <h3 className="text-3xl font-medium mb-4">Санаторий Солотча</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Корпус 9<br />
                Солотча, Рязанская область
              </p>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('https://yandex.ru/maps/?ll=39.902222%2C54.696667&z=15&l=map&pt=39.902222,54.696667,pm2rdm', '_blank')}
              >
                <Icon name="Navigation" size={18} />
                Открыть на карте
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="dresscode" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-primary">
            Дресс-код
          </h2>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-12">
              <div className="mb-6">
                <Icon name="Sparkles" size={48} className="mx-auto text-primary mb-4" />
              </div>
              <h3 className="text-3xl font-medium mb-6">Элегантный стиль</h3>
              <div className="text-left max-w-2xl mx-auto space-y-4">
                <p className="text-lg text-muted-foreground">
                  <Icon name="Heart" size={20} className="text-primary inline mr-2" />
                  Приходите в своих лучших нарядах!
                </p>
                <p className="text-muted-foreground">
                  <strong>Рекомендуем:</strong> Корсеты, шелковые платья, атласные рубашки, элегантные костюмы. Блестящие аксессуары приветствуются!
                </p>
                <p className="text-muted-foreground">
                  Примеры: джинсы, брюки, удобные топы, свитера, кроссовки, кеды, балетки
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="guests" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-12 text-primary">
            Список гостей
          </h2>
          
          <Card className="border-none shadow-lg mb-16">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                {['Владимир', 'Александр', 'Дарья', 'Арина', 'Алёна'].map((guest, index) => (
                  <div key={index} className="flex items-center justify-center gap-3 p-4 bg-background rounded-lg">
                    <Icon name="User" size={24} className="text-primary" />
                    <span className="text-xl font-medium">{guest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rsvp" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-12 text-primary">
            Подтверждение
          </h2>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    required
                    placeholder="Имя Фамилия"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Количество гостей
                  </label>
                  <Input
                    required
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение (опционально)
                  </label>
                  <Textarea
                    placeholder="Особые пожелания или диетические ограничения"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[100px] text-lg"
                  />
                </div>
                
                <Button type="submit" className="w-full text-lg py-6">
                  Подтвердить участие
                </Button>
              </form>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                Просьба подтвердить участие заранее
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-12 text-primary">
            Галерея
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card 
                key={item}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${item * 50}ms` }}
              >
                <CardContent className="p-0 aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {['🎂', '🎈', '🎉', '🎊', '🌟', '💝'][item - 1]}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Здесь будут размещены фотографии с празднования
          </p>
        </div>
      </section>

      <footer className="py-12 px-4 text-center border-t bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-4">
            С нетерпением ждём встречи с вами!
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            ✨ 🎭 🎉
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;