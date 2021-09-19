import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요 , 제이름은 {props.name} 입니다.<br></br>
      children 값 : {props.childrens}
    </div>
  );
};

export default MyComponent;
