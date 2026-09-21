import { lazy, Suspense, Component, ReactNode } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <>
      <LoadingProvider>
        <ErrorBoundary>
          <Suspense fallback={null}>
            <MainContainer>
              <Suspense fallback={null}>
                <CharacterModel />
              </Suspense>
            </MainContainer>
          </Suspense>
        </ErrorBoundary>
      </LoadingProvider>
    </>
  );
};

export default App;
