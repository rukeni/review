import '@/styles/tailwind.base.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { NextWebVitalsMetric } from 'next/dist/next-server/lib/utils';

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databeseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log('metric', metric);
}

export default App;
