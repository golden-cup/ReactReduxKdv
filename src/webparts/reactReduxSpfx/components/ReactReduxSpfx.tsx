import * as React from 'react';
import styles from './ReactReduxSpfx.module.scss';
import { IReactReduxSpfxProps } from './IReactReduxSpfxProps';
import { IReactReduxSpfxState } from './IReactReduxSpfxState';
import { escape } from '@microsoft/sp-lodash-subset';
import { Provider } from 'react-redux';
import Store from '../../Store';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import * as types from '../actions/types';

export default class ReactReduxSpfx extends React.Component<IReactReduxSpfxProps, IReactReduxSpfxState> {

  constructor(props: IReactReduxSpfxProps) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  public showMyMessage(par1: String, par2: String): void {
    alert('asdf');
    let a = this;
    let b = par1 + " " + par2;
    console.log(b);

  }

  public myFunc1(): String {
    return "dimon from func1";
  }

  public handle2(event): void {
    console.log("Event : " + event);
    console.log("Ename " + event.name + "E value " + event.value);
    console.log("E Name " + event.target.name + " E value" + event.target.value);
  }

  public render(): React.ReactElement<IReactReduxSpfxProps> {
    return (
      <Provider store={Store}>
        <div className={styles.reactReduxSpfx}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div>
                  <p className={styles.description}>{escape(this.props.description)}</p>
                  <TextField label="Standard" onChanged={e => this.setState({ userName: e })} />
                  <DefaultButton text="Button 1" onClick={this.showMyMessage.bind(this, 1, 50)} />
                  <DefaultButton text="To store" onClick={
                    () => {
                      this.myFunc1();
                      Store.dispatch({ type: types.GOT_IT, payload: this.state.userName });
                    }
                  }
                  />
                  <DefaultButton text="Button 3" onClick={e => this.handle2(e)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
