import type { IEntry } from "@/interfaces";
export { };

declare global {
  interface Window {
    Shopify: any;
    Currency: any;

    APP_LOADED: boolean;
    appStore?: Record<string, any>;
  }
}
