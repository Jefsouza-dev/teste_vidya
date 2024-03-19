import * as S from "./styles";
import mockProduct from "../../../../../assets/mockProduct.svg";

export const EachProduct = () => {
  return (
    <S.productCard>
      <S.img>
        <img src={mockProduct} />
      </S.img>

      <S.DetailsSection>
        <span className="title">Produto</span>
        <span className="price">R$ 23,99</span>
      </S.DetailsSection>
    </S.productCard>
  );
};
