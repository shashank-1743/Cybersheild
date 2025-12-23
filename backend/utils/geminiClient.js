const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function cleanResponse(text) {
    // Remove any leading/trailing whitespace
    text = text.trim();

    // Remove multiple consecutive newlines
    text = text.replace(/\n{3,}/g, '\n\n');

    // Remove any asterisks used for emphasis
    text = text.replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1');

    // Convert markdown-style links to HTML
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Remove any "AI:" or "Assistant:" prefixes
    text = text.replace(/^(AI:|Assistant:)\s*/gm, '');

    // Clean up HTML tags
    // Ensure proper spacing around HTML tags
    text = text.replace(/>\s+</g, '><');
    // Remove empty tags
    text = text.replace(/<([^>]+)>\s*<\/\1>/g, '');

    // Add proper spacing after periods and commas
    text = text.replace(/\.(?=[A-Z])/g, '. ');
    text = text.replace(/,(?=[^\s])/g, ', ');

    // Format phone numbers consistently
    text = text.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Ensure proper spacing around list items
    text = text.replace(/<li>/g, '\n<li>');
    text = text.replace(/<\/li><li>/g, '</li>\n<li>');

    // Remove any remaining unnecessary whitespace
    text = text.replace(/\s+/g, ' ').trim();

    // Re-add necessary newlines for readability
    text = text.replace(/<\/h3>/g, '</h3>\n');
    text = text.replace(/<\/p>/g, '</p>\n');
    text = text.replace(/<\/ul>/g, '</ul>\n');
    text = text.replace(/<\/ol>/g, '</ol>\n');

    return text;
}

async function analyzeIncident(incidentData) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Analyze the following cybersecurity incident in India:

---
Type: ${incidentData.incidentType || 'Not specified'}
Description: "${incidentData.description}"
Time: ${incidentData.incidentTime || 'Not specified'}
Location: ${incidentData.location || 'Not specified'}
---

Please provide a comprehensive analysis in clean HTML with:
- <h3> for section headings
- <ul> or <ol> for bullet points
- <p> for paragraphs
- Proper HTML links where relevant

Structure your response in the following format:

1. <h3>Summary</h3>
   <p>Provide a brief summary (2-3 sentences) of the incident.</p>

2. <h3>Applicable Laws and Sections</h3>
   <ul>
     <li>List relevant Indian cyber laws (e.g., IT Act, IPC sections)</li>
     <li>Provide simplified explanations of each section</li>
     <li>Mention potential penalties under each section</li>
   </ul>

3. <h3>Immediate Steps to Take</h3>
   <ul>
     <li>Step-by-step guide on what to do next</li>
     <li>Evidence preservation tips</li>
     <li>Documentation requirements</li>
   </ul>

4. <h3>Where to Report</h3>
   <ul>
     <li>Include relevant authorities and their contact details</li>
     <li>List online portals (e.g., <a href="https://cybercrime.gov.in" target="_blank">cybercrime.gov.in</a>)</li>
     <li>Mention local police or cyber cells</li>
   </ul>

5. <h3>Prevention Tips</h3>
   <ul>
     <li>Specific recommendations to prevent similar incidents</li>
     <li>Cybersecurity best practices</li>
     <li>Common warning signs to watch for</li>
   </ul>

Ensure all content is:
- Simple and free of technical jargon
- Focused on practical and actionable advice
- Well-structured for easy reading`;


        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return cleanResponse(response.text());
        } catch (apiError) {
            console.error('Gemini API Error:', apiError);
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
