import { Leaf, MessageSquare } from 'lucide-react'

const FAQ = () => {
  const faqData = [
    {
      question: 'Как быстро можно заказать уборку?',
      answer: '— Мы рекомендуем записываться заранее: за 3-5 дней для базовой уборки, за 5-7 дней для генеральной.',
    },
    {
      question: 'Могу ли я на месте определиться, какая уборка мне нужна?',
      answer:
        '— К сожалению, нет. На каждую уборку выделяется определенное количество клинеров и ограниченный по времени слот. Определиться с требуемыми услугами необходимо в момент записи.',
    },
    {
      question: 'Какие средства вы используете?',
      answer: '— Профессиональные концентраты, которые легко смываются водой и не оставляют следов.',
    },
    {
      question: 'Можно ли отменить запись?',
      answer: '— Да, бесплатно за 24 часа до визита.',
    },
  ]

  return (
    <section
      className="pt-20 w-full"
      id="FAQ"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-12 h-12 text-primary mb-2" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Got
            <span className="text-primary"> Questions?</span>
          </h2>
        </div>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Find answers to the most common questions about our cleaning services. Can't find what you're looking for? Contact us directly.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl m-auto mb-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input
              defaultChecked={index === 0}
              name="my-accordion-2"
              type="radio"
            />
            <div className="collapse-title font-semibold">{item.question}</div>
            <div className="collapse-content text-sm">{item.answer}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="max-w-3xl m-auto bg-primary text-primary-content rounded-xl shadow-lg">
          <div className="p-8">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-90" />

            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>

            <p className="text-lg opacity-90 mb-6 max-w-md mx-auto">
              Our friendly customer service team is here to help. Get in touch and we'll answer any questions you have.
            </p>

            <button className="btn btn-outline rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageSquare className="w-4 h-4 mr-2" />
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FAQ
