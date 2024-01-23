import { useState, useEffect } from "react";

export function Loading(props) {
  return (
    <section className={props && props.removeLoader ? "loading" : "loading close"}>
      <span className="loader"></span>
    </section>
  );
}
