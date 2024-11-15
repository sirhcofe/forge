import { Web3AuthContext } from "@/provider/AuthProvider";
import { Web3AuthContextType } from "@/types/user";
import { useContext } from "react";

export const useWeb3Auth = () => {
  const {
    isLoading,
    user,
    login,
    logout,
    authenticateUser,
    viemPublicClient,
    viemWalletClient,
  } = useContext(Web3AuthContext) as Web3AuthContextType;

  return {
    isLoading,
    user,
    login,
    logout,
    authenticateUser,
    viemPublicClient,
    viemWalletClient,
  };
};
