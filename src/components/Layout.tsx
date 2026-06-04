import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-light)' }}>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    );
}
