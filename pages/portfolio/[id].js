import { useRouter } from "next/router";

function PortfolioIdPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h1>Portfolio page with dynamic route!</h1>
        </div>
    );
}

export default PortfolioIdPage;
