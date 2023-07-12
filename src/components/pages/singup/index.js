import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleValueUpdate = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://3.38.191.164/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        console.log("서버와의 연결이 성공적으로 이뤄졌습니다.");
        navigate("/signin");
      } else {
        console.log("서봐와의 연결에 문제 발생");
      }
    } catch (error) {
      console.log("서버와의 연결 중 오류 발생", error);
    }
  };

  return (
    <>
      <form>
        <h1>회원정보 입력</h1>
        <div>
          <label>
            <span>아이디</span>
          </label>
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleValueUpdate}
          />
        </div>
        <div>
          <label>
            <span>비밀번호</span>
          </label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleValueUpdate}
          />
        </div>
        <button onClick={handleSubmit}>가입하기</button>
      </form>
    </>
  );
};

export default SingUp;
