import { createContext, useContext, useState, type ReactNode } from "react";

type SqueezeContextType = {
  userInfo: {
    email: string;
    fullName: string;
  };
  setUserInfo: (info: { email: string; fullName: string }) => void;
};
const SqueezeContext = createContext<SqueezeContextType | undefined>(undefined);

const SqueezeProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    fullName: "",
  });

  return (
    <SqueezeContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </SqueezeContext.Provider>
  );
};

const useSqueezeInfo = () => {
  const context = useContext(SqueezeContext);
  if (!context) throw new Error("squeeze context was used outside its scope");
  return context;
};

export { SqueezeProvider };
// eslint-disable-next-line react-refresh/only-export-components
export default useSqueezeInfo;
