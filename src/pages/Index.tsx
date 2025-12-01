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
    name: 'Гортензия крупнолистная',
    price: 1290,
    category: 'hydrangea',
    difficulty: 'Средне',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/1145f7f2-0823-4918-bc3c-9d00a205ffa6.jpg',
    description: 'Роскошные шапки розовых и голубых цветов',
    careLevel: 'medium'
  },
  {
    id: 2,
    name: 'Гортензия метельчатая',
    price: 1490,
    category: 'hydrangea',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/3c3d40e8-7bbf-4173-97d4-d549a27fad7b.jpg',
    description: 'Неприхотливый морозостойкий сорт для сада',
    careLevel: 'easy'
  },
  {
    id: 3,
    name: 'Роза Чайно-гибридная',
    price: 890,
    category: 'rose',
    difficulty: 'Средне',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/036400a6-3a42-4097-8e0f-65e628d4a416.jpg',
    description: 'Классическая садовая роза с крупными бутонами',
    careLevel: 'medium'
  },
  {
    id: 4,
    name: 'Роза плетистая',
    price: 990,
    category: 'rose',
    difficulty: 'Средне',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/036400a6-3a42-4097-8e0f-65e628d4a416.jpg',
    description: 'Обильное цветение, идеальна для арок и беседок',
    careLevel: 'medium'
  },
  {
    id: 5,
    name: 'Роза Остина премиум',
    price: 1590,
    category: 'premium',
    difficulty: 'Сложно',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/3a03f1d8-83a1-4f05-9cfc-fc8e8475cd4a.jpg',
    description: 'Английская роза с пышными махровыми цветами',
    careLevel: 'hard'
  },
  {
    id: 6,
    name: 'Гортензия древовидная',
    price: 1190,
    category: 'premium',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/3c3d40e8-7bbf-4173-97d4-d549a27fad7b.jpg',
    description: 'Белоснежные соцветия, морозостойкий сорт',
    careLevel: 'easy'
  }
];

const reviews = [
  { name: 'Мария В.', text: 'Гортензии потрясающие! Огромные шапки цветов украшают сад с июня по сентябрь!', rating: 5 },
  { name: 'Александр П.', text: 'Розы прижились отлично. Крепкие саженцы, здоровая корневая система. Рекомендую!', rating: 5 },
  { name: 'Ирина С.', text: 'Заказала гортензию метельчатую - прекрасно перезимовала и обильно зацвела!', rating: 5 }
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
            <Icon name="Flower" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">FloraСад</h1>
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
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Саженцы роз и гортензий премиум</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Изысканный <span className="text-accent">романтичный</span> сад
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Качественные саженцы роз и гортензий с гарантией цветения и приживаемости
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
                src="https://cdn.poehali.dev/projects/578f409e-7bf9-4c4a-ae45-29cf5a9b6cc0/files/1145f7f2-0823-4918-bc3c-9d00a205ffa6.jpg" 
                alt="Розы и гортензии" 
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
            <h3 className="text-4xl font-bold mb-4">Наши саженцы</h3>
            <p className="text-xl text-muted-foreground">Розы и гортензии для роскошного сада</p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto p-1">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Icon name="LayoutGrid" size={18} />
                Все
              </TabsTrigger>
              <TabsTrigger value="hydrangea" className="flex items-center gap-2">
                <Icon name="Flower2" size={18} />
                Гортензии
              </TabsTrigger>
              <TabsTrigger value="rose" className="flex items-center gap-2">
                <Icon name="Rose" size={18} />
                Розы
              </TabsTrigger>
              <TabsTrigger value="premium" className="flex items-center gap-2">
                <Icon name="Sparkles" size={18} />
                Премиум
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
            <h3 className="text-4xl font-bold mb-4">Как ухаживать за розами и гортензиями</h3>
            <p className="text-xl text-muted-foreground">Экспертные советы для пышного цветения</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="water" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon name="Droplets" size={24} className="text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Полив</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Гортензии нуждаются в обильном поливе - почва должна быть всегда влажной, особенно в жару. 
                  Розы поливайте глубоко 2-3 раза в неделю под корень, избегая попадания воды на листья. 
                  Используйте отстоянную воду утром или вечером.
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
                  Гортензии предпочитают полутень или утреннее солнце с защитой от полуденного зноя. 
                  Розы любят солнечные места - минимум 6 часов прямого света в день. 
                  В тени цветение будет менее обильным.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="temp" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <Icon name="Thermometer" size={24} className="text-accent" />
                    </div>
                    <span className="text-lg font-semibold">Подкормка</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Гортензии подкармливайте специальными удобрениями для гортензий каждые 2 недели. 
                  Для голубых оттенков используйте подкислители почвы. Розы нуждаются в регулярных подкормках 
                  комплексными удобрениями весной и летом.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="soil" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon name="Loader" size={24} className="text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Обрезка и формирование</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Гортензии обрезайте ранней весной - удаляйте старые соцветия и слабые побеги. 
                  Розы требуют весенней формирующей обрезки и летнего удаления отцветших бутонов. 
                  Обрезка стимулирует новое цветение и поддерживает здоровье растений.
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
                <Icon name="Flower" size={28} className="text-primary" />
                <h4 className="text-xl font-bold">FloraСад</h4>
              </div>
              <p className="text-background/70">
                Петунии и розы премиум-качества с доставкой по России
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Гортензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Розы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Премиум сорта</a></li>
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
            <p>© 2024 FloraСад. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}