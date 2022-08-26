import CommunitySection from "./CommunitySection";
import SubscriptionSection from "./SubscriptionSection";
import WhyUsSection from "./WhyUsSection";

import "../styles/Card.css";

const Card = () => {
    return (
        <main className="price-card">
            <CommunitySection />
            <SubscriptionSection />
            <WhyUsSection />
        </main>
    );
}

export default Card;