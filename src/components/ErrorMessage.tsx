import React from "react";

export const ErrorMessage = (): JSX.Element => {
  return (
    <article className="message is-danger vc-center">
      <div className="message-header">
        <p>Oops something went wrong</p>
      </div>
      <div className="message-body">
        Sorry for the inconvenience, please try to refresh the page
      </div>
    </article>
  );
};
