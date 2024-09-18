"use client";
// pages/_app.tsx
import { QueryClient, QueryClientProvider } from 'react-query';
 
const queryClient = new QueryClient();

function QueryClientProviderWrapper({
    children,
}: {    
  children: React.ReactNode;    
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryClientProviderWrapper;
