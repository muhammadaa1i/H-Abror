import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const BOT_TOKEN = '7967434870:AAH46oVy8P2vrbJ9R5fxM7iyjjGSOLlkKYY';
const CHAT_ID = '1337108345';

const TelegramContactWidget: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = `Новая заявка с сайта:\nИмя: ${form.name}\nТелефон: ${form.phone}\nСообщение: ${form.message}`;
    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });
      setSending(false);
      setSent(true);
      setForm({ name: '', phone: '', message: '' });
      setTimeout(() => {
        setOpen(false);
        setSent(false);
      }, 1500);
    } catch (err) {
      setSending(false);
      alert('Ошибка отправки. Попробуйте позже.');
    }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-[#052035] hover:bg-[#bf9e55] transition-colors rounded-full shadow-lg p-4 flex items-center justify-center"
        style={{ width: 64, height: 64 }}
        aria-label="Contact us"
        onClick={() => setOpen(true)}
      >
        {/* Envelope Icon */}
        <i className="fa-solid fa-envelope text-white text-2xl"></i>
      </button>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-2xl shadow-xl w-[340px] max-w-full font-['Montserrat',sans-serif] m-6" onClick={e => e.stopPropagation()}>
            <div className="bg-[#052035] text-white rounded-t-2xl px-6 py-3 flex items-center justify-between">
              <span className="text-lg font-semibold">{t('contactform.title')}</span>
              <button onClick={() => setOpen(false)} className="text-white text-2xl leading-none">&times;</button>
            </div>
            <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <label className="text-[#052035] text-sm font-semibold">{t('contactform.name')}
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#bf9e55]"
                  required
                />
              </label>
              <label className="text-[#052035] text-sm font-semibold">{t('contactform.phone')}
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#bf9e55]"
                  required
                />
              </label>
              <label className="text-[#052035] text-sm font-semibold">{t('contactform.message')}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#bf9e55] resize-none"
                  rows={3}
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-2 bg-[#052035] text-white font-bold rounded-lg py-2 text-lg hover:bg-[#bf9e55] transition-colors"
                disabled={sending}
              >
                {sending ? t('contactform.sending') : sent ? t('contactform.sent') : t('contactform.send')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TelegramContactWidget; 