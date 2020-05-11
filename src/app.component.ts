import { LitElement, html } from "@rxdi/lit-html";
import { Hydrate } from "@rhtml/experiments";

import { IUser, UserService } from "./services/user.service";

import "./services/user.service";

interface IState {
  loading: boolean;
  routes: string[];
  user: IUser;
}

const App = html`
  <r-component>
    <r-selector>main-app</r-selector>
    <r-props>
      <r-prop key="routes" type="Array"></r-prop>
    </r-props>
    <r-render
      .state=${(state: IState, setState: (s: IState) => void) => html`
        <user-service
          .run=${async function (this: UserService) {
            state.user = await this.getUserById(1);
            state.loading = false;
            setState(state);
          }}
        ></user-service>
        <r-if .exp=${state.loading}>
          Loading...
        </r-if>
        <r-if .exp=${!state.loading}>
          <r-for .of=${state.routes}>
            <r-let .item=${(item: string) => html` ${item} `}></r-let>
          </r-for>
        </r-if>
      `}
    >
    </r-render>
  </r-component>
`;

Hydrate(App);

export declare class AppComponent extends LitElement {
  routes: string[];
}

declare global {
  interface HTMLElementTagNameMap {
    "main-app": AppComponent;
  }
}
