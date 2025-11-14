export class ModelBase {
  id: number;
  created_at: Date;
  modified_at: Date;
  active: boolean;

  constructor(id: number, created_at: Date, modified_at: Date, active: boolean) {
    this.id = id;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.active = active;
  }
}
