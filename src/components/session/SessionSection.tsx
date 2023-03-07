import React from 'react';
import styled from 'styled-components';
import Track from './Track';
import Arrow from './Arrow';
import Slick from './Slick';
import { ISessionData } from '@@types/request';
import EmptyView from '@common/empty/EmptyView';

type SessionProps = {
  trackName: string;
  trackData: ISessionData[];
};

const SessionSection: React.FC<SessionProps> = ({ trackName, trackData }) => {
  const length = trackData.length;
  return (
    <>
      <StWrapper>
        <Track track={trackName} trackData={trackData} />
        {trackData.length ? (
          <StSlideWrapper>
            <Arrow direction="left" length={length} />
            <Slick trackData={trackData} trackName={trackName} />
            <Arrow direction="right" length={length} />
          </StSlideWrapper>
        ) : (
          <EmptyView />
        )}
      </StWrapper>
    </>
  );
};
export default SessionSection;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  font-size: 4rem;
  width: 100%;
  margin: 3rem;
  @media (max-width: 1550px) {
    font-size: 2.3rem;
  }
`;

const StSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
