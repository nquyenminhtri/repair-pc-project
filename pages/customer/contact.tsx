import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi yêu cầu sửa chữa ở đây, ví dụ gửi qua API.
    alert('Yêu cầu của bạn đã được gửi đi!');
  };

  return (
    <div>
      <Head>
        <title>Liên hệ | Dịch vụ sửa chữa PC</title>
        <meta name="description" content="Liên hệ với chúng tôi để yêu cầu dịch vụ sửa chữa PC." />
      </Head>

      <h1>Liên hệ với chúng tôi</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Yêu cầu sửa chữa</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Gửi yêu cầu</button>
      </form>
    </div>
  );
}
