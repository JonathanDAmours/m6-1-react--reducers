import React, { useEffect, useContext } from "react";
import { SeatContext } from "./SeatContext";
import TicketWidget from "./TicketWidget";
import PurchaseModal from "./PurchaseModal";

import GlobalStyles from "./GlobalStyles";

function App() {
  const {
    state: { numOfRows },
    actions: { receiveSeatInfoFromServer },
  } = useContext(SeatContext);

  useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => res.json())
      .then((data) => receiveSeatInfoFromServer(data));
  }, []);

  return (
    <>
      <PurchaseModal />
      <GlobalStyles />
      This venue has {numOfRows} rows!
      <TicketWidget />
    </>
  );
}

export default App;
