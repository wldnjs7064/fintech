const Welcome = ({ username, age }) => {
  return (
    <p>
      {username}님 안녕하세요! {age}살입니다.
    </p>
  );
};

export default Welcome;
