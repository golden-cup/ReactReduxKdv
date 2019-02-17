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
import * as service from '../service/Service';

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

  public componentDidMount() {
    console.log('I am mounted');
    //service.getPeriods();
  }

  public doAxios() {
    service.getPeriods();
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
                  <DefaultButton text="Console" onClick={this.showMyMessage.bind(this, 1, 50)} />
                  &nbsp;
                  <DefaultButton text="To store" onClick={
                    () => {
                      this.myFunc1();
                      Store.dispatch({ type: types.GOT_IT, payload: this.state.userName });
                    }
                  }
                  />
                  &nbsp;
                  <DefaultButton text="Func" onClick={e => this.handle2(e)} />
                  &nbsp;
                  <DefaultButton text="Axios" onClick={this.doAxios.bind(this)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
