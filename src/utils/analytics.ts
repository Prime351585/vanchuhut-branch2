interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  
  declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }
  
  export const initializeGoogleAnalytics = (measurementId: string) => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', measurementId);
  };