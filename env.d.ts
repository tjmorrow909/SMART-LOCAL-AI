interface ImportMetaEnv {
    VITE_API_KEY: string;
    VITE_MAPS_API_KEY: string;
    // Add more VITE_ variables if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  