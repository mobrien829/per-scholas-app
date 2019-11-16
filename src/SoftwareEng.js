import React from "react";
import { Link  } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const SoftwareEng = () => {
  return (
    <div>
      {console.log("rendered SoftwareEng")}
      <p>
        The field of software engineering entails Simplifying and improving the
        lives of the users of their software applications by assessing needs,
        desires and demands. Using backend and/or frontend languages to design
        and develop mockups and models to illustrate software functionality.
        Continuously learning and researching new tools to keep technology
        skills current
      </p>
      <Link
        to='/info-sessions'
      >
        <Button
          color='primary'
          content='Find Info Sessions'
        ></Button>
      </Link>
    </div>
  );
};

export default SoftwareEng;
