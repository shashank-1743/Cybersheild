const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeIncident(incidentData) {
    try {
        // Use the correct free model: "gemini-2.0-flash-001"
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

        const prompt = `Analyze the following cybersecurity incident in India:

---
Type: ${incidentData.incidentType || 'Not specified'}
Description: "${incidentData.description}"
Time: ${incidentData.incidentTime || 'Not specified'}
Location: ${incidentData.location || 'Not specified'}
---

Please provide a comprehensive analysis in the following format:

1. Applicable Laws and Sections:
   - List relevant Indian cyber laws (IT Act, IPC sections)
   - Brief explanation of each section
   - Potential penalties under each section

2. Immediate Actions:
   - Step-by-step guide on what to do next
   - Evidence preservation tips
   - Documentation requirements

3. Where to Report:
   - Relevant authorities (with contact details)
   - Online portals
   - Local cyber cells

4. Prevention Tips:
   - Specific recommendations to prevent similar incidents
   - Security best practices
   - Warning signs to watch for

Format the response with HTML for better presentation, using <h3> for main sections and <ul> or <ol> for lists. Keep explanations simple and actionable.`;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (apiError) {
            console.error('Gemini API Error:', apiError);
            
            // Fallback response in case of API error
            return `<h3>Basic Analysis</h3>
            <p>We're currently experiencing technical difficulties with our AI analysis system. Here are some general steps you can take:</p>
            
            <h3>Immediate Actions</h3>
            <ul>
                <li>Report the incident to the National Cyber Crime Portal (cybercrime.gov.in)</li>
                <li>Call the Cyber Crime Helpline at 1930</li>
                <li>Document all evidence related to the incident (screenshots, messages, emails)</li>
                <li>If it's a financial fraud, contact your bank immediately</li>
            </ul>
            
            <h3>Where to Report</h3>
            <ul>
                <li>Cyber Crime Portal: <a href="https://cybercrime.gov.in" target="_blank">cybercrime.gov.in</a></li>
                <li>Local Police Cyber Cell in ${incidentData.location || 'your area'}</li>
                <li>National Cyber Crime Reporting Portal</li>
            </ul>
            
            <h3>Documentation Required</h3>
            <ul>
                <li>Screenshots or photos of the incident</li>
                <li>Any relevant messages, emails, or communication</li>
                <li>Transaction details (for financial frauds)</li>
                <li>Details of websites or platforms involved</li>
            </ul>
            
            <p>For immediate assistance, please call 1930 or visit your nearest police station.</p>`;
        }
    } catch (error) {
        console.error('Error in analyzeIncident:', error);
        throw new Error('Failed to analyze incident. Please try again later.');
    }
}

module.exports = { analyzeIncident };
