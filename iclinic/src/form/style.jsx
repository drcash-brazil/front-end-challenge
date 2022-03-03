import styled from "styled-components";

const FormWrapper = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 30px;
height: auto;
width: 700px;
min-height: 30rem !important;
background: #fff;
border-radius: 20px;
@media (max-width: 776px) {
  width: 300px;
}
@media (max-width: 380px) {
  width: 270px;
  min-height: 40rem !important;
  .ml-auto {
    display: flex;
  }
}
.form-group {
  margin: 10px 0;
}
.form {
  color: red;
}
.next-buttton {
  margin-left: 20px;
}
.prev- buttton {
  margin-right: 20px;
}
.submit-buttton {
  margin-left: 10px;
}
.stepform2Wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0px;

  .form-group {
    width: 30%;
    @media (max-width: 776px) {
      width: 48%;
    }
  }
}
`;

const Parent = styled.section`
overflow: auto;
background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
padding: 100px;
height: 100vh;
@media (max-width: 776px) {
  padding: 10px;
}
.back {
  color: #fff;
  font-size: 25px;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  margin: 10px;
  text-align: center;
  a {
    color: #fff;
  }
  @media (max-width: 776px) {
    margin: 30px;
    position: sticky;
  }
  cursor: pointer;

  .icon {
    color: #fff;

    font-size: 20px;
  }
}
`;

export {Parent , FormWrapper}