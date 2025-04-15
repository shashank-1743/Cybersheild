import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';

export const trackPageView = (pageName) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
};

export const trackButtonClick = (buttonName, additionalParams = {}) => {
  if (analytics) {
    logEvent(analytics, 'button_click', {
      button_name: buttonName,
      ...additionalParams
    });
  }
};