import { Mail, Phone, Calendar, Download, CheckCircle, Clock, Users, Award, ArrowRight, FileText, MapPin, Building } from 'lucide-react';

const formFields = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your full name'
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    placeholder: 'Enter your email address'
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    required: true,
    placeholder: 'Enter your phone number'
  },
  {
    name: 'propertyAddress',
    label: 'Property Address',
    type: 'text',
    required: false,
    placeholder: 'Enter the property address (if known)'
  },
  {
    name: 'relationshipToEstate',
    label: 'Relationship to Estate',
    type: 'select',
    required: true,
    options: ['Executor', 'Heir', 'Administrator', 'Other']
  },
  {
    name: 'timeline',
    label: 'Timeline',
    type: 'select',
    required: true,
    options: ['Immediate', '3 months', '6 months', 'Planning ahead']
  },
  {
    name: 'currentProbateStatus',
    label: 'Current Probate Status',
    type: 'select',
    required: true,
    options: ['Not started', 'In progress', 'Ready to sell']
  },
  {
    name: 'message',
    label: 'Message/Questions',
    type: 'textarea',
    required: false,
    placeholder: 'Tell us about your situation or ask any questions'
  }
];

const valuePropositions = [
  {
    icon: CheckCircle,
    title: 'Free Property Valuation',
    description: 'Get an accurate market analysis of your inherited property'
  },
  {
    icon: Clock,
    title: 'Probate Timeline Assessment',
    description: 'Understand exactly how long the process will take'
  },
  {
    icon: FileText,
    title: 'Legal Requirement Checklist',
    description: 'Complete list of documents and steps needed'
  },
  {
    icon: Users,
    title: 'No-Obligation Consultation',
    description: 'Speak directly with Dr. Duffy about your situation'
  },
  {
    icon: Award,
    title: 'Confidential Discussion',
    description: 'Your information is kept private and secure'
  }
];

const followUpSequence = [
  {
    day: 'Immediate',
    action: 'Thank you email with probate guide PDF',
    content: 'Welcome email with immediate value and next steps',
    icon: Mail
  },
  {
    day: 'Day 1',
    action: 'Personal email from Dr. Duffy',
    content: 'Direct communication establishing personal connection',
    icon: Users
  },
  {
    day: 'Day 3',
    action: 'Probate timeline infographic',
    content: 'Visual guide to Nevada probate process',
    icon: Clock
  },
  {
    day: 'Day 7',
    action: 'Case study of similar probate sale',
    content: 'Real example showing Dr. Duffy\'s expertise',
    icon: Building
  },
  {
    day: 'Day 14',
    action: 'Invitation to schedule consultation',
    content: 'Direct CTA to move forward with Dr. Duffy',
    icon: Calendar
  }
];

const leadCaptureForm = {
  headline: 'Get Your Free Probate Property Evaluation from Dr. Jan Duffy',
  subheadline: 'Compassionate, expert guidance through your probate property sale',
  formTitle: 'Free Probate Consultation Request',
  submitButton: 'Get My Free Evaluation',
  privacyNote: 'Your information is confidential and will only be used to provide you with the requested consultation.',
  successMessage: 'Thank you! Dr. Duffy will contact you within 2 hours to discuss your probate property situation.'
};

export default function LeadGenerationSystem() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            Lead Generation System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Probate-Specific Lead Capture System
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Convert probate property inquiries into qualified consultations with Dr. Jan Duffy's 
            proven lead generation and follow-up system.
          </p>
        </div>

        {/* Lead Capture Form */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                  {leadCaptureForm.headline}
                </h3>
                <p className="text-lg text-secondary-600 mb-6">
                  {leadCaptureForm.subheadline}
                </p>
              </div>

              {/* Value Propositions */}
              <div className="space-y-4">
                {valuePropositions.map((proposition) => (
                  <div key={proposition.title} className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-full mt-1">
                      <proposition.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {proposition.title}
                      </h4>
                      <p className="text-sm text-secondary-600">
                        {proposition.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex flex-wrap gap-4 text-sm text-secondary-600">
                  <span className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary-600" />
                    Court-Approved Expert
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent-600" />
                    500+ Properties Sold
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    5-Star Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
              <h4 className="text-xl font-semibold text-secondary-900 mb-6 text-center">
                {leadCaptureForm.formTitle}
              </h4>
              
              <form className="space-y-4">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-secondary-700 mb-2">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    
                    {field.type === 'select' ? (
                      <select 
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        aria-label={field.label}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                                         ) : field.type === 'textarea' ? (
                       <textarea
                         id={field.name}
                         name={field.name}
                         required={field.required}
                         placeholder={field.placeholder}
                         rows={3}
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                       />
                     ) : (
                       <input
                         id={field.name}
                         type={field.type}
                         name={field.name}
                         required={field.required}
                         placeholder={field.placeholder}
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                       />
                     )}
                  </div>
                ))}
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {leadCaptureForm.submitButton}
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <p className="text-xs text-secondary-500 text-center">
                  {leadCaptureForm.privacyNote}
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Follow-Up Sequence */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Strategic Follow-Up Sequence
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {followUpSequence.map((step) => (
              <div key={step.day} className="text-center">
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {step.day}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-secondary-900 mb-2 text-sm">
                    {step.action}
                  </h4>
                  
                  <p className="text-xs text-secondary-600 leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Nurturing Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Why This System Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Timely Engagement
              </h4>
              <p className="text-secondary-600 text-sm">
                Strategic timing ensures prospects stay engaged without feeling overwhelmed
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Value-First Approach
              </h4>
              <p className="text-secondary-600 text-sm">
                Each touchpoint provides genuine value, building trust and authority
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Personal Connection
              </h4>
              <p className="text-secondary-600 text-sm">
                Direct communication from Dr. Duffy establishes personal rapport
              </p>
            </div>
          </div>
        </div>

        {/* Implementation CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Generate Qualified Probate Leads?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Implement this proven lead generation system to connect with families 
              who need Dr. Jan Duffy's probate expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="http://drjanduffy.realscout.com/onboarding" className="btn-primary inline-block">
                Start Lead Generation
              </a>
              <a href="/resources/nevada-probate-guide" className="btn-outline inline-block">
                Download Free Guide
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-600" />
                Automated Follow-up
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-600" />
                Value-First Approach
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                Personal Touch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
