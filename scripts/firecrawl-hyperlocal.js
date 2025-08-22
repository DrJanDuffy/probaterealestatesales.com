#!/usr/bin/env node

/**
 * Fire Crawl Hyperlocal Website Creator
 * Optimized for Nevada Probate Real Estate
 * 
 * This script uses Fire Crawl to:
 * 1. Extract hyperlocal data from Nevada sources
 * 2. Analyze competitor websites
 * 3. Generate hyperlocal content
 * 4. Create structured data for SEO
 */

import { FirecrawlAppV1 } from '@mendable/firecrawl-js';
import fs from 'node:fs/promises';
import path from 'node:path';

class FireCrawlHyperlocal {
  constructor(apiKey) {
    this.firecrawl = new FirecrawlAppV1({ apiKey });
    this.outputDir = './firecrawl-data';
    this.nevadaTargets = [
      'https://www.nevadarealtor.com',
      'https://www.clarkcountynv.gov',
      'https://www.lasvegasnevada.gov',
      'https://www.hendersonnevada.gov',
      'https://www.boulder-city.nv.us',
      'https://www.cityofmesquitenv.gov',
      'https://www.cityofnorthlasvegas.com'
    ];
    this.competitorTargets = [
      'https://www.probaterealestate.com',
      'https://www.inheritedproperty.com',
      'https://www.probateproperty.com'
    ];
  }

  async init() {
    try {
      await fs.mkdir(this.outputDir, { recursive: true });
      await fs.mkdir(path.join(this.outputDir, 'nevada-data'), { recursive: true });
      await fs.mkdir(path.join(this.outputDir, 'competitor-analysis'), { recursive: true });
      await fs.mkdir(path.join(this.outputDir, 'generated-content'), { recursive: true });
      console.log('✅ Fire Crawl directories created');
    } catch (error) {
      console.error('❌ Error creating directories:', error);
    }
  }

  async crawlNevadaSources() {
    console.log('🔄 Crawling Nevada government and real estate sources...');
    
    const nevadaData = {};
    
    for (const target of this.nevadaTargets) {
      try {
        console.log(`📡 Crawling: ${target}`);
        
        const result = await this.firecrawl.scrapeUrl({
          url: target,
          pageOptions: {
            waitFor: 5000,
            screenshot: false,
            pdf: false
          },
          extractorOptions: {
            mode: "llm-extraction",
            extractionPrompt: `
              Extract the following information from this Nevada government or real estate website:
              1. Business listings and contact information
              2. Local events and announcements
              3. Government services related to probate or real estate
              4. Court information and procedures
              5. Real estate data and market information
              6. Probate attorneys and services
              7. Local regulations and requirements
              
              Format as structured JSON with clear categories.
            `
          }
        });

        const domain = new URL(target).hostname;
        nevadaData[domain] = result;
        
        // Save individual results
        await fs.writeFile(
          path.join(this.outputDir, 'nevada-data', `${domain}.json`),
          JSON.stringify(result, null, 2)
        );
        
        console.log(`✅ Completed: ${domain}`);
        
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        console.error(`❌ Error crawling ${target}:`, error.message);
      }
    }

    // Save combined results
    await fs.writeFile(
      path.join(this.outputDir, 'nevada-data', 'all-nevada-sources.json'),
      JSON.stringify(nevadaData, null, 2)
    );

    return nevadaData;
  }

  async analyzeCompetitors() {
    console.log('🔍 Analyzing competitor websites...');
    
    const competitorAnalysis = {};
    
    for (const target of this.competitorTargets) {
      try {
        console.log(`📊 Analyzing: ${target}`);
        
        const result = await this.firecrawl.scrapeUrl({
          url: target,
          pageOptions: {
            waitFor: 5000,
            screenshot: false,
            pdf: false
          },
          extractorOptions: {
            mode: "llm-extraction",
            extractionPrompt: `
              Analyze this probate real estate website and extract:
              1. Services offered and pricing
              2. Content structure and topics
              3. SEO elements and keywords
              4. Call-to-action strategies
              5. Trust signals and testimonials
              6. Local market focus areas
              7. Content gaps and opportunities
              8. User experience features
              
              Provide competitive analysis insights in structured JSON format.
            `
          }
        });

        const domain = new URL(target).hostname;
        competitorAnalysis[domain] = result;
        
        // Save individual analysis
        await fs.writeFile(
          path.join(this.outputDir, 'competitor-analysis', `${domain}-analysis.json`),
          JSON.stringify(result, null, 2)
        );
        
        console.log(`✅ Analysis completed: ${domain}`);
        
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 3000));
        
      } catch (error) {
        console.error(`❌ Error analyzing ${target}:`, error.message);
      }
    }

    // Save combined analysis
    await fs.writeFile(
      path.join(this.outputDir, 'competitor-analysis', 'all-competitor-analysis.json'),
      JSON.stringify(competitorAnalysis, null, 2)
    );

    return competitorAnalysis;
  }

  async generateHyperlocalContent(nevadaData, competitorAnalysis) {
    console.log('✍️ Generating hyperlocal content...');
    
    const neighborhoods = [
      'Summerlin', 'Henderson', 'North Las Vegas', 
      'Boulder City', 'Mesquite', 'Spring Valley', 'Enterprise'
    ];
    
    const contentTypes = [
      'probate_guides', 'market_analysis', 'court_procedures',
      'attorney_directories', 'property_valuations'
    ];
    
    const generatedContent = {};
    
    for (const neighborhood of neighborhoods) {
      generatedContent[neighborhood] = {};
      
      for (const contentType of contentTypes) {
        try {
          console.log(`📝 Generating ${contentType} for ${neighborhood}...`);
          
          const prompt = this.buildContentPrompt(neighborhood, contentType, nevadaData, competitorAnalysis);
          
          const result = await this.firecrawl.scrapeUrl({
            url: 'https://example.com', // Placeholder for content generation
            pageOptions: {
              waitFor: 1000
            },
            extractorOptions: {
              mode: "llm-extraction",
              extractionPrompt: prompt
            }
          });
          
          generatedContent[neighborhood][contentType] = result;
          
          // Save individual content
          await fs.writeFile(
            path.join(this.outputDir, 'generated-content', `${neighborhood}-${contentType}.json`),
            JSON.stringify(result, null, 2)
          );
          
          console.log(`✅ Generated: ${neighborhood} - ${contentType}`);
          
        } catch (error) {
          console.error(`❌ Error generating content for ${neighborhood} - ${contentType}:`, error.message);
        }
      }
    }
    
    // Save combined content
    await fs.writeFile(
      path.join(this.outputDir, 'generated-content', 'all-hyperlocal-content.json'),
      JSON.stringify(generatedContent, null, 2)
    );
    
    return generatedContent;
  }

  buildContentPrompt(neighborhood, contentType) {
    const basePrompts = {
      probate_guides: `Create a comprehensive probate guide for ${neighborhood}, Nevada. Include:
        1. Local probate court procedures
        2. Timeline expectations (6-8 months for Nevada)
        3. Required documents and forms
        4. Local attorney recommendations
        5. Property transfer processes
        6. Tax considerations (no state estate tax)
        7. Local resources and contacts`,
      
      market_analysis: `Generate a detailed real estate market analysis for ${neighborhood}, Nevada. Include:
        1. Current market trends and prices
        2. Probate property opportunities
        3. Neighborhood demographics
        4. Property types and values
        5. Market predictions and insights
        6. Local development projects
        7. Investment potential`,
      
      court_procedures: `Create a guide to probate court procedures in ${neighborhood}, Nevada. Include:
        1. Court location and contact information
        2. Filing requirements and fees
        3. Hearing schedules and procedures
        4. Required documentation
        5. Timeline expectations
        6. Common challenges and solutions
        7. Local court tips and insights`,
      
      attorney_directories: `Compile a directory of probate attorneys serving ${neighborhood}, Nevada. Include:
        1. Attorney names and contact information
        2. Specializations and experience
        3. Office locations and hours
        4. Fee structures and consultations
        5. Client reviews and ratings
        6. Areas of expertise
        7. Local reputation and standing`,
      
      property_valuations: `Create a property valuation guide for ${neighborhood}, Nevada probate properties. Include:
        1. Valuation methods and approaches
        2. Local market comparables
        3. Property condition factors
        4. Neighborhood influences
        5. Market timing considerations
        6. Professional appraisal options
        7. Value optimization strategies`
    };
    
    return basePrompts[contentType] || basePrompts.probate_guides;
  }

  async createStructuredData(nevadaData, competitorAnalysis, generatedContent) {
    console.log('🏗️ Creating structured data for SEO...');
    
    const structuredData = {
      nevada: {
        localBusinesses: [],
        governmentServices: [],
        courtInformation: [],
        realEstateData: []
      },
      competitors: {
        services: [],
        content: [],
        strategies: []
      },
      hyperlocal: {
        neighborhoods: {},
        content: {},
        opportunities: []
      }
    };
    
    // Process Nevada data
    for (const [domain, data] of Object.entries(nevadaData)) {
              if (data.data?.extractedContent) {
          // Extract structured information
          const extracted = data.data.extractedContent;
        
        if (extracted.business_listings) {
          structuredData.nevada.localBusinesses.push({
            domain,
            businesses: extracted.business_listings
          });
        }
        
        if (extracted.government_services) {
          structuredData.nevada.governmentServices.push({
            domain,
            services: extracted.government_services
          });
        }
        
        if (extracted.court_information) {
          structuredData.nevada.courtInformation.push({
            domain,
            court: extracted.court_information
          });
        }
      }
    }
    
    // Process competitor analysis
    for (const [domain, data] of Object.entries(competitorAnalysis)) {
      if (data.data?.extractedContent) {
        const extracted = data.data.extractedContent;
        
        structuredData.competitors.services.push({
          domain,
          services: extracted.services_offered || []
        });
        
        structuredData.competitors.content.push({
          domain,
          content: extracted.content_structure || []
        });
        
        structuredData.competitors.strategies.push({
          domain,
          strategies: extracted.call_to_action_strategies || []
        });
      }
    }
    
    // Process generated content
    for (const [neighborhood, content] of Object.entries(generatedContent)) {
      structuredData.hyperlocal.neighborhoods[neighborhood] = {
        contentTypes: Object.keys(content),
        lastUpdated: new Date().toISOString()
      };
      
      structuredData.hyperlocal.content[neighborhood] = content;
    }
    
    // Save structured data
    await fs.writeFile(
      path.join(this.outputDir, 'structured-data.json'),
      JSON.stringify(structuredData, null, 2)
    );
    
    console.log('✅ Structured data created and saved');
    return structuredData;
  }

  async generateReport() {
    console.log('📊 Generating comprehensive report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        nevadaSources: this.nevadaTargets.length,
        competitorTargets: this.competitorTargets.length,
        neighborhoods: 7,
        contentTypes: 5
      },
      recommendations: {
        contentGaps: [],
        seoOpportunities: [],
        localOptimization: [],
        competitiveAdvantages: []
      },
      nextSteps: [
        'Review extracted data for accuracy',
        'Implement content recommendations',
        'Optimize for local search',
        'Monitor competitor strategies',
        'Update hyperlocal content regularly'
      ]
    };
    
    await fs.writeFile(
      path.join(this.outputDir, 'hyperlocal-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('✅ Report generated');
    return report;
  }

  async run() {
    console.log('🚀 Starting Fire Crawl Hyperlocal Website Creator...');
    
    try {
      await this.init();
      
      // Step 1: Crawl Nevada sources
      const nevadaData = await this.crawlNevadaSources();
      
      // Step 2: Analyze competitors
      const competitorAnalysis = await this.analyzeCompetitors();
      
      // Step 3: Generate hyperlocal content
      const generatedContent = await this.generateHyperlocalContent(nevadaData, competitorAnalysis);
      
      // Step 4: Create structured data
      const structuredData = await this.createStructuredData(nevadaData, competitorAnalysis, generatedContent);
      
      // Step 5: Generate report
      const report = await this.generateReport();
      
      console.log('🎉 Fire Crawl Hyperlocal Website Creator completed successfully!');
      console.log(`📁 Data saved to: ${this.outputDir}`);
      console.log(`📊 Report: ${this.outputDir}/hyperlocal-report.json`);
      
      return {
        nevadaData,
        competitorAnalysis,
        generatedContent,
        structuredData,
        report
      };
      
    } catch (error) {
      console.error('❌ Error in Fire Crawl process:', error);
      throw error;
    }
  }
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const apiKey = process.env.FIRECRAWL_API_KEY;
  
  if (!apiKey) {
    console.error('❌ FIRECRAWL_API_KEY environment variable is required');
    process.exit(1);
  }
  
  const creator = new FireCrawlHyperlocal(apiKey);
  creator.run().catch(console.error);
}

export default FireCrawlHyperlocal;
