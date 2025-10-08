// src/pages/ServicesView.tsx

import React, { useState, type FC } from 'react';

export const ServicesView: FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const packages = [
    {
      id: 'starter',
      name: 'Local SEO Starter',
      price: '$99',
      description: 'Essential local SEO to get your business on the map and ranking.',
      features: [
        'Google Business Profile Optimization',
        'Local Keyword Research (10 keywords)',
        'On-Page SEO for 5 Pages',
        'Monthly Performance Report',
        'Basic Citation Building (20 listings)',
      ],
    },
    {
      id: 'growth',
      name: 'Business Growth Pro',
      price: '$299',
      description: 'A comprehensive package for businesses ready to dominate local search.',
      features: [
        'All features from Starter Plan',
        'Advanced Schema Markup',
        'Content Creation (2 Articles/mo)',
        'Local Link Building Campaign',
        'Quarterly Strategy Review',
      ],
    },
    {
      id: 'ultimate',
      name: 'Ultimate Presence',
      price: '$699+',
      description: 'The ultimate solution for market leaders who want maximum visibility.',
      features: [
        'All features from Growth Pro Plan',
        'Reputation Management & Review Generation',
        'Social Media Signal Integration',
        'Hyperlocal Content Strategy',
        'Dedicated Account Manager',
      ],
    },
  ];

  return (
    <div className="view-container">
      <h2>Our Service Packages</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Choose a package that fits your goals. Click on any package to see the full list of
        features.
      </p>
      <div className="services-grid">
        {packages.map((pkg) => (
          <div
            className="service-card"
            key={pkg.id}
            onClick={() => handleCardClick(pkg.id)}
            tabIndex={0}
            role="button"
            aria-expanded={expandedCard === pkg.id}
          >
            <div className="service-card-header">
              <h3>{pkg.name}</h3>
              <div className="service-price">{pkg.price}</div>
            </div>
            <p className="service-description">{pkg.description}</p>
            {expandedCard === pkg.id && (
              <div className="service-features">
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
