import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import Head from 'next/head'

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <Head>
                <title>Events App</title>
                <link rel="icon" href="/blog.ico"/>
            </Head>
            <EventList items={featuredEvents} />
        </div>
    );
}

export default HomePage;
