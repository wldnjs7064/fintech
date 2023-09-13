import React from "react";

const linkComponent = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return (
          <>
            {news.title}
            <br></br>
          </>
        );
      })}
    </div>
  );
};

export default linkComponent;
