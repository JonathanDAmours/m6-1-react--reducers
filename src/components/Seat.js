import React from "react";
import styled from "styled-components";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import seatAvailable from "../assets/seat-available.svg";

const Seat = ({ seatId, rowName, rowIndex, seatIndex, price, status }) => {
  return (
    <>
      {status === "unavailable" ? (
        <Filter disabled={true}>
          <img alt="Seat Available" src={seatAvailable} />
        </Filter>
      ) : (
        <SeatBtn>
          <Tippy
            content={
              <span>
                Row: <strong>{rowName}</strong> | Seat:{" "}
                <strong>{seatId}</strong> | Price: <strong>${price}</strong>
              </span>
            }
          >
            <img alt="Seat Available" src={seatAvailable} />
          </Tippy>
        </SeatBtn>
      )}
    </>
  );
};

const SeatBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Filter = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  filter: grayscale(100%);

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Seat;
