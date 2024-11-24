import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <Head>
        <title>Dịch vụ sửa chữa | Dịch vụ sửa chữa PC</title>
        <meta name="description" content="Danh sách các dịch vụ sửa chữa PC mà chúng tôi cung cấp." />
      </Head>

      <h1>Dịch vụ sửa chữa PC</h1>
      <p>Dưới đây là các dịch vụ sửa chữa máy tính mà chúng tôi cung cấp:</p>
      
      <ul>
        <li>
          <h3>Sửa chữa phần cứng</h3>
          <p>Chúng tôi sửa chữa tất cả các vấn đề liên quan đến phần cứng máy tính.</p>
        </li>
        <li>
          <h3>Sửa chữa phần mềm</h3>
          <p>Khắc phục các sự cố về phần mềm và hệ điều hành cho máy tính của bạn.</p>
        </li>
        <li>
          <h3>Vệ sinh máy tính</h3>
          <p>Vệ sinh bên ngoài và bên trong máy tính để đảm bảo hiệu suất tối ưu.</p>
        </li>
        <li>
          <h3>Cài đặt hệ điều hành</h3>
          <p>Cài đặt và cấu hình các hệ điều hành cho máy tính của bạn.</p>
        </li>
      </ul>

      <Link href="/customer/contact">
        <h3>Liên hệ để đặt dịch vụ sửa chữa</h3>
      </Link>
    </div>
  );
}
