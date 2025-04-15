import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import { auth } from '../firebase';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { trackButtonClick } from '../utils/analytics';

function AuthModal({ show, onHide }) {
  const [mode, setMode] = useState('options'); // options, email-signin, email-signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      trackButtonClick('login_signup', { method: 'google' });
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onHide();
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.');
      console.error('Error signing in with Google:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'email-signup') {
        trackButtonClick('signup', { method: 'email' });
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        trackButtonClick('login', { method: 'email' });
        await signInWithEmailAndPassword(auth, email, password);
      }
      onHide();
    } catch (error) {
      console.error('Auth error:', error);
      setError(
        error.code === 'auth/weak-password' ? 'Password should be at least 6 characters' :
        error.code === 'auth/email-already-in-use' ? 'Email already in use' :
        error.code === 'auth/invalid-email' ? 'Invalid email address' :
        error.code === 'auth/user-not-found' ? 'No account found with this email' :
        error.code === 'auth/wrong-password' ? 'Incorrect password' :
        'Authentication failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const renderOptions = () => (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign In / Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-grid gap-3">
        <Button 
          variant="outline-danger" 
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="d-flex align-items-center justify-content-center"
        >
          <FaGoogle className="me-2" />
          Continue with Google
        </Button>
        <Button 
          variant="outline-primary" 
          onClick={() => setMode('email-signin')}
          disabled={loading}
          className="d-flex align-items-center justify-content-center"
        >
          <FaEnvelope className="me-2" />
          Continue with Email
        </Button>
      </Modal.Body>
    </>
  );

  const renderEmailForm = () => (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === 'email-signin' ? 'Sign In with Email' : 'Create Account'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleEmailAuth} autoComplete="off">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="new-email"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              name="password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" disabled={loading}>
              {mode === 'email-signin' ? 'Sign In' : 'Sign Up'}
            </Button>
            <Button 
              variant="link" 
              onClick={() => setMode(mode === 'email-signin' ? 'email-signup' : 'email-signin')}
              disabled={loading}
            >
              {mode === 'email-signin' 
                ? "Don't have an account? Sign Up" 
                : "Already have an account? Sign In"}
            </Button>
            <Button 
              variant="link" 
              onClick={() => setMode('options')}
              disabled={loading}
            >
              Back to options
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );

  return (
    <Modal show={show} onHide={onHide} centered>
      {mode === 'options' ? renderOptions() : renderEmailForm()}
    </Modal>
  );
}

export default AuthModal;