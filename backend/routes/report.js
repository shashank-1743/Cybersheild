const express = require('express');
const router = express.Router();
const { analyzeIncident } = require('../utils/geminiClient');

router.post('/report', async (req, res) => {
    try {
        const { name, email, incidentTime, location, description, incidentType } = req.body;

        // Basic validation
        if (!description) {
            return res.status(400).json({ 
                success: false,
                error: 'Incident description is required' 
            });
        }

        // Format the incident details for the Gemini API
        const incidentDetails = {
            description,
            incidentTime: incidentTime || 'Not specified',
            location: location || 'Not specified',
            incidentType: incidentType || 'Not specified'
        };

        // Get analysis from Gemini API
        const analysis = await analyzeIncident(incidentDetails);

        // Create response object
        const response = {
            success: true,
            message: 'Incident analyzed successfully',
            data: {
                submittedBy: name || 'Anonymous',
                email: email || 'Not provided',
                incidentTime,
                location,
                incidentType,
                analysis
            }
        };

        res.json(response);
    } catch (error) {
        console.error('Error processing incident:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to process incident report. Please try again.' 
        });
    }
});

module.exports = router;