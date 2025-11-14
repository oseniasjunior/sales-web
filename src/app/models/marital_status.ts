import {ModelBase} from './model-base';

export class MaritalStatus extends ModelBase {
  name: string;

  constructor(id: number, created_at: Date, modified_at: Date, active: boolean, name: string) {
    super(id, created_at, modified_at, active);
    this.name= name;
  }
}
