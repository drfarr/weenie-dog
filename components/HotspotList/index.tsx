import React, { useContext, memo } from "react";
import { Delete } from "styled-icons/material/Delete";
import Context from "../Context";
import { Box, Button, Flex, Text } from "rebass";
import Hotspot from "components/Hotspot";

const HotspotsList: React.FC = () => {
  const {
    state: { hotspots, isPointing },
    actions: { deleteHotspot, toggleIsPointing },
  } = useContext(Context);

  return (
    <>
      <Button
        className="btn btn-primary"
        disabled={isPointing}
        onClick={(): void => toggleIsPointing(true)}
      >
        Create hotspot
      </Button>

      {/* {hotspots.length === 0 && (
        <Text>
          Click in <strong>New Hotspot</strong> and select an element of site
        </Text>
      )} */}

      {hotspots.map((hotspot) => (
        <Hotspot key={hotspot.id} {...hotspot} />
      ))}
    </>
  );
};

export default memo(HotspotsList);
