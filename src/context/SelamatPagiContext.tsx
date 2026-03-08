import { createContext, useContext, useState, type ReactNode } from "react";

interface SelamatPagiContextType {
  enabled: boolean;
  toggle: () => void;
}

const SelamatPagiContext = createContext<SelamatPagiContextType>({
  enabled: false,
  toggle: () => {},
});

export function SelamatPagiProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const toggle = () => setEnabled((prev) => !prev);

  return (
    <SelamatPagiContext.Provider value={{ enabled, toggle }}>
      {children}
    </SelamatPagiContext.Provider>
  );
}

export function useSelamatPagi() {
  return useContext(SelamatPagiContext);
}
