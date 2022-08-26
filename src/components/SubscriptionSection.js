import "../styles/SubscriptionSection.css"

const SubscriptionSection = () => {
    return (
        <section className="card-subscription-section">
            <h1 className="card-subscription-title">
                Monthly Subscription
            </h1>
            <p className="card-subscription-price">
                <span className="card-subscription-price-amount">
                    $29
                </span>
                per month
            </p>
            <p className="card-subscription-description">
                Full access for less than $1 a day
            </p>
            <button className="card-subscription-button">
                Sign Up
            </button>
        </section>
    );
}

export default SubscriptionSection;