import React from "react";

const PassingByFunc = props =>  <div>
                                    <p>{props.title}</p>
                                    <p>{props.nmbr}</p>
                                    <p>{props.anArr[3]}</p>
                                    <h1>{JSON.stringify(props.anArr)}</h1>
                                    <p>{props.anObj.x}</p>
                                    <h1>{JSON.stringify(props.anObj)}</h1>
                                  </div>

export default PassingByFunc;