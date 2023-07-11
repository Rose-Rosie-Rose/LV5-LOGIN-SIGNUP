const SingUp = () => {
  return (
    <>
      <form>
        <h1>회원정보 입력</h1>
        <div>
          <label>
            <span>아이디</span>
          </label>
          <input type="text" />
        </div>
        <div>
          <label>
            <span>비밀번호</span>
          </label>
          <input type="password" />
        </div>
      </form>
    </>
  );
};

export default SingUp;
