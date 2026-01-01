import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [volume, setVolume] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("М300");
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const concreteGrades = [
    { grade: "М100", price: 3200, use: "Подготовительные работы" },
    { grade: "М150", price: 3500, use: "Стяжки, дорожки" },
    { grade: "М200", price: 3800, use: "Фундаменты малоэтажных зданий" },
    { grade: "М250", price: 4100, use: "Перекрытия, лестницы" },
    { grade: "М300", price: 4500, use: "Монолитные конструкции" },
    { grade: "М350", price: 4900, use: "Колонны, балки, бассейны" }
  ];

  const handleCalculate = () => {
    const vol = parseFloat(volume);
    if (!isNaN(vol) && vol > 0) {
      const grade = concreteGrades.find(g => g.grade === selectedGrade);
      if (grade) {
        setCalculatedPrice(vol * grade.price);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">СеверБетон</div>
          <nav className="hidden md:flex gap-6">
            <a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="hover:text-accent transition-colors">О компании</a>
            <a href="#delivery" className="hover:text-accent transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button variant="secondary" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (4822) 000-000
          </Button>
        </div>
      </header>

      <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{backgroundImage: "url('https://cdn.poehali.dev/projects/cc3aedcd-5422-4286-ac70-0f6cc5620372/files/15a2b724-770f-4149-bccd-c1a043cc2f18.jpg')"}}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Качественный бетон с доставкой по Твери
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Собственное производство. Гарантия качества. Доставка 24/7
            </p>
            
            <Card className="bg-card/95 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Быстрый расчёт стоимости
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="grade" className="text-foreground">Марка бетона</Label>
                    <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {concreteGrades.map((item) => (
                          <SelectItem key={item.grade} value={item.grade}>
                            {item.grade} — {item.price} ₽/м³
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="volume" className="text-foreground">Объём бетона (м³)</Label>
                    <Input
                      id="volume"
                      type="number"
                      placeholder="Введите объём"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <Button onClick={handleCalculate} className="w-full" size="lg">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                  {calculatedPrice !== null && (
                    <div className="bg-accent text-accent-foreground p-4 rounded-lg text-center">
                      <div className="text-sm font-medium">Примерная стоимость</div>
                      <div className="text-3xl font-bold mt-1">
                        {calculatedPrice.toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="text-xs mt-2 opacity-90">
                        {selectedGrade} • {volume} м³ • {concreteGrades.find(g => g.grade === selectedGrade)?.price} ₽/м³
                      </div>
                      <div className="text-xs mt-1 opacity-90">
                        * Точная цена зависит от расстояния доставки
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Factory",
                title: "Собственное производство",
                description: "Контроль качества на всех этапах изготовления бетона"
              },
              {
                icon: "Clock",
                title: "Доставка 24/7",
                description: "Работаем круглосуточно без выходных и праздников"
              },
              {
                icon: "Truck",
                title: "Собственный автопарк",
                description: "Современные миксеры с GPS-мониторингом"
              },
              {
                icon: "ShieldCheck",
                title: "Гарантия качества",
                description: "Лабораторные испытания каждой партии бетона"
              },
              {
                icon: "Wallet",
                title: "Гибкие цены",
                description: "Система скидок для постоянных клиентов"
              },
              {
                icon: "FileText",
                title: "Полный пакет документов",
                description: "Сертификаты, паспорта качества, накладные"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Марки бетона и цены</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { grade: "М100", use: "Подготовительные работы", price: 3200 },
              { grade: "М150", use: "Стяжки, дорожки", price: 3500 },
              { grade: "М200", use: "Фундаменты малоэтажных зданий", price: 3800 },
              { grade: "М250", use: "Перекрытия, лестницы", price: 4100 },
              { grade: "М300", use: "Монолитные конструкции", price: 4500 },
              { grade: "М350", use: "Колонны, балки, бассейны", price: 4900 }
            ].map((item, index) => (
              <Card key={index} className="hover:border-accent transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-accent">{item.grade}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{item.price} ₽</div>
                      <div className="text-sm text-muted-foreground">за м³</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground">
            * Цены указаны при самовывозе. Стоимость доставки рассчитывается индивидуально
          </p>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">СеверБетон</strong> — надёжный поставщик 
                  качественного бетона в Твери и области с 2010 года.
                </p>
                <p>
                  Мы производим бетон всех марок на современном оборудовании 
                  с использованием качественных материалов от проверенных поставщиков.
                </p>
                <p>
                  Наша лаборатория проводит испытания каждой партии бетона, 
                  что гарантирует соответствие заявленным характеристикам.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <div className="text-4xl font-bold text-accent">14+</div>
                    <div className="text-sm">лет на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent">5000+</div>
                    <div className="text-sm">объектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent">50+</div>
                    <div className="text-sm">миксеров</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/cc3aedcd-5422-4286-ac70-0f6cc5620372/files/920b4fb2-15e3-403e-af84-2a30ac13d2a8.jpg"
                alt="Производство бетона"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Условия доставки</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">География доставки</h3>
                      <p className="text-muted-foreground">
                        Доставка по Твери и Тверской области в радиусе 50 км от завода. 
                        Возможна доставка на дальние расстояния по согласованию.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Сроки доставки</h3>
                      <p className="text-muted-foreground">
                        Подача первого миксера в течение 2-3 часов после оформления заказа. 
                        Работаем круглосуточно без выходных.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Объём поставки</h3>
                      <p className="text-muted-foreground">
                        Минимальный заказ — от 4 м³. Объём одного миксера от 4 до 10 м³. 
                        Возможна доставка любого объёма бетона.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CreditCard" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Оплата</h3>
                      <p className="text-muted-foreground">
                        Наличный и безналичный расчёт. Для юридических лиц — отсрочка платежа 
                        до 14 дней. Предоставляем полный пакет документов.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Укажите марку бетона, объём и адрес доставки"
                      className="mt-2 min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Мы свяжемся с вами в течение 15 минут
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-xl font-bold text-accent">+7 (4822) 000-000</p>
                      <p className="text-sm text-muted-foreground mt-1">Круглосуточно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-accent">info@betontver.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">
                        г. Тверь, промзона "Южная",<br />
                        ул. Складская, д. 15
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-muted-foreground">
                        Офис: пн-пт 8:00-18:00<br />
                        Производство и доставка: 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">БетонТверь</p>
          <p className="text-sm opacity-80">
            © 2024 Все права защищены. Качественный бетон с доставкой по Твери
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;