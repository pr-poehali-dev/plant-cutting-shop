import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

type PlantCutting = {
  id: number;
  name: string;
  price: number;
  category: string;
  difficulty: string;
  image: string;
  description: string;
  careLevel: 'easy' | 'medium' | 'hard';
};

const plantCuttings: PlantCutting[] = [
  {
    id: 1,
    name: 'Монстера деликатесная',
    price: 890,
    category: 'decorative',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/5e9f36f0-c30d-4b1c-9990-5c0fef20be2e.jpg',
    description: 'Неприхотливое тропическое растение с эффектными резными листьями',
    careLevel: 'easy'
  },
  {
    id: 2,
    name: 'Потос золотистый',
    price: 450,
    category: 'decorative',
    difficulty: 'Очень легко',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/5e9f36f0-c30d-4b1c-9990-5c0fef20be2e.jpg',
    description: 'Идеален для начинающих, быстро растет и очищает воздух',
    careLevel: 'easy'
  },
  {
    id: 3,
    name: 'Эхеверия элеганс',
    price: 350,
    category: 'succulent',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/7704209c-d362-4e34-818a-fa06033fcedb.jpg',
    description: 'Суккулент с нежными голубоватыми листьями в форме розетки',
    careLevel: 'easy'
  },
  {
    id: 4,
    name: 'Крассула овата',
    price: 550,
    category: 'succulent',
    difficulty: 'Очень легко',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/7704209c-d362-4e34-818a-fa06033fcedb.jpg',
    description: 'Денежное дерево - классика для дома и офиса',
    careLevel: 'easy'
  },
  {
    id: 5,
    name: 'Филодендрон Пинк Принцесс',
    price: 2890,
    category: 'rare',
    difficulty: 'Средне',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/648c4ebd-96a7-4456-be61-3e5c5fe10abb.jpg',
    description: 'Редкая вариегатная форма с розовыми пятнами на листьях',
    careLevel: 'medium'
  },
  {
    id: 6,
    name: 'Монстера вариегатная',
    price: 4500,
    category: 'rare',
    difficulty: 'Сложно',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/648c4ebd-96a7-4456-be61-3e5c5fe10abb.jpg',
    description: 'Коллекционная форма с белыми пятнами, требует внимания',
    careLevel: 'hard'
  }
];

const reviews = [
  { name: 'Анна К.', text: 'Черенки пришли в отличном состояии! Уже появились новые корешки. Спасибо!', rating: 5 },
  { name: 'Михаил С.', text: 'Качество на высоте, упаковка надежная. Монстера прижилась за неделю.', rating: 5 },
  { name: 'Елена Д.', text: 'Заказываю уже третий раз. Все растения здоровые и крепкие!', rating: 5 }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPlants = selectedCategory === 'all' 
    ? plantCuttings 
    : plantCuttings.filter(plant => plant.category === selectedCategory);

  const getDifficultyColor = (level: string) => {
    if (level.includes('Очень легко')) return 'bg-primary text-primary-foreground';
    if (level.includes('Легко')) return 'bg-primary/80 text-primary-foreground';
    if (level.includes('Средне')) return 'bg-secondary text-secondary-foreground';
    return 'bg-accent text-accent-foreground';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">GreenCuttings</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#care" className="text-foreground hover:text-primary transition-colors">Советы</a>
            <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} />
            Корзина
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Свежие черенки каждую неделю</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Начни свой <span className="text-primary">зелёный</span> оазис
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Качественные черенки редких и популярных растений с гарантией приживаемости
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Выбрать черенки
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Советы по уходу
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-muted-foreground">Приживаемость</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/5e9f36f0-c30d-4b1c-9990-5c0fef20be2e.jpg" 
                alt="Черенки растений" 
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">Каталог</Badge>
            <h3 className="text-4xl font-bold mb-4">Наши черенки</h3>
            <p className="text-xl text-muted-foreground">Найдите идеальное растение для вашего дома</p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto p-1">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Icon name="LayoutGrid" size={18} />
                Все
              </TabsTrigger>
              <TabsTrigger value="decorative" className="flex items-center gap-2">
                <Icon name="Leaf" size={18} />
                Декоративные
              </TabsTrigger>
              <TabsTrigger value="succulent" className="flex items-center gap-2">
                <Icon name="Flower2" size={18} />
                Суккуленты
              </TabsTrigger>
              <TabsTrigger value="rare" className="flex items-center gap-2">
                <Icon name="Sparkles" size={18} />
                Редкие
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant, index) => (
              <Card 
                key={plant.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 right-4 ${getDifficultyColor(plant.difficulty)}`}>
                    {plant.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{plant.name}</CardTitle>
                  <CardDescription>{plant.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-primary">{plant.price} ₽</p>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Heart" size={18} />
                      <Icon name="Share2" size={18} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="care" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Советы</Badge>
            <h3 className="text-4xl font-bold mb-4">Как ухаживать за черенками</h3>
            <p className="text-xl text-muted-foreground">Простые инструкции для успешного укоренения</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="water" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon name="Droplets" size={24} className="text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Полив и влажность</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Поддерживайте субстрат умеренно влажным, но не мокрым. Поливайте черенки 2-3 раза в неделю, 
                  проверяя верхний слой почвы. Используйте отстоянную воду комнатной температуры. 
                  Опрыскивайте листья для повышения влажности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="light" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-full">
                      <Icon name="Sun" size={24} className="text-secondary" />
                    </div>
                    <span className="text-lg font-semibold">Освещение</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Размещайте черенки в месте с ярким рассеянным светом. Избегайте прямых солнечных лучей, 
                  особенно в первые недели. Идеально подходит восточное или западное окно. 
                  Зимой можно использовать фитолампу.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="temp" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <Icon name="Thermometer" size={24} className="text-accent" />
                    </div>
                    <span className="text-lg font-semibold">Температура</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Оптимальная температура для укоренения 20-25°C. Избегайте сквозняков и резких перепадов температуры. 
                  Не размещайте растения рядом с батареями отопления или кондиционерами.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="soil" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon name="Loader" size={24} className="text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Субстрат и пересадка</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Используйте легкий, воздухопроницаемый субстрат. Для декоративных растений подойдет смесь торфа и перлита. 
                  Для суккулентов добавьте песок. Пересаживайте в постоянный горшок после появления 2-3 новых листьев.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">Доставка</Badge>
            <h3 className="text-4xl font-bold mb-4">Информация о доставке</h3>
            <p className="text-xl text-muted-foreground">Быстро и безопасно доставляем по всей России</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Icon name="Package" size={32} className="text-primary" />
                </div>
                <CardTitle>Упаковка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Надежная упаковка с влагоудерживающим материалом. 
                  Защита от повреждений при транспортировке.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit">
                  <Icon name="Truck" size={32} className="text-secondary" />
                </div>
                <CardTitle>Сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  По Москве - 1-2 дня.
                  По России - 3-7 дней.
                  Отправка каждый понедельник и четверг.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                  <Icon name="Wallet" size={32} className="text-accent" />
                </div>
                <CardTitle>Стоимость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  По Москве - 300 ₽.
                  По России - от 500 ₽.
                  Бесплатно при заказе от 3000 ₽.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">Отзывы</Badge>
            <h3 className="text-4xl font-bold mb-4">Что говорят покупатели</h3>
            <p className="text-xl text-muted-foreground">Реальные отзывы наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Контакты</Badge>
            <h3 className="text-4xl font-bold mb-4">Свяжитесь с нами</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Ответим на все вопросы о черенках и уходе за ними
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" size={24} className="text-primary" />
                <a href="tel:+79991234567" className="text-lg hover:text-primary transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" size={24} className="text-primary" />
                <a href="mailto:info@greencuttings.ru" className="text-lg hover:text-primary transition-colors">
                  info@greencuttings.ru
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Instagram" size={24} className="text-primary" />
                <a href="#" className="text-lg hover:text-primary transition-colors">
                  @greencuttings
                </a>
              </div>
            </div>

            <Button size="lg" className="text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" size={28} className="text-primary" />
                <h4 className="text-xl font-bold">GreenCuttings</h4>
              </div>
              <p className="text-background/70">
                Качественные черенки растений с доставкой по всей России
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Декоративные</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Суккуленты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Редкие растения</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-background/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@greencuttings.ru</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2024 GreenCuttings. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
