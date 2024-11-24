import { AppProps } from 'next/app'; // Import kiểu AppProps từ next/app
import '../styles/globals.css'; // Import CSS toàn cục
import '../styles/Home.module.css'; // Nếu muốn import CSS cho một trang cụ thể

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
