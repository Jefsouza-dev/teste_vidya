import { styled } from "styled-components";

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 724px;
  height: 555px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .title {
    font-size: 14px;
    font-weight: 800;
    padding: 20px 20px 0 20px;
  }

  .closeButton {
    width: 13px;
    height: 13px;
    padding: 20px 20px 0 20px;
  }
`;

export const inputArea = styled.div`
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;

  .defaultInput {
    display: flex;
    gap: 34px;
    margin-bottom: 27px;
  }

  .biggerInputs {
    .inputLabel {
      color: #2f3036;
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export const Separator = styled.div`
  border: 1px solid #d9d9d9;
  margin: 27px 0 19px 0;
`;

export const DescriptionInput = styled.textarea`
  width: 684px;
  height: 94px;
  border-radius: 12px 16px 12px 16px;
  margin: 8px 0 8px 0;
  outline-color: #006ffd;
  box-sizing: border-box;
  padding: 12px;
  resize: none;
`;

export const UploadPhotoArea = styled.div`
  width: 682px;
  height: 129px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0 0 0;
  border: 5px dashed #c5c6cc;
  border-radius: 8px;

  .warning {
    font-size: 12px;
    font-weight: 400;
    color: #949597;
  }
`;

export const UploadPhotoButton = styled.button`
  width: 183px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #006ffd;
  gap: 4px;

  .buttonIcon {
    width: 35px;
    height: 24px;
  }

  .buttonTitle {
    color: #ffff;
    font-size: 12px;
    font-weight: 400;
  }
`;
