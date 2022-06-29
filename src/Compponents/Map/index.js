import React from 'react'
import styled from 'styled-components'
import map from '../../assets/images/map.png'
import goodie1 from '../../assets/images/goodie1.svg'
import goodie2 from '../../assets/images/red_cartoon 3.svg'
const Map = () => {
  return (
    <MapContainer>
        <StyledMap src={map}  />
        <SmileBaloons>
            <img style={{ zIndex: 1,  position: 'sticky' }} src={goodie1}  />
            <img style={{ marginLeft: -160, marginBottom:-200 }} src={goodie2}  />
        </SmileBaloons>
    </MapContainer>
  )
}

export default Map

const MapContainer = styled.div`
    position: absolute;
    right: 0;
    top:0;
    z-index: -1;
`;
const StyledMap = styled.img`
    width: 100%;
    max-width: 600px;
`;

const SmileBaloons = styled.div`
    position: absolute;
    left: -35px;
    top: 50%;
`;