import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const IncidentReportForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        incidentTime: '',
        location: '',
        description: ''
    });
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch('http://localhost:5000/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            
            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setResponse(data);
            // Clear form after successful submission
            setFormData({
                name: '',
                email: '',
                incidentTime: '',
                location: '',
                description: ''
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="py-5">
            <h2 className="mb-4">Report a Cyber Incident</h2>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name (Optional)</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email (Optional)</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>When did the incident occur?</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        name="incidentTime"
                        value={formData.incidentTime}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter incident location"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Incident Description*</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please describe what happened..."
                        required
                    />
                </Form.Group>

                <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={loading}
                >
                    {loading ? 'Analyzing...' : 'Submit Report'}
                </Button>
            </Form>

            {error && (
                <Alert variant="danger" className="mt-4">
                    {error}
                </Alert>
            )}

            {response && (
                <Alert variant="success" className="mt-4">
                    <h4>Analysis Results:</h4>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {response.data.analysis}
                    </pre>
                </Alert>
            )}
        </Container>
    );
};

export default IncidentReportForm;