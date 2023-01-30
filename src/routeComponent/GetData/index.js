import React from "react";
import "./index.css";

const GetData = ({ Details }) => {
  //console.log(Object.values(Details));

  const keys = Object.keys(Details);

  const values = Object.values(Details);

  //console.log(values)

  const getListItems = (value) => {
    // const arrayValues = values.filter((e) => Array.isArray(e));
    //console.log(value)

    if (value.length !== 0) {
      return value.map((e, index) => {
        if (index < value.length - 1) {
          return (
            <span key={index} className="list-values">
              {e},
            </span>
          );
        } else {
          return (
            <span key={index} className="list-values">
              {e}
            </span>
          );
        }
      });
    }else{
      return(
        <span className="list-values" >null</span>
      )
    }
  };

  // return Object.keys(Details).map((item, index) => (
  //   //console.log(item+ ":" + Details[item])

  //   <div key={index}>
  //     <h6>
  //       {item} : {`${Details[item]}`}
  //     </h6>
  //   </div>
  // ));

  return Object.entries(Details).map(([key, value]) => (
    <div key={key} className="key-value-card">
      {key.includes("_") ? (
        <>
          <div className="project-key-details">
            <h5>{key.replace("_", " ")} :</h5>
          </div>
          <div className="project-value-details">
            {Array.isArray(value) ? (
              <div className="list-container">{getListItems(value)}</div>
            ) : (
              <h5>{value}</h5>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="project-key-details">
            <h5>{key} :</h5>
          </div>
          <div className="project-value-details">
            {Array.isArray(value) ? (
              <div className="list-container">{getListItems(value)}</div>
            ) : (
              value
            )}
          </div>
        </>
      )}
    </div>
  ));

  //   return(
  // Details.map(e => Object.entries(e).map(([key,value]) => (
  //   <div key={key}>
  //    {key}
  //   </div>
  // )))

  //   )

  // return(
  //   list.map(each => Object.entries(each).map(([key, value]) => (
  //     <div key={key}>
  //       <h6>{key} : {value}</h6> <br/>
  //     </div>
  //   )))
  // )

  // return(
  //   Object.entries(each).map(([key, value]) => (
  //     <div>
  //       <h6>{key} : {value}</h6> <br/>
  //     </div>
  //   ))
  // )

  // for (const [k, v] of Object.entries(each)) {
  //   return (
  //     <li>
  //       {k}:{v}
  //     </li>

  //     //console.log(k+":"+v)
  //   );
  // }

  // return(

  //   <div>
  //   {list.map(e =>
  //     {
  //       for (const [k,v] of Object.entries(e)) {
  //         //console.log(k + ":" + v)
  //         return(
  //           <li>{k}:{v}</li>
  //         )
  //       }
  //   })}

  // </div>
  // )
};

export default GetData;
