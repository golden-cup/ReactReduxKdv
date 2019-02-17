import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactReduxSpfxWebPartStrings';
import ReactReduxSpfx from './components/ReactReduxSpfx';
import { IReactReduxSpfxProps } from './components/IReactReduxSpfxProps';

export interface IReactReduxSpfxWebPartProps {
  description: string;
}

export default class ReactReduxSpfxWebPart extends BaseClientSideWebPart<IReactReduxSpfxProps> {

  public render(): void {
    const element: React.ReactElement<IReactReduxSpfxProps > = React.createElement(
      ReactReduxSpfx,
      {
        description: this.properties.description,
        spHttpClient: this.context.spHttpClient,
        context: this.context.pageContext
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
