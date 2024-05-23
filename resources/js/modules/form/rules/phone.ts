import { Rule } from "../lib/rule";
import { isValidPhoneNumber } from "libphonenumber-js";

export class PhoneRule extends Rule {
  get defaultMessage(): string {
    return "Invalid {attribute}";
  }
  validate(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.field.value === "+null") {
        this.field.update("");
      }
      resolve(!this.field.value || isValidPhoneNumber(this.field.value));
    });
  }
}
