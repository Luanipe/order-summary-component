import Head from 'next/head';
import OrderSummary from '../components/OrderSummary';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Order Summary Component</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <OrderSummary/>  
            </main>
        </div>
    );
}
