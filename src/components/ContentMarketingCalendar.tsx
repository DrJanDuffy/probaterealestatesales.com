import { BookOpen, Calendar, FileText, Mail, Share2, TrendingUp, Users, Video } from 'lucide-react';

const monthlyThemes = [
  {
    month: 'Month 1',
    theme: 'Education',
    description:
      'Establish Dr. Duffy as the probate authority through comprehensive educational content',
    weeks: [
      {
        week: 'Week 1',
        title: "Understanding Probate: Dr. Duffy's Complete Guide",
        type: 'Blog Post',
        keywords: ['probate guide', 'Nevada probate', 'Dr. Jan Duffy'],
        distribution: ['Blog', 'Email', 'Social Media'],
      },
      {
        week: 'Week 2',
        title: 'Nevada Probate Laws: What Every Executor Needs to Know',
        type: 'Legal Guide',
        keywords: ['Nevada probate laws', 'executor guide', 'probate requirements'],
        distribution: ['Blog', 'PDF Download', 'LinkedIn'],
      },
      {
        week: 'Week 3',
        title: 'Probate vs. Trust Sales: Key Differences Explained',
        type: 'Comparison Guide',
        keywords: ['probate vs trust', 'estate planning', 'property sales'],
        distribution: ['Blog', 'Infographic', 'YouTube'],
      },
      {
        week: 'Week 4',
        title: 'Client Success Story: Summerlin Estate Sale',
        type: 'Case Study',
        keywords: ['success story', 'Summerlin probate', 'Dr. Duffy results'],
        distribution: ['Blog', 'Social Media', 'Email'],
      },
    ],
  },
  {
    month: 'Month 2',
    theme: 'Process',
    description: 'Guide families through the probate process with step-by-step content',
    weeks: [
      {
        week: 'Week 1',
        title: 'The Probate Timeline: From Filing to Closing',
        type: 'Timeline Guide',
        keywords: ['probate timeline', 'Nevada probate process', 'court procedures'],
        distribution: ['Blog', 'Infographic', 'Email Series'],
      },
      {
        week: 'Week 2',
        title: 'Court Requirements for Probate Property Sales',
        type: 'Legal Checklist',
        keywords: ['court requirements', 'probate documents', 'legal compliance'],
        distribution: ['Blog', 'Checklist PDF', 'LinkedIn'],
      },
      {
        week: 'Week 3',
        title: 'How to Price Probate Property Correctly',
        type: 'Valuation Guide',
        keywords: ['property pricing', 'probate valuation', 'market analysis'],
        distribution: ['Blog', 'Calculator Tool', 'YouTube'],
      },
      {
        week: 'Week 4',
        title: 'Video Q&A with Dr. Duffy',
        type: 'Video Content',
        keywords: ['Dr. Duffy Q&A', 'probate questions', 'expert advice'],
        distribution: ['YouTube', 'Social Media', 'Email'],
      },
    ],
  },
  {
    month: 'Month 3',
    theme: 'Value',
    description: "Demonstrate Dr. Duffy's value and proven results",
    weeks: [
      {
        week: 'Week 1',
        title: "Maximizing Estate Value: Dr. Duffy's Proven Methods",
        type: 'Strategy Guide',
        keywords: ['maximize value', 'estate value', 'Dr. Duffy methods'],
        distribution: ['Blog', 'Strategy PDF', 'LinkedIn'],
      },
      {
        week: 'Week 2',
        title: 'Common Probate Mistakes That Cost Thousands',
        type: 'Warning Guide',
        keywords: ['probate mistakes', 'costly errors', 'avoid pitfalls'],
        distribution: ['Blog', 'Checklist', 'Social Media'],
      },
      {
        week: 'Week 3',
        title: 'Tax Implications of Probate Sales',
        type: 'Tax Guide',
        keywords: ['probate taxes', 'estate taxes', 'tax planning'],
        distribution: ['Blog', 'Tax Guide PDF', 'Email'],
      },
      {
        week: 'Week 4',
        title: 'Market Report: Probate Property Trends',
        type: 'Market Analysis',
        keywords: ['market trends', 'probate market', 'Las Vegas real estate'],
        distribution: ['Blog', 'Infographic', 'All Channels'],
      },
    ],
  },
];

const contentTypes = [
  {
    type: 'Blog Posts',
    description: 'Long-form educational content establishing authority',
    frequency: 'Weekly',
    platforms: ['Website', 'Medium', 'LinkedIn Articles'],
    icon: BookOpen,
  },
  {
    type: 'YouTube Videos',
    description: "Visual content showcasing Dr. Duffy's expertise",
    frequency: 'Bi-weekly',
    platforms: ['YouTube', 'Website', 'Social Media'],
    icon: Video,
  },
  {
    type: 'Email Newsletters',
    description: 'Direct communication with prospects and clients',
    frequency: 'Weekly',
    platforms: ['Email', 'Website Archive'],
    icon: Mail,
  },
  {
    type: 'Social Media',
    description: 'Engaging content for multiple platforms',
    frequency: 'Daily',
    platforms: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter'],
    icon: Share2,
  },
  {
    type: 'Webinars',
    description: 'Interactive educational sessions',
    frequency: 'Monthly',
    platforms: ['Zoom', 'Website', 'Social Media'],
    icon: Users,
  },
  {
    type: 'Downloadable Resources',
    description: 'Lead magnets and educational materials',
    frequency: 'Bi-weekly',
    platforms: ['Website', 'Email', 'Social Media'],
    icon: FileText,
  },
];

const distributionChannels = [
  {
    channel: 'Website Blog',
    description: 'Primary content hub with SEO optimization',
    audience: 'Organic search visitors',
    content: ['Long-form articles', 'Case studies', 'Resource downloads'],
    icon: BookOpen,
  },
  {
    channel: 'YouTube Channel',
    description: 'Video content for visual learners',
    audience: 'Video content consumers',
    content: ['Q&A sessions', 'Process explanations', 'Client testimonials'],
    icon: Video,
  },
  {
    channel: 'Email Marketing',
    description: 'Direct communication with prospects',
    audience: 'Subscribers and leads',
    content: ['Newsletters', 'Educational series', 'Case studies'],
    icon: Mail,
  },
  {
    channel: 'LinkedIn',
    description: 'Professional networking and authority building',
    audience: 'Real estate professionals and executives',
    content: ['Articles', 'Company updates', 'Industry insights'],
    icon: Share2,
  },
  {
    channel: 'Facebook & Instagram',
    description: 'Community building and engagement',
    audience: 'General public and families',
    content: ['Success stories', 'Educational tips', 'Community updates'],
    icon: Users,
  },
];

const contentIdeas = [
  {
    category: 'Educational Content',
    ideas: [
      'Nevada Probate Law Updates 2025',
      'Clark County Court Procedure Changes',
      'Probate vs. Trust: Which is Right for You?',
      'Understanding Estate Taxes in Nevada',
      'Common Probate Myths Debunked',
    ],
  },
  {
    category: 'Case Studies',
    ideas: [
      'Summerlin Luxury Home: $750K Sale in 30 Days',
      'Multi-Property Estate: $1.2M Across 3 Counties',
      'Henderson Family Home: 15% Above Valuation',
      'North Las Vegas: Overcoming Title Issues',
      'Boulder City: Historic Property Success Story',
    ],
  },
  {
    category: 'Process Guides',
    ideas: [
      'Complete Probate Timeline Infographic',
      'Document Checklist for Executors',
      'Court Filing Step-by-Step Guide',
      'Property Preparation Checklist',
      'Closing Process Walkthrough',
    ],
  },
  {
    category: 'Market Insights',
    ideas: [
      'Monthly Las Vegas Probate Market Report',
      'Neighborhood-Specific Market Analysis',
      'Seasonal Probate Sale Trends',
      'Price Comparison: Probate vs. Traditional Sales',
      'Market Predictions for 2025',
    ],
  },
];

export default function ContentMarketingCalendar() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            Content Marketing Calendar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Content Calendar Positioning Dr. Jan Duffy as the Probate Authority
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Strategic content planning to establish Dr. Duffy as Las Vegas's premier probate real
            estate expert through consistent, valuable content.
          </p>
        </div>

        {/* Monthly Themes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Monthly Content Themes
          </h3>

          <div className="space-y-8">
            {monthlyThemes.map((month) => (
              <div
                key={month.month}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="h-6 w-6 text-primary-600" />
                    <h4 className="text-xl font-bold text-secondary-900">{month.month}</h4>
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {month.theme}
                    </span>
                  </div>
                  <p className="text-secondary-600">{month.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {month.weeks.map((week) => (
                    <div key={week.week} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="mb-3">
                        <span className="inline-block bg-accent-100 text-accent-700 px-2 py-1 rounded text-xs font-medium mb-2">
                          {week.week}
                        </span>
                        <h5 className="font-semibold text-secondary-900 text-sm mb-2">
                          {week.title}
                        </h5>
                        <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded">
                          {week.type}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-secondary-500 mb-1">Keywords:</p>
                          <div className="flex flex-wrap gap-1">
                            {week.keywords.map((keyword) => (
                              <span
                                key={keyword}
                                className="text-xs bg-gray-100 text-secondary-600 px-2 py-1 rounded"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-secondary-500 mb-1">Distribution:</p>
                          <div className="flex flex-wrap gap-1">
                            {week.distribution.map((platform) => (
                              <span
                                key={platform}
                                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Content Types & Distribution
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content) => (
              <div
                key={content.type}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <content.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">{content.type}</h4>
                    <span className="text-sm text-primary-600 font-medium">
                      {content.frequency}
                    </span>
                  </div>
                </div>

                <p className="text-secondary-600 text-sm mb-4">{content.description}</p>

                <div>
                  <p className="text-xs text-secondary-500 mb-2">Platforms:</p>
                  <div className="flex flex-wrap gap-1">
                    {content.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="text-xs bg-gray-100 text-secondary-600 px-2 py-1 rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution Channels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Distribution Channels
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {distributionChannels.map((channel) => (
              <div
                key={channel.channel}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <channel.icon className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">{channel.channel}</h4>
                    <p className="text-sm text-secondary-600">{channel.audience}</p>
                  </div>
                </div>

                <p className="text-secondary-600 text-sm mb-4">{channel.description}</p>

                <div>
                  <p className="text-xs text-secondary-500 mb-2">Content Types:</p>
                  <div className="flex flex-wrap gap-1">
                    {channel.content.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Ideas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Content Ideas by Category
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {contentIdeas.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  {category.category}
                </h4>

                <ul className="space-y-2">
                  {category.ideas.map((idea) => (
                    <li key={idea} className="text-sm text-secondary-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Implement Your Content Marketing Strategy?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Use this comprehensive content calendar to position Dr. Jan Duffy as Las Vegas's
              premier probate real estate authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                className="btn-primary inline-block"
              >
                Start Content Creation
              </a>
              <a href="/resources/nevada-probate-guide" className="btn-outline inline-block">
                View Sample Content
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary-600" />
                Strategic Planning
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent-600" />
                Authority Building
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                Audience Engagement
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
