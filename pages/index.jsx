import Head from 'next/head';
import OrderSummary from '../components/OrderSummary';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main>
                <OrderSummary/>  
            </main>
        </div>
    );
}
