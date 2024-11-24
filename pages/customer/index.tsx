import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trang chủ | Dịch vụ sửa chữa PC</title>
        <meta name="description" content="Trang chủ của dịch vụ sửa chữa PC. Chúng tôi cung cấp dịch vụ sửa chữa, bảo trì máy tính chất lượng." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Chào mừng đến với dịch vụ sửa chữa PC</h1>

        <p className={styles.description}>
          Chúng tôi cung cấp dịch vụ sửa chữa máy tính nhanh chóng và hiệu quả. Hãy chọn một trong các dịch vụ dưới đây để biết thêm chi tiết.
        </p>

        <div className={styles.grid}>
          <Link href="/customer/services" className={styles.card}>
            <h3>Dịch vụ sửa chữa &rarr;</h3>
            <p>Xem danh sách các dịch vụ sửa chữa máy tính của chúng tôi.</p>
          </Link>

          <Link href="/customer/contact" className={styles.card}>
            <h3>Liên hệ &rarr;</h3>
            <p>Gửi yêu cầu sửa chữa hoặc hỗ trợ.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Dịch vụ sửa chữa PC. Tất cả quyền được bảo vệ.</p>
      </footer>
    </div>
  );
}
