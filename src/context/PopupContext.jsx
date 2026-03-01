import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Global status modal for quote submission
  const [quoteStatus, setQuoteStatus] = useState({
    open: false,
    phase: "idle", // "idle" | "loading" | "success" | "error"
    message: "",
  });

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  const showQuoteSubmitting = () =>
    setQuoteStatus({
      open: true,
      phase: "loading",
      message: "Submitting your quote...",
    });

  const showQuoteSuccess = () =>
    setQuoteStatus({
      open: true,
      phase: "success",
      message: "Quote submitted successfully!",
    });

  const showQuoteError = (message = "Failed to submit quote. Please try again.") =>
    setQuoteStatus({
      open: true,
      phase: "error",
      message,
    });

  const closeQuoteStatus = () =>
    setQuoteStatus({
      open: false,
      phase: "idle",
      message: "",
    });

  return (
    <PopupContext.Provider
      value={{
        isQuoteOpen,
        openQuote,
        closeQuote,
        quoteStatus,
        showQuoteSubmitting,
        showQuoteSuccess,
        showQuoteError,
        closeQuoteStatus,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);