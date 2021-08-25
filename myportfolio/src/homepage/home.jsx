import React from "react";

export default function Homepage() {
  return (
    <>
      <figure class="text-center">
        <blockquote
          className="blockquote fst-italic fw-light m-3"
          style={{ fontSize: "2.25rem" }}
        >
          <p>
            "I have noticed even people who claim everything is predestined, and
            that we can do nothing to change it, look before they cross the
            road."
          </p>
        </blockquote>
        <figcaption
          className="blockquote-footer m-3"
          style={{ fontSize: "2rem" }}
        >
          Stephen Hawking{" "}
          <cite title="Source Title">
            Black Holes and Baby Universes and Other Essays
          </cite>
        </figcaption>
      </figure>
    </>
  );
}
