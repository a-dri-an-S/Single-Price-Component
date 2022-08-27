import CommunitySection from "./CommunitySection";
import SubscriptionSection from "./SubscriptionSection";
import WhyUsSection from "./WhyUsSection";

import "../styles/Card.css";

const Card = () => {
    return (
        <main className="price-card">
            <div className="card-grid-1">
                <CommunitySection />
            </div>
            <div className="card-grid-2">
                <SubscriptionSection />
            </div>
            <div className="card-grid-3">
                <WhyUsSection />
            </div>
        </main>
    );
}

export default Card;