import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault(); // 기본 동작인 페이지 새로고침 방지
    
      try {
        const response = await fetch("http://3.38.191.164/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: formValues.email,
            password: formValues.password,
          }),
          credentials: "same-origin", // 동일한 출처에서만 쿠키를 전송하도록 설정
        });

        console.log("서버 응답:", response);

        if (response.ok) {
          console.log("서버와의 연결이 성공적으로 이뤄졌습니다.");
          navigate("/signin", { replace: true });
        } else {
          const responseData = await response.json();
          console.log("오류 응답 데이터:", responseData);

          if (responseData.message === "이미 존재하는 유저 id입니다.") {
            alert("이미 사용 중인 아이디입니다.");
          } else {
            console.log("서버와의 연결에 문제 발생");
          }
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

export default SignUpPage;
