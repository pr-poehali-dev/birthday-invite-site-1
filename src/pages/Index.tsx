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
            <div className="text-6xl mb-6">🎂</div>
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-primary">
              День рождения Елизаветы
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
              Празднуем 19 лет!
            </p>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-foreground">
              Дата уточняется • 14:00
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
              <h3 className="text-3xl font-medium mb-6">Комфортный стиль</h3>
              <div className="text-left max-w-2xl mx-auto space-y-4">
                <p className="text-lg text-muted-foreground">
                  <Icon name="Heart" size={20} className="text-primary inline mr-2" />
                  Приходите в том, в чем будет комфортно!
                </p>
                <p className="text-muted-foreground">
                  <strong>Важно:</strong> Удобная одежда, кроссовки или балетки — каблуки и платья оставьте дома. Будем двигаться, танцевать и веселиться!
                </p>
                <p className="text-muted-foreground">
                  Примеры: джинсы, брюки, удобные топы, свитера, кроссовки, кеды, балетки
                </p>
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