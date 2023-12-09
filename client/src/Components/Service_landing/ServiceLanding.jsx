import React from 'react';

const ServiceCard = ({ icon, title, content }) => {
    return (
        <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body text-center p-4 p-md-5">
                <img src={icon} alt={title} className="mb-4" width="56" height="56" />
                <h4 className="mb-4">{title}</h4>
                <p className="mb-4 text-secondary">{content}</p>
                <div className="fw-bold text-decoration-none link-primary">
                </div>
            </div>
        </div>

    );
};

const servicesData = [
    {
        title: 'Supply Chain Management',
        icon: './ServiceImages/order-delivery.png',
        content: 'AAL understands the complexities of today’s growing time-sensitive market demands. Our Premium Service is meticulously designed to address your time-bound delivery requirements with cost-effective delivery solutions. We prioritize efficiency and reliability to ensure your supply chain runs seamlessly.',
    },
    {
        title: 'Procurement Management',
        icon: './ServiceImages/procur.png',
        content: 'Traditionally, companies have maintained in-house procurement teams to manage their procurement functions. Leveraging our extensive experience and combined procurement expertise, we streamline the procurement process for multiple companies, ensuring efficiency and cost-effectiveness.',
    },
    {
        title: 'Clearance of Goods from Customs',
        icon: './ServiceImages/clearance.png',
        content: 'At AAL, we ensure the swift and efficient clearance of goods through customs. Our trusted partners specialize in expediting customs clearance procedures, minimizing delays and ensuring smooth operations.',
    },
    {
        title: 'Distribution Management',
        icon: './ServiceImages/distribution.png',
        content: "AAL's Express service offers a comprehensive range of express distribution services, granting you the flexibility to tailor your distribution solutions to suit your specific business requirements. Our services cover parcel, freight, and special cargo movements, all delivered cost-effectively and punctually.",
    },
    {
        title: 'Compliance Management (GST, Insurance)',
        icon: './ServiceImages/compilance.png',
        content: "In today's regulatory landscape, adherence to GST and other relevant laws governing the movement of goods is paramount. AAL offers complete compliance management solutions, handling the intricate compliance aspects of your distribution management. Our dedicated key account managers, stationed at your location, oversee these activities. Additionally, we boast in-house experts who specialize in insurance, reducing your manpower costs associated with handling such tasks.",
    },
];

const ServiceLanding = () => {
    return (
        <section className="services-section">
            <div className="container overflow-hidden">
                <div className="row gy-4">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            content={service.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceLanding;
