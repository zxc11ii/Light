/**
 * Весь текст сайта на двух языках.
 * Ключи одинаковые — компоненты берут нужный словарь через useSettings().
 */

export const content = {
  ru: {
    code: 'ru',
    ui: {
      theme: { dark: 'Тёмная', light: 'Светлая', label: 'Тема' },
      lang: { label: 'Язык' },
      master: { on: 'зажечь всё', off: 'погасить всё' },
      lampOn: 'включить свет',
      lampOff: 'выключить свет',
      state: { on: 'горит', off: 'нажмите' },
      prev: 'Предыдущая карточка',
      next: 'Следующая карточка',
      gauge: 'накал',
      timelineNav: 'Хронология',
    },
    parts: {
      creator: 'Создатель',
      chronicle: 'Хроника',
      facts: 'Факты',
      today: 'Сегодня',
    },
    hero: {
      eyebrow: 'Очерк · электрический свет',
      title: 'История',
      accent: 'лампы',
      lead: 'Двести лет человечество училось держать огонь внутри стеклянного шара. Как это получилось и почему победил не тот, кто был первым.',
      hint: 'нажмите на лампу',
    },
    lamps: {
      edison: { title: 'Лампа Эдисона', sub: 'угольная нить · колба G125' },
      desk: { title: 'Настольная', sub: 'XX век · направленный свет' },
      ceiling: { title: 'Потолочная', sub: 'наши дни · светодиод' },
    },
    creator: {
      title: 'Человек, продавший свет',
      name: ['Томас Алва', 'Эдисон'],
      facts: [
        ['Годы жизни', '1847 — 1931'],
        ['Патентов в США', '1093'],
        ['Образование', 'три месяца школы, дальше — мать и книги'],
        ['Главное', 'не лампа, а система, в которую её можно вкрутить'],
      ],
      paragraphs: [
        'Он не изобрёл лампу накаливания. К моменту его первых опытов ей было почти сорок лет, а патенты Лодыгина и Суона уже существовали. Эдисон сделал другое: превратил лабораторный прибор в товар. Тонкая нить с высоким сопротивлением — чтобы лампы включались параллельно. Хороший вакуум — чтобы нить не сгорала. И вся инфраструктура вокруг: цоколь, патрон, выключатель, счётчик, центральная станция.',
        'Конкуренты продавали лампу. Эдисон продавал освещённый дом — и поэтому выиграл. Хотя главную войну своей жизни, «войну токов» против Теслы и Вестингауза, он проиграл: победил переменный ток.',
      ],
      quote: '«Гений — это один процент вдохновения и девяносто девять процентов пота».',
      cite: 'Томас Эдисон',
      photos: [
        {
          src: '/foto/tomas3.jpg',
          alt: 'Томас Алва Эдисон',
          caption: 'Томас Алва Эдисон в библиотеке лаборатории',
          focus: '50% 22%',
        },
        {
          src: '/foto/tomas2.jpg',
          alt: 'Эдисон рассматривает лампу накаливания',
          caption: 'С лампой накаливания — той самой, что он не изобрёл',
          focus: '45% 40%',
        },
        {
          src: '/foto/tomas1.jpg',
          alt: 'Эдисон в своей лаборатории',
          caption: '«Фабрика изобретений» в Менло-Парке работала как завод',
          focus: '50% 35%',
        },
      ],
      rivalsTitle: 'Те, кто был раньше',
      rivals: [
        {
          name: 'Александр Лодыгин',
          role: '1847 — 1923 · Россия',
          text: 'Первым довёл лампу до уличного применения и первым предложил вольфрамовую нить. Патенты продал General Electric, славу — почти никому.',
          photos: [
            {
              src: '/foto/Alexander.jpg',
              alt: 'Александр Лодыгин',
              caption: 'Его лампы горели на улицах Петербурга за пять лет до Эдисона',
              focus: '50% 34%',
              paper: true,
            },
          ],
        },
        {
          name: 'Джозеф Суон',
          role: '1828 — 1914 · Англия',
          text: 'Зажёг лампу в своём доме раньше Эдисона и получил британский патент на месяцы раньше. Спор кончился совместной фирмой Ediswan.',
          photos: [
            {
              src: '/foto/Joseph1.jpg',
              alt: 'Джозеф Суон',
              caption: 'Химик, выигравший патентный спор и всё равно оставшийся вторым',
              focus: '58% 26%',
            },
            {
              src: '/foto/Joseph2.jpg',
              alt: 'Джозеф Суон в своей лаборатории',
              caption: 'Его лаборатория. Здесь лампа зажглась раньше, чем в Менло-Парке',
              focus: '50% 38%',
            },
          ],
        },
        {
          name: 'Ирвинг Ленгмюр',
          role: '1881 — 1957 · США',
          text: 'Догадался наполнить колбу инертным газом и свить нить в спираль. Нобелевский лауреат — и автор той самой формы лампочки.',
          photos: [
            {
              src: '/foto/Irving.jpg',
              alt: 'Ирвинг Ленгмюр',
              caption: 'Спираль и инертный газ — форма лампочки на сто лет вперёд',
              focus: '50% 26%',
            },
          ],
        },
      ],
    },
    chronicle: {
      title: 'Как зажигали свет',
      lead: 'Лампочку не изобрели однажды — её собирали по частям почти столетие. Чем дальше по хронике, тем ярче горит лампа.',
      items: [
        {
          year: '1802',
          title: 'Дуга в лаборатории',
          text: 'Василий Петров собирает батарею из 2100 кружков меди и цинка и получает устойчивую дугу между угольными стержнями. Свет из электричества перестаёт быть догадкой — но горит он минуты.',
        },
        {
          year: '1840',
          title: 'Первая колба',
          text: 'Уоррен де ла Рю запаивает платиновую спираль в вакуумированную трубку. Идея верна до мелочей, но платина дороже золота — лампа остаётся лабораторной игрушкой.',
        },
        {
          year: '1860',
          title: 'Уголь вместо металла',
          text: 'Джозеф Суон меняет платину на обугленную бумагу. Насосы того времени не дают глубокого вакуума, нить чернеет за минуты, и он откладывает опыты почти на двадцать лет.',
        },
        {
          year: '1874',
          title: 'Патент Лодыгина',
          text: 'Александр Лодыгин получает привилегию № 1619 на лампу с угольным стержнем в откачанном сосуде. Его лампами освещают Одесскую улицу в Петербурге — первое уличное электрическое освещение в мире.',
        },
        {
          year: '1879',
          title: '13,5 часов, которые всё решили',
          text: '21 октября лампа Эдисона с обугленной хлопковой нитью горит тринадцать с половиной часов подряд. Скоро волокно японского бамбука доведёт ресурс до 1200 часов.',
        },
        {
          year: '1880',
          title: 'Патент № 223 898',
          text: 'Эдисон патентует не только лампу, но всю систему вокруг: цоколь, патрон, выключатель, счётчик. Продаётся не лампочка — продаётся электричество в доме.',
        },
        {
          year: '1882',
          title: 'Улица Перл-стрит',
          text: 'В Нижнем Манхэттене запускается первая центральная электростанция: шесть паровых динамо, 400 ламп, 85 подписчиков. Город впервые освещён не огнём.',
        },
        {
          year: '1906',
          title: 'Вольфрам',
          text: 'Лодыгин продаёт General Electric патенты на нити из тугоплавких металлов, а Уильям Кулидж делает вольфрам ковким. Уголь уходит навсегда.',
        },
        {
          year: '1913',
          title: 'Газ и спираль',
          text: 'Ирвинг Ленгмюр свивает нить в спираль и заполняет колбу аргоном с азотом. Лампа обретает вид, который не изменится следующие сто лет.',
        },
        {
          year: '2014',
          title: 'Свет без нити',
          text: 'Нобелевскую премию дают за синий светодиод — последнюю деталь, без которой не собрать белый LED. Раскалённой нити больше нет.',
        },
      ],
    },
    facts: {
      title: 'Шесть фактов',
      items: [
        {
          n: '6000',
          title: 'растений на одну нить',
          text: 'Люди Эдисона перебрали шесть тысяч видов растительных волокон. Победил бамбук из японской префектуры Киото.',
        },
        {
          n: 'E27',
          title: 'буква вместо подписи',
          text: 'E в маркировке цоколя — это Edison, число — диаметр резьбы. Вкручивая лампочку, вы пользуетесь стандартом 1880-х.',
        },
        {
          n: '5 %',
          title: 'света, 95 % тепла',
          text: 'Столько энергии лампа накаливания превращает в видимый свет. Светодиод отдаёт до половины — поэтому он и победил.',
        },
        {
          n: '1901',
          title: 'лампа, которая не гаснет',
          text: 'В пожарной части Ливермора с 1901 года горит угольная лампа на четыре ватта. Нить убивают не часы работы, а включения.',
        },
        {
          n: '1000',
          title: 'часов по сговору',
          text: 'В 1924 году картель «Фебус» ограничил срок службы ламп тысячей часов. Заводы штрафовали за лампы, которые жили дольше.',
        },
        {
          n: '1 мин',
          title: 'темноты в память',
          text: 'В день похорон Эдисона, 21 октября 1931 года, в Америке на минуту приглушили свет.',
        },
      ],
    },
    today: {
      title: 'Свет, который у вас дома',
      lead: 'Две лампы, между которыми сто лет. Обе зажигаются одним и тем же жестом.',
      desk: 'Лампа под потолком освещала комнату целиком — как раньше люстра со свечами. Настольная разрешила забрать свет себе: круг на столе, страница книги, лицо собеседника в темноте.',
      ceiling:
        'В современном светильнике нечему раскаляться: свет рождается в кристалле размером с песчинку. Но дизайнеры до сих пор рисуют светодиодам тёплый жёлтый оттенок — тот самый, что давала раскалённая нить.',
    },
    footer: {
      line: 'Свет — это привычка, которой всего сто сорок лет',
    },
  },

  en: {
    code: 'en',
    ui: {
      theme: { dark: 'Dark', light: 'Light', label: 'Theme' },
      lang: { label: 'Language' },
      master: { on: 'turn all on', off: 'turn all off' },
      lampOn: 'turn the light on',
      lampOff: 'turn the light off',
      state: { on: 'lit', off: 'click' },
      prev: 'Previous card',
      next: 'Next card',
      gauge: 'glow',
      timelineNav: 'Timeline',
    },
    parts: {
      creator: 'The maker',
      chronicle: 'Chronicle',
      facts: 'Facts',
      today: 'Today',
    },
    hero: {
      eyebrow: 'An essay · electric light',
      title: 'A history of',
      accent: 'the lamp',
      lead: 'For two hundred years people learned to keep fire inside a glass sphere. How it happened — and why the winner was not the one who got there first.',
      hint: 'click the lamp',
    },
    lamps: {
      edison: { title: 'Edison bulb', sub: 'carbon filament · G125 globe' },
      desk: { title: 'Desk lamp', sub: '20th century · directed light' },
      ceiling: { title: 'Ceiling light', sub: 'today · light-emitting diode' },
    },
    creator: {
      title: 'The man who sold light',
      name: ['Thomas Alva', 'Edison'],
      facts: [
        ['Lifetime', '1847 — 1931'],
        ['US patents', '1093'],
        ['Schooling', 'three months, then his mother and books'],
        ['What mattered', 'not the bulb, but the system you screw it into'],
      ],
      paragraphs: [
        'He did not invent the incandescent lamp. By the time he began, it was nearly forty years old and the patents of Lodygin and Swan already existed. Edison did something else: he turned a laboratory instrument into a product. A thin, high-resistance filament, so lamps could be wired in parallel. A good vacuum, so the filament would not burn away. And everything around it — the screw base, the socket, the switch, the meter, the central station.',
        'His rivals sold a bulb. Edison sold a lit house, and that is why he won — even though he lost the great battle of his life. In the war of the currents against Tesla and Westinghouse, alternating current took everything.',
      ],
      quote: '"Genius is one percent inspiration and ninety-nine percent perspiration."',
      cite: 'Thomas Edison',
      photos: [
        {
          src: '/foto/tomas3.jpg',
          alt: 'Thomas Alva Edison',
          caption: 'Thomas Alva Edison in the laboratory library',
          focus: '50% 22%',
        },
        {
          src: '/foto/tomas2.jpg',
          alt: 'Edison examining an incandescent lamp',
          caption: 'Holding the incandescent lamp — the one he did not invent',
          focus: '45% 40%',
        },
        {
          src: '/foto/tomas1.jpg',
          alt: 'Edison in his laboratory',
          caption: 'The invention factory at Menlo Park ran like a plant',
          focus: '50% 35%',
        },
      ],
      rivalsTitle: 'The ones who came first',
      rivals: [
        {
          name: 'Alexander Lodygin',
          role: '1847 — 1923 · Russia',
          text: 'First to put the lamp on public streets and first to propose a tungsten filament. He sold his patents to General Electric and kept almost none of the credit.',
          photos: [
            {
              src: '/foto/Alexander.jpg',
              alt: 'Alexander Lodygin',
              caption: 'His lamps lit streets in St Petersburg five years before Edison',
              focus: '50% 34%',
              paper: true,
            },
          ],
        },
        {
          name: 'Joseph Swan',
          role: '1828 — 1914 · England',
          text: 'Lit a lamp in his own house before Edison and held the British patent months earlier. The dispute ended in a joint company, Ediswan.',
          photos: [
            {
              src: '/foto/Joseph1.jpg',
              alt: 'Joseph Swan',
              caption: 'The chemist who won the patent fight and finished second anyway',
              focus: '58% 26%',
            },
            {
              src: '/foto/Joseph2.jpg',
              alt: 'Joseph Swan in his laboratory',
              caption: 'His laboratory. The lamp was lit here before it was lit at Menlo Park',
              focus: '50% 38%',
            },
          ],
        },
        {
          name: 'Irving Langmuir',
          role: '1881 — 1957 · USA',
          text: 'Worked out that the bulb should hold inert gas and the filament should be a coil. A Nobel laureate — and the author of the bulb shape everyone knows.',
          photos: [
            {
              src: '/foto/Irving.jpg',
              alt: 'Irving Langmuir',
              caption: 'The coil and the inert gas — the bulb shape for a century to come',
              focus: '50% 26%',
            },
          ],
        },
      ],
    },
    chronicle: {
      title: 'How the light was lit',
      lead: 'The bulb was not invented once. It was assembled piece by piece over a century. The further you go, the brighter the lamp burns.',
      items: [
        {
          year: '1802',
          title: 'An arc in the laboratory',
          text: 'Vasily Petrov builds a battery of 2100 copper and zinc discs and draws a steady arc between two carbon rods. Electric light stops being a guess — but it lasts minutes.',
        },
        {
          year: '1840',
          title: 'The first bulb',
          text: 'Warren de la Rue seals a platinum coil inside an evacuated tube. The idea is right in every detail, but platinum costs more than gold and the lamp stays a laboratory toy.',
        },
        {
          year: '1860',
          title: 'Carbon instead of metal',
          text: 'Joseph Swan replaces platinum with carbonised paper. The pumps of the day cannot reach a deep vacuum, the filament blackens within minutes, and he shelves the work for almost twenty years.',
        },
        {
          year: '1874',
          title: "Lodygin's patent",
          text: 'Alexander Lodygin is granted privilege No. 1619 for a lamp with a carbon rod in an evacuated vessel. His lamps light Odesskaya Street in St Petersburg — the first electric street lighting in the world.',
        },
        {
          year: '1879',
          title: 'The 13.5 hours that settled it',
          text: "On 21 October Edison's lamp with a carbonised cotton thread burns for thirteen and a half hours straight. Carbonised Japanese bamboo will soon push the life to 1200 hours.",
        },
        {
          year: '1880',
          title: 'Patent No. 223,898',
          text: 'Edison patents not just the lamp but the whole system around it: base, socket, switch, meter. What is sold is not a bulb — it is electricity in the house.',
        },
        {
          year: '1882',
          title: 'Pearl Street',
          text: 'The first central power station opens in Lower Manhattan: six steam dynamos, 400 lamps, 85 subscribers. For the first time a city is lit by something other than fire.',
        },
        {
          year: '1906',
          title: 'Tungsten',
          text: 'Lodygin sells General Electric his patents on refractory-metal filaments, and William Coolidge makes tungsten ductile. Carbon is gone for good.',
        },
        {
          year: '1913',
          title: 'Gas and coil',
          text: 'Irving Langmuir winds the filament into a coil and fills the bulb with argon and nitrogen. The lamp takes the shape it will keep for the next hundred years.',
        },
        {
          year: '2014',
          title: 'Light without a filament',
          text: 'The Nobel Prize goes to the blue light-emitting diode — the last piece needed to build a white LED. The glowing filament is finished.',
        },
      ],
    },
    facts: {
      title: 'Six facts',
      items: [
        {
          n: '6000',
          title: 'plants for one filament',
          text: "Edison's men worked through six thousand plant fibres. Bamboo from Kyoto prefecture in Japan won.",
        },
        {
          n: 'E27',
          title: 'a letter instead of a signature',
          text: 'The E in a lamp base stands for Edison; the number is the thread diameter. Every time you screw in a bulb you use an 1880s standard.',
        },
        {
          n: '5%',
          title: 'light, 95% heat',
          text: 'That is how much energy an incandescent lamp turns into visible light. An LED gives up to half — which is why it won.',
        },
        {
          n: '1901',
          title: 'the lamp that never goes out',
          text: 'A four-watt carbon lamp has burned in a Livermore fire station since 1901. What kills a filament is not hours of use but switching on.',
        },
        {
          n: '1000',
          title: 'hours by agreement',
          text: 'In 1924 the Phoebus cartel capped lamp life at a thousand hours. Factories were fined for bulbs that lasted longer.',
        },
        {
          n: '1 min',
          title: 'of darkness in memory',
          text: "On the day of Edison's funeral, 21 October 1931, America dimmed its lights for a minute.",
        },
      ],
    },
    today: {
      title: 'The light in your home',
      lead: 'Two lamps a century apart. Both answer to the same gesture.',
      desk: 'A lamp on the ceiling lit the whole room, the way a candle chandelier once did. The desk lamp let you keep the light for yourself: a circle on the table, a page of a book, a face in the dark.',
      ceiling:
        'There is nothing to heat in a modern fixture: the light is born in a crystal the size of a grain of sand. Yet designers still give LEDs the warm yellow cast of a glowing filament.',
    },
    footer: {
      line: 'Electric light is a habit only a hundred and forty years old',
    },
  },
};
