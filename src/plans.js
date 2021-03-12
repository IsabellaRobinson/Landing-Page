import PlanCard from "./planCard";
import "./plans.scss";

function Plans() {
    return (
        <section className="plans">
            <PlanCard
            heading="Group"
            summary="Basic sales &amp; marketing for up to 5 users"
            price="$25"
            link="/subscribe-group"
            getFrom=""
            features={[
                "Account & contact management",
                "Opportunity tracking",
                "Lead scoring, routing & assignment",
                "Task & event tracking",
                "Customizable reports & standard dashboards",
                "Mobile access, customization & administration",
                "Chatter-company social network",
                "Outlook Side Panel & sync",
                "Case management"
            ]}
            />

            <PlanCard
             heading="Professional"
             summary="Complete CRM for any size team"
             price="$65"
             link="/subscribe-professional"
             getFrom="Group"
             features={[
                "Campaigns",
                "Customizable dashboards",
                "Collaborative forecasting",
                "Products, quotes & orders",
                "Mass email",
                "Role permissions"
             ]}
            />

            <PlanCard
                heading="Enterprice"
                summary="Deploy customizable CRM for your business"
                price="$125"
                link="/subscribe-enterprice"
                getFrom="Professinal"
                features={[
                    "Workflow & approval automation",
                    "Report history tracking",
                    "Profiles and page layouts",
                    "Custom app development",
                    "Integration via web service API",
                    "Salesforce Identity",
                    "Salesforce Private AppExchange"
                ]}
            />

            <PlanCard
                heading="Unlimited"
                summary="Unlimited CRM power &amp; support "
                price="$250"
                link="/subscribe-unlimited"
                getFrom="Enterprice"
                features={[
                    "Unlimited customizations",
                    "Unlimited custom apps",
                    "Multiple sandboxes",
                    "Additional data storage",
                    "24x7 toll-free support",
                    "Access to 100+ admin services",
                    "Unlimited online training"
                ]}
            />
        </section>
    );
}

export default Plans;