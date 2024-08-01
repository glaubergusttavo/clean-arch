interface ProductProps {
  id: string
  type: string
  mark: string
  price: number
}

export class Product {
  private id: string
  private type: string
  private mark: string
  private price: number

  get getType() {
    return this.type;
  }

  get getMark() {
    return this.mark;
  }

  get getPrice() {
    return this.price;
  }

  get getID() {
    return this.id;
  }

  constructor(props: ProductProps) {
    this.id = props.id
    this.type = props.type
    this.mark = props.mark
    this.price = props.price
  }

  public updatePrice(price: number){
  this.price = price
  }

}
