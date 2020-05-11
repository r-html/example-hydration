import { Component } from "@rxdi/lit-html";
import { LitServiceElement } from "@rhtml/experiments";

export interface IUser {
  id?: number;
  name?: string;
}

/**
 * @customElement user-service
 */
@Component({
  selector: "user-service",
})
export class UserService extends LitServiceElement<UserService> {
  async getUserById(id: number) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ id, name: "Kristyian Tachev" }), 1000)
    );
  }
}
