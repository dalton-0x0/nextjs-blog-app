import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import NewsletterRegistration from '../components/input/newsletter-registration';

function HomePage(props) {
    // const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <Head>
                <title>Featured Events</title>
                <meta
                    name="description"
                    content="featured events chosen specially for you"
                />
                {/* <link rel="icon" href="/blog.ico" /> */}
            </Head>
            <NewsletterRegistration />
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800,
    };
}

export default HomePage;
