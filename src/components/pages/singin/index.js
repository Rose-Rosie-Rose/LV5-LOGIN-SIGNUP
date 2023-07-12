import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingInPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleValueUpdate = (e) => {
    setFormValue({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://3.38.191.164/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formValues.email,
          password: formValues.password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message); // 서버에서 전달된 오류 메시지를 alert로 표시
        return;
      }

      const data = await response.json();
      alert("로그인 성공");
      localStorage.setItem("token", data.token);
      navigate("/", { replace: true });
    } catch (error) {
      console.log("서버와의 연결 중 오류 발생", error);
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <input
        type="text"
        name="email"
        value={formValues.email}
        onChange={handleValueUpdate}
      />
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleValueUpdate}
      />
      <input type="submit" value="로그인" onClick={handleSubmit} />
    </>
  );
};

export default SingInPage;
