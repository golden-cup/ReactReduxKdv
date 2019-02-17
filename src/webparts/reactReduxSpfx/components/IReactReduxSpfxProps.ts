import { SPHttpClient } from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { PageContext } from "@microsoft/sp-page-context";

export interface IReactReduxSpfxProps {
  description: string;
  spHttpClient: SPHttpClient;
  context: PageContext;
}
