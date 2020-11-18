import React, { useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SeatContext } from "./SeatContext";
import Seat from "./Seat";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";

const TicketWidget = () => {
  const {
    state: { numOfRows, seatsPerRow, seats, hasLoaded },
  } = useContext(SeatContext);

  if (!hasLoaded) {
    return (
      <Div>
        <CircularProgress />
      </Div>
    );
  }

  return (
    <Wrapper>
      {range(numOfRows).map((rowIndex) => {
        const rowName = getRowName(rowIndex);

        return (
          <Row key={rowIndex}>
            <RowLabel>Row {rowName}</RowLabel>

            {range(seatsPerRow).map((seatIndex) => {
              const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
              const seat = seats[seatId];
              return (
                <SeatWrapper key={seatId}>
                  <Seat
                    rowIndex={rowIndex}
                    seatIndex={seatIndex}
                    width={36}
                    height={36}
                    seatId={seatId}
                    rowName={rowName}
                    price={seat.price}
                    status={seat.isBooked ? "unavailable" : "available"}
                  />
                </SeatWrapper>
              );
            })}
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Div = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: #202020;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const RowLabel = styled.div`
  font-weight: bold;
  color: #f5f5f5;
  width: 80px;
`;

const SeatWrapper = styled.div`
  padding: 5px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export default TicketWidget;
