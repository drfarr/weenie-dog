import styled from "styled-components";
import { HOTSPOT_SIZE } from "./constants";
import { HotspotPosition } from "shared/types/hotspot";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  ${({ top }: HotspotPosition): string => `top: ${top}px;`}
  ${({ left }: HotspotPosition): string => `left: ${left}px;`}
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 300px;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0px 3px 7px -1px rgba(0, 0, 0, 0.2);
  min-height: 200px;
  transform: translateX(calc(-50% + ${HOTSPOT_SIZE / 2}px));
  animation: appear 0.5s forwards;

  @keyframes appear {
    from {
      opacity: 0;
      margin: 0;
    }
    to {
      opacity: 1;
      margin-top: ${HOTSPOT_SIZE}px;
    }
  }
`;

export const Spot = styled.button``;
