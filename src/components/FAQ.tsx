'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'process' | 'legal' | 'financial' | 'timeline';
}

const faqData: FAQItem[] = [
  // General Questions
  {
    question: "What is a probate sale?",
    answer: "A probate sale is the sale of real estate that occurs when someone passes away and their property needs to be sold as part of the estate settlement process. This typically happens when the deceased person's will requires the property to be sold or when the beneficiaries decide to sell rather than keep the inherited property. Probate sales are court-supervised transactions that ensure fair market value and proper distribution of proceeds.",
    category: "general"
  },
  {
    question: "How is a probate sale different from a traditional home sale?",
    answer: "Probate sales differ from traditional sales in several key ways: they require court approval before listing, have specific disclosure requirements, often involve multiple beneficiaries who must agree on terms, and may have longer timelines due to court oversight. Additionally, probate sales typically require a licensed real estate agent with probate experience and may have different marketing strategies to attract qualified buyers.",
    category: "general"
  },
  {
    question: "Who can sell a probate property?",
    answer: "Only the court-appointed executor or administrator of the estate can sell a probate property. This person must be authorized by the probate court and may need to obtain additional court orders depending on the specific circumstances. Beneficiaries cannot sell the property directly unless they are also the executor or administrator.",
    category: "general"
  },

  // Process Questions
  {
    question: "What is the step-by-step process for a probate sale?",
    answer: "The probate sale process involves: 1) Court appointment of executor/administrator, 2) Property appraisal and market analysis, 3) Court petition for sale authorization, 4) Court approval and order, 5) Property listing and marketing, 6) Offer acceptance and contract execution, 7) Court confirmation of sale, 8) Closing and distribution of proceeds. Each step requires proper documentation and court oversight.",
    category: "process"
  },
  {
    question: "How long does the entire probate sale process take?",
    answer: "The complete probate sale process typically takes 6-18 months, depending on court schedules, property complexity, and market conditions. Simple cases may complete in 6-8 months, while complex estates with multiple properties or disputes can take 1-2 years. The court confirmation process alone can add 2-4 months to the timeline.",
    category: "process"
  },
  {
    question: "What documents are needed for a probate sale?",
    answer: "Required documents include: death certificate, will (if applicable), letters testamentary or administration, property deed, property appraisal, court order authorizing sale, listing agreement, purchase contract, and court confirmation documents. Additional documents may be required depending on the specific circumstances and court requirements.",
    category: "process"
  },

  // Legal Questions
  {
    question: "Do I need an attorney for a probate sale?",
    answer: "While you can represent yourself in probate court, it's highly recommended to work with an experienced probate attorney, especially for real estate transactions. An attorney can help navigate complex legal requirements, ensure proper documentation, protect your interests, and help avoid costly mistakes that could delay the process or result in legal complications.",
    category: "legal"
  },
  {
    question: "What happens if there are multiple beneficiaries with different opinions?",
    answer: "When multiple beneficiaries disagree on selling a probate property, the court will typically require majority agreement or may appoint a neutral party to make decisions. In some cases, the court may order the property sold if it's in the best interest of the estate. Clear communication and professional mediation can often resolve conflicts before they reach court.",
    category: "legal"
  },
  {
    question: "Can the court force a sale if beneficiaries don't agree?",
    answer: "Yes, the court can order a probate sale even if beneficiaries disagree, particularly if the property is deteriorating, generating expenses, or if selling is necessary to pay estate debts or taxes. The court's primary responsibility is to protect the estate's interests and ensure proper administration, which may require overriding beneficiary objections.",
    category: "legal"
  },

  // Financial Questions
  {
    question: "What are the total costs involved in a probate sale?",
    answer: "Probate sale costs typically include: court filing fees ($200-500), attorney fees (3-5% of property value), real estate agent commissions (5-6%), title insurance ($1,000-3,000), escrow fees ($500-1,500), property taxes and insurance, and potential capital gains taxes. Total costs usually range from 8-12% of the property's sale price, but can vary based on specific circumstances.",
    category: "financial"
  },
  {
    question: "How is the sale price determined for a probate property?",
    answer: "The sale price is determined through professional appraisal and market analysis. The court requires at least one professional appraisal, and often two, to establish fair market value. The property must be listed at or above the appraised value, and any offers below that amount require court approval. The goal is to maximize proceeds for the estate while ensuring a fair market transaction.",
    category: "financial"
  },
  {
    question: "What happens to the proceeds from a probate sale?",
    answer: "Sale proceeds are distributed according to the deceased person's will or state intestacy laws if no will exists. The proceeds first pay estate debts, taxes, and administrative costs, then are distributed to beneficiaries. The executor is responsible for proper accounting and distribution, with court oversight to ensure compliance with legal requirements.",
    category: "financial"
  },

  // Timeline Questions
  {
    question: "How long does probate take in Nevada?",
    answer: "In Nevada, probate typically takes 6-12 months for simple estates, but can extend to 18-24 months for complex cases. Factors affecting timeline include: court caseload, property complexity, beneficiary cooperation, creditor claims, and whether the estate is contested. Working with experienced professionals can help expedite the process and avoid delays.",
    category: "timeline"
  },
  {
    question: "Can I speed up the probate sale process?",
    answer: "Yes, several strategies can expedite the process: hire experienced professionals early, prepare all required documents in advance, respond promptly to court requests, consider summary probate for small estates, and maintain open communication with all parties involved. However, court schedules and legal requirements set minimum timelines that cannot be bypassed.",
    category: "timeline"
  },
  {
    question: "What are the most common delays in probate sales?",
    answer: "Common delays include: court scheduling conflicts, incomplete documentation, beneficiary disputes, property condition issues, market timing, and creditor claim resolution. Professional probate real estate agents can help minimize delays by ensuring proper preparation, maintaining court relationships, and implementing efficient marketing strategies.",
    category: "timeline"
  }
];

const categoryLabels = {
  general: "General Questions",
  process: "Process & Procedures",
  legal: "Legal Requirements",
  financial: "Costs & Finances",
  timeline: "Timelines & Delays"
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="faq-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about probate real estate sales. 
            Our comprehensive FAQ covers everything from the basics to complex legal requirements.
          </p>
        </div>

        {/* Category Filter */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8" aria-label="FAQ Categories">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            All Questions
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <article 
                key={`faq-${faq.category}-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    )}
                  </span>
                </button>
                
                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4"
                    aria-hidden={false}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our probate real estate experts are here to help. Get personalized answers 
              to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-702-555-0123"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Call Now: (702) 555-0123
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
