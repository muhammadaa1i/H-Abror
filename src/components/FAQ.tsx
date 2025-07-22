import React from 'react';
import { Disclosure } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

type Lang = 'ru' | 'uz';
type FaqItem = {
  ru: { q: string; a: string };
  uz: { q: string; a: string };
};

const faqs: FaqItem[] = [
  {
    ru: {
      q: 'Какие услуги вы предлагаете?',
      a: 'Мы предоставляем консалтинговые услуги для местных и иностранных компаний по ведению бизнеса в Узбекистане, запуску новых проектов и их финансированию — охватывая юридические, технические, финансовые и организационные аспекты.'
    },
    uz: {
      q: 'Sizlar qanday xizmatlarni taklif qilasiz?',
      a: 'Biz mahalliy va xorijiy kompaniyalar uchun O‘zbekistonda biznes yuritish, yangi loyihalarni boshlash va moliyalashtirish jarayonlarini to‘liq qamrab oluvchi konsalting xizmatlarini taqdim etamiz – huquqiy, texnik, moliyaviy va tashkiliy jihatlari bilan birga.'
    }
  },
  {
    ru: {
      q: 'У меня есть план открыть новый завод или производственную линию. Чем вы можете помочь?',
      a: 'Мы оказываем полную поддержку — от разработки концепции проекта до выбора земли, подготовки проектной документации, получения разрешений, подбора оборудования, получения банковских кредитов и подбора персонала.'
    },
    uz: {
      q: 'Yangi zavod yoki ishlab chiqarish liniyasi ochish rejam bor. Qanday yordam bera olasiz?',
      a: 'Biz loyiha konsepsiyasidan tortib, yer tanlash, loyiha hujjatlarini tayyorlash, ruxsatnomalar olish, jihozlarni tanlash, bank kreditlari va kadrlar masalasigacha to‘liq yordam beramiz.'
    }
  },
  {
    ru: {
      q: 'Как начать сотрудничество с вами?',
      a: 'Свяжитесь с нами по телефону или электронной почте, указанным на странице контактов. Первая консультация — бесплатная. Далее мы формируем для вас индивидуальный пакет услуг и приступаем к работе на основании договора.'
    },
    uz: {
      q: 'Siz bilan ishlashni qanday boshlash mumkin?',
      a: 'Aloqa sahifamizdagi telefon yoki e-mail orqali bog‘laning. Dastlabki maslahat bepul. Keyingi bosqichda biz sizga individual xizmat paketi shakllantirib, shartnoma asosida ish boshlaymiz.'
    }
  },
  {
    ru: {
      q: 'Иностранный инвестор хочет начать бизнес в Узбекистане. Можете ли вы помочь?',
      a: 'Безусловно. Мы предоставляем полный комплекс услуг по регистрации компании, получению юридических разрешений, открытию банковских счетов и проведению переговоров с местными партнёрами.'
    },
    uz: {
      q: 'Xorijiy investor O‘zbekistonda biznes boshlamoqchi. Siz yordam bera olasizmi?',
      a: 'Albatta. Biz xorijiy investorlar uchun kompaniya ochish, huquqiy ruxsatnomalarni olish, bank hisoblari ochish va mahalliy sheriklar bilan muzokara yuritishda to‘liq xizmat ko‘rsatamiz.'
    }
  },
  {
    ru: {
      q: 'Можете ли вы дать рекомендации по получению банковского кредита?',
      a: 'Да. Мы консультируем по подготовке бизнес-плана, сметы проекта, технико-экономического обоснования, финансовых прогнозов и других необходимых документов, а также сопровождаем вас на всех этапах получения кредита.'
    },
    uz: {
      q: 'Bank krediti olishda zaruriy tavsiyalarni bera olasizmi?',
      a: 'Ha. Biz biznes-reja, loyiha smetasi, texnik-iqtisodiy asoslar, moliyaviy prognozlar va boshqa zarur hujjatlarni tayyorlash bo`yicha maslahatlar beramiz va sizni kredit olish bosqichida to‘liq qo‘llab-quvvatlaymiz.'
    }
  },
  {
    ru: {
      q: 'Каков опыт вашей компании?',
      a: 'С 2014 года мы помогли более чем 40 иностранным и 1000 местным бизнес-клиентам. Успешно реализовали проекты общей стоимостью более 100 миллионов долларов США.'
    },
    uz: {
      q: 'Kompaniyangizning tajribasi qanday?',
      a: '2014 yildan buyon 40+ xorijiy va 1000+ mahalliy biznes vakillariga yordam berganmiz. 100 million AQSh dollaridan ortiq qiymatdagi loyihalarni muvaffaqiyatli amalga oshirganmiz.'
    }
  },
  {
    ru: {
      q: 'В каких сферах вы реализовывали проекты?',
      a: 'Наш опыт охватывает текстильные фабрики, заводы по производству бытовой техники, переработку продуктов питания, производство строительных материалов, кабельную промышленность и другие отрасли.'
    },
    uz: {
      q: 'Siz qaysi sohalarda loyihalarni amalga oshirgansiz?',
      a: 'Tajribamizga tekstil fabrikalari, maishiy texnika zavodlari, oziq-ovqat mahsulotlarini qayta ishlash, qurilish materiallari, kabel ishlab chiqarish va boshqa sohalar kiradi.'
    }
  },
  {
    ru: {
      q: 'Как формируется стоимость ваших услуг?',
      a: 'Стоимость услуг рассчитывается индивидуально — в зависимости от объёма, сложности проекта и необходимых этапов. Мы придерживаемся принципов прозрачного ценообразования и чёткого планирования. После беседы с вами мы направим коммерческое предложение с конкретными цифрами.'
    },
    uz: {
      q: 'Sizning xizmatlaringiz narxi qanday belgilanadi?',
      a: 'Xizmat narxi loyiha hajmi, murakkabligi va talab qilinadigan bosqichlarga qarab individual ravishda shakllantiriladi. Biz har doim shaffof narxlash va aniq rejalashtirish tamoyiliga amal qilamiz. Siz bilan suhbatdan so`ng sizga yuboriladigan tijorat taklifida aniq raqamlar ko`rsatilgan bo`ladi!'
    }
  },
  {
    ru: {
      q: 'В каких регионах вы работаете?',
      a: 'Мы работаем по всему Узбекистану. Наши проекты успешно реализованы в таких регионах, как Сурхандарья, Сырдарья, Джизакская область, Ташкентская область и других.'
    },
    uz: {
      q: 'Sizlar qaysi hududlarda faoliyat yuritasiz?',
      a: 'Biz butun O‘zbekiston bo‘ylab xizmat ko‘rsatamiz. Loyihalarimiz Surxondaryo, Sirdaryo, Jizzax, Toshkent viloyatlari kabi ko‘plab hududlarda amalga oshirilgan.'
    }
  },
  {
    ru: {
      q: 'В чём отличие вашей компании от других?',
      a: 'Мы не просто даём советы — мы доводим проект до конца. На каждом этапе мы рядом с вами и поддерживаем вас до достижения конкретного результата. Наш опыт — ваша гарантия.'
    },
    uz: {
      q: 'Sizning kompaniyangizni boshqalardan farqi nimada?',
      a: 'Biz faqat maslahat bermaymiz – biz loyihani oxirigacha amalga oshiramiz. Har bir bosqichda siz bilan birga bo‘lib, aniq natijaga erishguncha qo‘llab-quvvatlaymiz. Bizning tajribamiz – sizning kafolatingiz.'
    }
  }
];

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="ml-4 text-2xl text-[#f8b830]">{open ? '-' : '+'}</span>
  );
}

const FAQ: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang: Lang = (i18n.language === 'uz' ? 'uz' : 'ru');
  return (
    <section className="bg-white py-12 md:py-20" id="faq" aria-label={t('faq.title')}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052035] mb-8">{t('faq.title')}</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="border-b pb-2">
                  <Disclosure.Button className="w-full flex items-center justify-between text-left text-[#052035] text-lg font-semibold focus:outline-none py-2">
                    <span>{item[lang].q}</span>
                    <PlusMinus open={open} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-[#052035] text-base font-normal animate-fadeIn">
                    <div>{item[lang].a}</div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 