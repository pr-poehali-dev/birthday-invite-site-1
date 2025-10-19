import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Ваше подтверждение принято');
    setFormData({ name: '', guests: '1', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center animate-fade-in">
          <div className="mb-8">
            <div className="text-6xl mb-6">✨</div>
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-primary">
              Вечеринка Эпохи
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
              Приглашаем вас в путешествие во времени
            </p>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-foreground">
              15 ноября 2025 • 19:00
            </p>
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
              { time: '19:00', title: 'Встреча гостей', desc: 'Приветственный коктейль и фотозона' },
              { time: '20:00', title: 'Открытие вечера', desc: 'Торжественная речь и тост' },
              { time: '20:30', title: 'Ужин', desc: 'Изысканное меню эпохи' },
              { time: '21:30', title: 'Развлекательная программа', desc: 'Живая музыка и танцы' },
              { time: '23:00', title: 'Сюрприз вечера', desc: 'Особенный момент празднования' }
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
              <h3 className="text-3xl font-medium mb-4">Особняк "Эпоха"</h3>
              <p className="text-lg text-muted-foreground mb-6">
                ул. Тверская, 15<br />
                Москва, Россия
              </p>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('https://maps.google.com', '_blank')}
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
              <h3 className="text-3xl font-medium mb-6">Элегантность выбранной эпохи</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                <div>
                  <h4 className="text-xl font-medium mb-3 flex items-center gap-2">
                    <Icon name="User" size={20} className="text-primary" />
                    Для дам
                  </h4>
                  <p className="text-muted-foreground">
                    Вечерние платья в стиле выбранной эпохи, элегантные аксессуары, винтажные украшения
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3 flex items-center gap-2">
                    <Icon name="UserCircle" size={20} className="text-primary" />
                    Для кавалеров
                  </h4>
                  <p className="text-muted-foreground">
                    Классические костюмы, смокинги или исторические наряды соответствующего периода
                  </p>
                </div>
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
                Просьба подтвердить участие до 1 ноября
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 text-center border-t">
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
