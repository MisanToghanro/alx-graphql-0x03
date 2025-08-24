import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';


const Home: React.FC = () => {



  return (
    <ErrorBoundary>
      <h1>Testing Error Boundary with Sentry</h1>
      <ErrorProneComponent />
    </ErrorBoundary>
  )
}

export default Home
