import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollProgressBar from './ScrollProgressBar';

export default function Layout() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ScrollProgressBar />
            <Header />
            <main style={{ flex: 1, background: 'var(--bg-light)' }}>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
}
