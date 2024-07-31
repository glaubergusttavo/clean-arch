interface ProductProps {
  type: string
  mark: string
  price: number
}

export class Product {
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

  constructor(props: ProductProps) {
    this.type = props.type
    this.mark = props.mark
    this.price = props.price
  }

}
